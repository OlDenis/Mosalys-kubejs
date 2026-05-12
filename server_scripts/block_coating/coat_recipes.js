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
const block_types = ['', '_stairs', '_slab', '_wall']

let mod = 'stoneworks';
let moss = '';

ServerEvents.recipes(event => {
    // Recipe function for mossy variants of stone blocks
    function mossyVariantsRecipes(block, mossy_block, moss, recipe_id) {
        for (let type of block_types) {
            if (type != '' && block.includes('bricks')) {
                mossy_block = mossy_block.slice(0, -1);
                block = block.slice(0, -1);
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
        for (let type of block_types) {
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

    function blockSetRecipes(block, recipe_id) {
        blockSetShapedRecipes(block, recipe_id);
        blockSetStonecutting(block, recipe_id);
    }

    function blockCoatRecipe(coated_block, bare_block, coat, recipe_id) {
        event.shapeless(
            coated_block,
            [
                coat,
                bare_block
            ]
        ).id(recipe_id);
    }

    function blockCoatRecipes(coated_block, bare_block, coat, recipe_id) {
        blockCoatRecipe(coated_block, bare_block, coat, recipe_id);
        blockSetRecipes(coated_block, recipe_id)
    }

    // Generate mossy variants recipes
    for (let stone of stone_types) {
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
        } else if (stone === 'netherrack') {
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
    // Stone
    event.remove({ output: 'regions_unexplored:mossy_stone' });
    blockCoatRecipes('regions_unexplored:mossy_stone','minecraft:stone', 'kubejs:moss_clump','mossy_stone')

    // Cobblestone
    event.remove({ output: 'minecraft:mossy_cobblestone' });
    blockCoatRecipe('minecraft:mossy_cobblestone', 'minecraft:cobblestone', 'kubejs:moss_clump', 'mossy_cobblestone')
    
    // Stone bricks
    event.remove({ output: 'minecraft:mossy_stone_bricks' });
    blockCoatRecipe('minecraft:mossy_stone_bricks', 'minecraft:stone_bricks', 'kubejs:moss_clump', 'mossy_stone_bricks')
    blockCoatRecipe('immersive_weathering:mossy_chiseled_stone_bricks', 'minecraft:chiseled_stone_bricks', 'kubejs:moss_clump', 'mossy_chiseled_stone_bricks')

    // Blackstone
    mossyVariantsRecipes(
        'minecraft:polished_blackstone_bricks',
        'stoneworks:mossy_blackstone_bricks',
        'kubejs:warped_spores',
        'kubejs:mossy_blackstone_bricks'
    )

    // Bricks
    mossyVariantsRecipes(
        'minecraft:bricks',
        'immersive_weathering:mossy_bricks',
        'kubejs:moss_clump',
        'kubejs:mossy_bricks'
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
    blockCoatRecipes('immersive_weathering:sandy_cobblestone', 'minecraft:cobblestone', 'immersive_weathering:sand', 'sandy_cobblestone')

    blockCoatRecipes('immersive_weathering:sandier_stone', 'immersive_weathering:sandy_stone', 'immersive_weathering:sand', 'sandier_stone')
    blockCoatRecipes('immersive_weathering:sandier_stone_bricks', 'immersive_weathering:sandy_stone_bricks', 'immersive_weathering:sand', 'sandier_stone_bricks')
    blockCoatRecipes('immersive_weathering:sandier_cobblestone', 'immersive_weathering:sandy_cobblestone', 'immersive_weathering:sand', 'sandier_cobblestone')

    // Snow
    event.shaped(
        'immersive_weathering:snow_bricks',
        [
            'AA',
            'AA'
        ],
        {'A': 'minecraft:snow_block'}
    ).id('snow_bricks');
    blockSetRecipes('immersive_weathering:snow_bricks', 'snow_bricks')

    blockCoatRecipes('immersive_weathering:snowy_stone', 'minecraft:stone', 'minecraft:snowball', 'snowy_stone')
    blockCoatRecipes('immersive_weathering:snowy_stone_bricks', 'minecraft:stone_bricks', 'minecraft:snowball', 'snowy_stone_bricks')
    blockCoatRecipes('immersive_weathering:snowy_cobblestone', 'minecraft:cobblestone', 'minecraft:snowball', 'snowy_cobblestone')
});
