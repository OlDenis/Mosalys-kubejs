const stone_types = [
    'andesite',
    'diorite',
    'granite',
    'calcite',
    'tuff',
    'netherrack',
    'blackstone',
    'end_stone',
    'purpur',
    'prismarine',
    'dark_prismarine',
    'sandstone',
    'red_sandstone',
    'quartz',
    'basalt',
    'deepslate'
];
const block_types = ['','_stairs','_slab','_wall']

let mod = 'stoneworks';
let moss = '';

ServerEvents.recipes(event => {
    // Recipe function for mossy variants of stone blocks
    function mossyVariantsRecipes(block, mossy_block, moss, recipe_id) {
        for (let type of block_types){
            if (type != '' && block.includes('bricks')) {
                mossy_block = mossy_block.slice(0,-1);
                block = block.slice(0,-1);
            }
            // Skip non-existing blocks
            if (block.includes('quartz') && type !== '') continue;
            event.remove({ output: mossy_block + type });
            event.shapeless(
                Item.of(mossy_block + type),
                [
                    block + type,
                    moss
                ]
            ).id(recipe_id + type);
        }
    }

    function blockSetStonecutting(block, recipe_id) {
        for (let type of block_types){
            if (type === '') continue;
            let amount = 1;
            if (type === '_slab') {
                amount = 2;
            }
            event.stonecutting(
                Item.of(block.replace('bricks', 'brick').replace('tiles', 'tile') + type, amount),
                block
            ).id(recipe_id + type + '_from_stonecutting');
        }
    }

    function blockSetShapedRecipes(block, recipe_id) {
        recipe_id = 'shaped_' + recipe_id;
        // Stairs
        event.shaped(
            Item.of(block.replace('bricks', 'brick').replace('tiles', 'tile') + '_stairs', 4),
            [
                'M  ',
                'MM ',
                'MMM'
            ],
            {
                M: block
            }
        ).id(recipe_id + '_stairs');
        // Slab
        event.shaped(
            Item.of(block.replace('bricks', 'brick').replace('tiles', 'tile') + '_slab', 6),
            [
                'MMM',
            ],
            {
                M: block
            }
        ).id(recipe_id + '_slab');
        // Wall
        event.shaped(
            Item.of(block.replace('bricks', 'brick').replace('tiles', 'tile') + '_wall', 6),
            [
                'MMM',
                'MMM'
            ],
            {
                M: block
            }
        ).id(recipe_id + '_wall');
    }

    function blockSetRecipes(block, recipe_id){
        blockSetShapedRecipes(block, recipe_id);
        blockSetStonecutting(block, recipe_id);
    }

    function blockCoatRecipes(bare_block, coated_block, coat, recipe_id ){
        event.shapeless(
            coated_block,
            [
                coat,
                bare_block
            ]
        );
        blockSetRecipes(coated_block, recipe_id)
    }


    // Moss clump crafting
    event.shapeless(
        Item.of('kubejs:moss_clump', 9),
        'minecraft:moss_block'
    ).id('kubejs:moss_clump_from_moss_block');
    event.shapeless(
        'minecraft:moss_block',
        Item.of('kubejs:moss_clump', 9),
    ).id('kubejs:moss_block_from_moss_clump');
    event.shaped(
        Item.of('minecraft:moss_carpet', 1),
        [
            'MMM'
        ],
        {
            M: 'kubejs:moss_clump'
        }
    ).id('kubejs:moss_carpet_from_moss_clump'); 

    // Generate mossy variants recipes
    for (let stone of stone_types){
        blockSetStonecutting(
            `stoneworks:mossy_cobbled_${stone}`,
            `kubejs:mossy_cobbled_${stone}`
        )
        blockSetShapedRecipes(
            `stoneworks:mossy_cobbled_${stone}`,
            `kubejs:mossy_cobbled_${stone}`
        )
        // Cobbled variants
        moss = 'kubejs:moss_clump';
        // Special cases for cobbled stones already in minecraft
        if (stone === 'deepslate') {
            mod = 'minecraft';
        } else {
            mod = 'stoneworks';
        }
        mossyVariantsRecipes(
            `${mod}:cobbled_${stone}`,
            `stoneworks:mossy_cobbled_${stone}`,
            moss,
            `kubejs:mossy_cobbled_${stone}`
        )

        // Bricks variants
        blockSetRecipes(
            `stoneworks:mossy_${stone}_bricks`,
            `kubejs:mossy_${stone}_bricks`
        )
        // Special cases for moss type
        if (stone === 'basalt' || stone === 'blackstone') {
            moss = 'kubejs:warped_spores';
        } else if (stone === 'netherrack'){
            moss = 'kubejs:crimson_spores';
        } else {
            moss = 'kubejs:moss_clump';
        }
        // Special cases for stone bricks type already in minecraft
        if (stone === 'tuff' || stone === 'blackstone' || stone === 'end_stone' || stone === 'deepslate' || stone === 'quartz') {
            mod = 'minecraft';
        } else {
            mod = 'stoneworks';
        }
        if (stone === 'blackstone') {
            continue;
        }
        mossyVariantsRecipes(
            `${mod}:${stone}_bricks`,
            `stoneworks:mossy_${stone}_bricks`,
            moss,
            `kubejs:mossy_${stone}_bricks`
        )
        
   }
   // Blackstone
    mossyVariantsRecipes(
        `minecraft:polished_blackstone_bricks`,
        `stoneworks:mossy_blackstone_bricks`,
        'kubejs:warped_spores',
        `kubejs:mossy_blackstone_bricks`
    )

    // Sand
    event.shapeless(
        'minecraft:sand',
        '4x immersive_weathering:sand'
    );
    event.shapeless(
        '4x immersive_weathering:sand',
        'minecraft:sand'
    );

    blockCoatRecipes('immersive_weathering:sandy_stone', 'minecraft:stone', 'immersive_weathering:sand', 'sandy_stone')
    blockCoatRecipes('immersive_weathering:sandy_stone_bricks', 'minecraft:stone_bricks', 'immersive_weathering:sand', 'sandy_stone_bricks')
    blockCoatRecipes('immersive_weathering:sandy_cobblestone', 'minecraft:cobblestone', 'immersive_weathering:sand', 'sandy_cobblestone' )

    blockCoatRecipes('immersive_weathering:sandier_stone', 'immersive_weathering:sandy_stone', 'immersive_weathering:sand', 'sandier_stone')
    blockCoatRecipes('immersive_weathering:sandier_stone_bricks', 'immersive_weathering:sandy_stone_bricks', 'immersive_weathering:sand', 'sandier_stone_bricks')
    blockCoatRecipes('immersive_weathering:sandier_cobblestone', 'immersive_weathering:sandy_cobblestone', 'immersive_weathering:sand', 'sandier_cobblestone' )

    // Snow
    event.shaped(
        'immersive_weathering:snow_bricks',
        [
            'AA',
            'AA'
        ],
        {
            'A' : 'minecraft:snow_block'
        }
    )
    blockSetRecipes('immersive_weathering:snow_bricks', 'snow_bricks')

    blockCoatRecipes('immersive_weathering:snowy_stone', 'minecraft:stone', 'minecraft:snowball', 'snowy_stone')
    blockCoatRecipes('immersive_weathering:snowy_stone_bricks', 'minecraft:stone_bricks', 'minecraft:snowball', 'snowy_stone_bricks')
    blockCoatRecipes('immersive_weathering:snowy_cobblestone', 'minecraft:cobblestone', 'minecraft:snowball', 'snowy_cobblestone')
});

