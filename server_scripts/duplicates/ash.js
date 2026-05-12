//requires:supplementaries
//requires:luminous_nether
//requires:regions_unexplored
//requires:farmersdelight

ServerEvents.recipes(event => {
    // Ash
    event.remove({ id: "luminous_nether:gunpowderecipe" });
    event.remove({ id: "regions_unexplored:ash" });
    event.shapeless(
        'regions_unexplored:ash',
        '9x #c:dusts/ash'
    );
    event.shapeless(
        Item.of('supplementaries:ash', 9),
        'regions_unexplored:ash'
    );
    event.shapeless(
        'luminous_nether:ashes',
        'supplementaries:ash'
    );
    event.shapeless(
        'supplementaries:ash',
        'luminous_nether:ashes'
    );
    event.shapeless(
        'farmersdelight:organic_compost',
        [
            '#kubejs:dirt',
            '2x farmersdelight:straw',
            '2x minecraft:bone_meal',
            '4x #c:dusts/ash'
        ]
    )
    event.shapeless(
        'farmersdelight:organic_compost',
        [
            '#kubejs:dirt',
            '2x farmersdelight:straw',
            '2x minecraft:rotten_flesh',
            '4x #c:dusts/ash'
        ]
    )
})