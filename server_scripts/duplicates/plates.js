//requires:handcrafted

ServerEvents.recipes(event => {
    // Wood plate
    event.remove({ output: 'handcrafted:wood_plate' });
    event.shaped(
        Item.of('handcrafted:wood_plate', 5),
        [
            ' A ',
            'AAA',
            ' A '
        ],
        {
            A: '#minecraft:wooden_slabs'
        }
    )
    event.remove({ output: 'handcrafted:terracotta_plate' });
    event.shaped(
        Item.of('handcrafted:terracotta_plate', 5),
        [
            ' A ',
            'AAA',
            ' A '
        ],
        {
            A: 'clayworks:terracotta_slab'
        }
    )
    event.recipes.stonecutting('handcrafted:terracotta_plate', 'clayworks:terracotta_slab');
});