// Make mossy blocks shearable

function shearCoat(bare_block, coated_block, coat_item, tool) {
    if (tool === undefined) tool = 'shears';
    BlockEvents.rightClicked(coated_block, event => {
        const { block, item, player } = event 
        block.properties; // Store block properties
        if (item.id.includes(tool)) {
            // Remove the moss
            block.set(bare_block, block.properties)
            // And drop it as an item 
            block.popItemFromFace(coat_item, event.getFacing()) 
            // Damage the shears
            let currentdamage = item.getDamageValue();
            if (!player.isCreative()){
                item.setDamageValue(currentdamage + 1); // Damage the shears by 1
            }
            player.swing() //makes the hand swing as if an item was used
        }
    });
}

function addCoat(bare_block, coated_block, coat_item) {
    BlockEvents.rightClicked(bare_block, event => {
        const { block, item, player } = event
        const properties = block.properties; // Store block properties
        if (item === coat_item) {
            if (item === 'immersive_weathering:sand'){
                properties.level = 0;
            }
            // Add the coat
            block.set(coated_block, properties)
            
            // Consume the coat item
            if (!player.isCreative() && coat_item != 'minecraft:snowball' && !coat_item.includes('brick')){
                item.shrink(1);
            }
            if (coat_item == 'kubejs:warped_spores' || coat_item == 'crimson_spores') {
                event.cancel()
                player.give(coat_item, 1)
            } // flickers...
            player.swing() //makes the hand swing as if an item was used
        }
    });
}

