ServerEvents.recipes(event => {
    function farmersRecipe(output, o_count, input, i_count, tool, r_id) {
        event.recipes.farmersdelight.cutting(
            Ingredient.of(input, i_count),
            tool,
            Item.of(output, o_count)
        ).id(r_id);
    }
    // Spores crafting
    farmersRecipe(
        'kubejs:crimson_spores', 4,
        'minecraft:weeping_vines', 1,
        '#c:tools/knife', 'kubejs:crimson_spores_from_weeping_vines'
    );
    farmersRecipe(
        'kubejs:crimson_spores', 2,
        'minecraft:crimson_roots', 1,
        '#c:tools/knife', 'kubejs:crimson_spores_from_crimson_roots'
    );
    farmersRecipe(
        'kubejs:warped_spores', 4,
        'minecraft:warped_roots', 1,
        '#c:tools/knife', 'kubejs:warped_spores_from_warped_roots'
    );
    farmersRecipe(
        'kubejs:warped_spores', 2,
        'minecraft:twisting_vines', 1,
        '#c:tools/knife', 'kubejs:warped_spores_from_twisting_vines'
    );

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

    // Aether moss clump crafting
    event.shapeless(
        Item.of('kubejs:aether_moss_clump', 9),
        'deep_aether:aether_moss_block'
    ).id('kubejs:aether_moss_clump_from_moss_block');
    event.shapeless(
        'deep_aether:aether_moss_block',
        Item.of('kubejs:aether_moss_clump', 9),
    ).id('kubejs:moss_block_from_aether_moss_clump');
    event.shaped(
        Item.of('deep_aether:aether_moss_carpet', 1),
        [
            'MMM'
        ],
        {
            M: 'kubejs:aether_moss_clump'
        }
    ).id('kubejs:moss_carpet_from_aether_moss_clump');
});