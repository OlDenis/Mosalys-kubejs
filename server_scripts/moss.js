ServerEvents.tags("item", event => {
    event.add('kubejs:moss_equivalent', 'minecraft:moss_block');
    event.add('kubejs:moss_equivalent', 'minecraft:vine');
});

const stone_types = [
    'andesite',
    'diorite',
    'granite',
    'calcite',
    'tuff',
    'netherrack',
    'blackstone',
    'end_stone',
    'sandstone',
    'red_sandstone',
    'basalt',
    'deepslate'
];
const state = [
    'cobbled',
    'bricks'
]
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

    function mossyStonecutting(mossy_block, recipe_id) {
        for (let type of block_types){
            if (type === '') continue;
            let amount = 1;
            if (type === '_slab') {
                amount = 2;
            }
            event.stonecutting(
                Item.of(mossy_block.replace('bricks', 'brick') + type, amount),
                mossy_block
            ).id(recipe_id + type + '_from_stonecutting');
        }
    }

    function mossyShapedRecipes(mossy_block, recipe_id) {
        recipe_id = 'shaped_' + recipe_id;
        // Stairs
        event.shaped(
            Item.of(mossy_block.replace('bricks', 'brick') + '_stairs', 4),
            [
                'M  ',
                'MM ',
                'MMM'
            ],
            {
                M: mossy_block
            }
        ).id(recipe_id + '_stairs');
        // Slab
        event.shaped(
            Item.of(mossy_block.replace('bricks', 'brick') + '_slab', 6),
            [
                'MMM',
            ],
            {
                M: mossy_block
            }
        ).id(recipe_id + '_slab');
        // Wall
        event.shaped(
            Item.of(mossy_block.replace('bricks', 'brick') + '_wall', 6),
            [
                'MMM',
                'MMM'
            ],
            {
                M: mossy_block
            }
        ).id(recipe_id + '_wall');
    }


    // Generate mossy variants recipes
    for (let stone of stone_types){
        mossyStonecutting(
            `stoneworks:mossy_cobbled_${stone}`,
            `kubejs:mossy_cobbled_${stone}`
        )
        mossyShapedRecipes(
            `stoneworks:mossy_cobbled_${stone}`,
            `kubejs:mossy_cobbled_${stone}`
        )
        // Cobbled variants
        moss = '#kubejs:moss_equivalent';
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
        mossyStonecutting(
            `stoneworks:mossy_${stone}_bricks`,
            `kubejs:mossy_${stone}_bricks`
        )
        mossyShapedRecipes(
            `stoneworks:mossy_${stone}_bricks`,
            `kubejs:mossy_${stone}_bricks`
        )
        // Special cases for moss type
        if (stone === 'basalt' || stone === 'blackstone') {
            moss = 'minecraft:twisting_vines';
        } else if (stone === 'netherrack'){
            moss = 'minecraft:weeping_vines';
        } else {
            moss = '#kubejs:moss_equivalent';
        }
        // Special cases for stone bricks type already in minecraft
        if (stone === 'tuff' || stone === 'blackstone' || stone === 'end_stone' || stone === 'deepslate') {
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
        'minecraft:twisting_vines',
        `kubejs:mossy_blackstone_bricks`
    )
});