function coatBlock(bare_block, coated_block, coat_item, tool) {
    shearCoat(bare_block, coated_block, coat_item, tool);
    addCoat(bare_block, coated_block, coat_item);
}

function coatBlocks(bare_block, coated_block, coat_item, tool) {
    for (let type of block_types){
        if (type === ''){
            coatBlock(bare_block, coated_block, coat_item, tool);
        }
        else {
            bare_block = bare_block.replace('bricks', 'brick').replace('tiles', 'tile')
            coated_block = coated_block.replace('bricks', 'brick').replace('tiles', 'tile')
            coatBlock(bare_block + type, coated_block + type, coat_item, tool);
        }
    }
}

moss = 'kubejs:moss_clump';
// Cobbled variants
coatBlocks('minecraft:cobblestone', 'minecraft:mossy_cobblestone', moss)
coatBlocks( 'minecraft:andesite', 'stoneworks:mossy_cobbled_andesite', moss);
coatBlocks( 'minecraft:diorite', 'stoneworks:mossy_cobbled_diorite', moss);
coatBlocks( 'minecraft:granite', 'stoneworks:mossy_cobbled_granite', moss);
coatBlocks( 'minecraft:calcite', 'stoneworks:mossy_cobbled_calcite', moss);
coatBlocks( 'minecraft:tuff', 'stoneworks:mossy_cobbled_tuff', moss);
coatBlocks( 'minecraft:netherrack', 'stoneworks:mossy_cobbled_netherrack', moss);
coatBlocks( 'stoneworks:cobbled_blackstone', 'stoneworks:mossy_cobbled_blackstone', moss);
coatBlocks( 'minecraft:end_stone', 'stoneworks:mossy_cobbled_end_stone', moss);
coatBlocks( 'minecraft:purpur_block', 'stoneworks:mossy_cobbled_purpur', moss);
coatBlocks( 'minecraft:prismarine', 'stoneworks:mossy_cobbled_prismarine', moss);
coatBlocks( 'minecraft:dark_prismarine', 'stoneworks:mossy_cobbled_dark_prismarine', moss);
coatBlocks( 'minecraft:sandstone', 'stoneworks:mossy_cobbled_sandstone', moss);
coatBlocks( 'minecraft:red_sandstone', 'stoneworks:mossy_cobbled_red_sandstone', moss);
coatBlocks( 'minecraft:quartz', 'stoneworks:mossy_cobbled_quartz', moss);
coatBlocks( 'minecraft:basalt', 'stoneworks:mossy_cobbled_basalt', moss);
coatBlocks( 'minecraft:deepslate', 'stoneworks:mossy_cobbled_deepslate', moss);

// Bricks variants
coatBlocks('minecraft:stone_bricks', 'minecraft:mossy_stone_bricks', moss)
coatBlocks('stoneworks:andesite_bricks', 'stoneworks:mossy_andesite_bricks', moss);
coatBlocks('stoneworks:diorite_bricks', 'stoneworks:mossy_diorite_bricks', moss);
coatBlocks('stoneworks:granite_bricks', 'stoneworks:mossy_granite_bricks', moss);
coatBlocks( 'stoneworks:calcite_bricks', 'stoneworks:mossy_calcite_bricks', moss);
coatBlocks( 'minecraft:tuff_bricks', 'stoneworks:mossy_tuff_bricks', moss);
coatBlocks( 'stoneworks:netherrack_bricks', 'stoneworks:mossy_netherrack_bricks', 'kubejs:crimson_spores');
coatBlocks( 'minecraft:polished_blackstone_bricks', 'stoneworks:mossy_blackstone_bricks', 'kubejs:warped_spores');
coatBlocks( 'minecraft:end_stone_bricks', 'stoneworks:mossy_end_stone_bricks', moss);
coatBlocks( 'stoneworks:purpur_bricks', 'stoneworks:mossy_purpur_bricks', moss);
coatBlocks( 'stoneworks:prismarine_bricks', 'stoneworks:mossy_prismarine_bricks', moss);
coatBlocks( 'stoneworks:dark_prismarine_bricks', 'stoneworks:mossy_dark_prismarine_bricks', moss);
coatBlocks( 'stoneworks:sandstone_bricks', 'stoneworks:mossy_sandstone_bricks', moss);
coatBlocks( 'stoneworks:red_sandstone_bricks', 'stoneworks:mossy_red_sandstone_bricks', moss);
coatBlocks('minecraft:quartz_bricks', 'stoneworks:mossy_quartz_bricks', moss);
coatBlocks( 'stoneworks:basalt_bricks', 'stoneworks:mossy_basalt_bricks', 'kubejs:warped_spores');
coatBlocks( 'minecraft:deepslate_bricks', 'stoneworks:mossy_deepslate_bricks', moss);

// Aether mossy holystone
coatBlocks( 'aether:holystone', 'aether:mossy_holystone', 'kubejs:aether_moss_clump');
coatBlocks('aether:holystone_bricks', 'deep_aether:mossy_holystone_bricks', 'kubejs:aether_moss_clump');
coatBlocks('deep_aether:holystone_tiles', 'deep_aether:mossy_holystone_tiles', 'kubejs:aether_moss_clump');

// Mossy oak from ribbits
for (let type of ['', '_stairs', '_slab', '_fence', '_fence_gate', '_door']) {
    coatBlock('minecraft:oak_planks' + type, 'ribbits:mossy_oak_planks' + type, moss);
}

// Single blocks
// Twilight Forest
coatBlock('twilightforest:etched_nagastone', 'twilightforest:mossy_etched_nagastone', moss);
coatBlock('twilightforest:nagastone_pillar', 'twilightforest:mossy_nagastone_pillar', moss);
coatBlock('twilightforest:nagastone_stairs_left', 'twilightforest:mossy_nagastone_stairs_left', moss);
coatBlock('twilightforest:nagastone_stairs_right', 'twilightforest:mossy_nagastone_stairs_right', moss);
coatBlock('twilightforest:mazestone', 'twilightforest:mossy_mazestone', moss);
coatBlock('twilightforest:underbrick', 'twilightforest:mossy_underbrick', moss);
coatBlock('twilightforest:towerwood', 'twilightforest:mossy_towerwood', moss);
coatBlock('twilightforest:castle_brick', 'twilightforest:mossy_castle_brick', moss);
coatBlock('twilightforest:castle_brick_stairs', 'twilightforest:mossy_castle_brick_stairs', moss);
// Born in Chaos
coatBlock('born_in_chaos_v1:black_argillite_brick', 'born_in_chaos_v1:mossy_black_argillite_brick', moss);
coatBlock('born_in_chaos_v1:black_argillite_brick_n', 'born_in_chaos_v1:mossy_black_argillite_brick_n', moss);
// Regions Unexplored
coatBlock('minecraft:stone', 'regions_unexplored:mossy_stone', moss);
// Kubejs
coatBlock('minecraft:chiseled_stone_bricks', 'immersive_weathering:mossy_chiseled_stone_bricks', moss);
coatBlocks('minecraft:bricks', 'immersive_weathering:mossy_bricks', moss);


// Kelpy blocks
const kelp = "minecraft:kelp"
coatBlocks('minecraft:cobblestone', 'upgrade_aquatic:kelpy_cobblestone', kelp)
coatBlocks('minecraft:stone_bricks', 'upgrade_aquatic:kelpy_stone_bricks', kelp)

// Sand
const shovel = 'shovel';
const sand = 'immersive_weathering:sand';
coatBlocks('minecraft:cobblestone', 'immersive_weathering:sandy_cobblestone', sand, shovel)
coatBlocks('minecraft:stone', 'immersive_weathering:sandy_stone', sand, shovel)
coatBlocks('minecraft:stone_bricks', 'immersive_weathering:sandy_stone_bricks', sand, shovel)
coatBlock('minecraft:chiseled_stone_bricks', 'immersive_weathering:sandy_chiseled_stone_bricks', sand, shovel)
coatBlocks('immersive_weathering:sandy_cobblestone', 'immersive_weathering:sandier_cobblestone', sand, shovel)
coatBlocks('immersive_weathering:sandy_stone', 'immersive_weathering:sandier_stone', sand, shovel)
coatBlocks('immersive_weathering:sandy_stone_bricks', 'immersive_weathering:sandier_stone_bricks', sand, shovel)
coatBlock('immersive_weathering:sandy_chiseled_stone_bricks', 'immersive_weathering:sandier_chiseled_stone_bricks', sand, shovel)
coatBlock('minecraft:dirt', 'immersive_weathering:sandy_dirt', sand, shovel)

// Snow
const snow = 'minecraft:snowball'
function snowedBlock(base_block, snowed_block){
    coatBlock(base_block, snowed_block, snow, shovel)
}
function snowedBlocks(base_block, snowed_block){
    coatBlocks(base_block, snowed_block, snow, shovel)
}
snowedBlocks('minecraft:cobblestone', 'immersive_weathering:snowy_cobblestone')
snowedBlocks('minecraft:stone', 'immersive_weathering:snowy_stone')
snowedBlocks('minecraft:stone_bricks', 'immersive_weathering:snowy_stone_bricks')
snowedBlock('minecraft:chiseled_stone_bricks', 'immersive_weathering:snowy_chiseled_stone_bricks')
snowedBlock('minecraft:dirt', 'immersive_weathering:snowy_dirt')

snowedBlocks('immersive_weathering:snowy_cobblestone', 'dustydecorations:snowy_cobblestone')
snowedBlocks('immersive_weathering:snowy_stone_bricks', 'dustydecorations:snowy_stone_bricks')


// Cracked blocks
function crackBlock(cracked_block, base_block, brick){
    coatBlock(cracked_block, base_block, brick, 'pickaxe')
}

crackBlock('minecraft:cracked_stone_bricks', 'minecraft:stone_bricks', 'immersive_weathering:stone_brick')
crackBlock('minecraft:infested_cracked_stone_bricks', 'minecraft:infested_stone_bricks', 'immersive_weathering:stone_brick')
crackBlock('minecraft:cracked_deepslate_bricks', 'minecraft:deepslate_bricks', 'immersive_weathering:deepslate_brick')
crackBlock('minecraft:cracked_deepslate_tiles', 'minecraft:deepslate_tiles', 'immersive_weathering:deepslate_tile')
crackBlock('minecraft:cracked_polished_blackstone_bricks', 'minecraft:polished_blackstone_bricks', 'immersive_weathering:blackstone_brick')
crackBlock('minecraft:cracked_polished_nether_bricks', 'minecraft:polished_nether_bricks', 'minecraft:nether_brick')
crackBlock('immersive_weathering:cracked_bricks', 'minecraft:bricks', 'minecraft:brick')
crackBlock('immersive_weathering:cracked_prismarine_bricks', 'minecraft:prismarine_bricks', 'immersive_weathering:prismarine_brick')