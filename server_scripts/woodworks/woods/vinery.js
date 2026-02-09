ServerEvents.recipes(event => {
    // Vinery
    commonWoodRecipes(event, 'vinery:dark_cherry');
    lattice(event, 'vinery:dark_cherry_logs', 'vinery:dark_cherry_planks');
    v_chair(event, 'vinery:dark_cherry_logs', 'vinery:dark_cherry_planks');
    v_table(event, 'vinery:dark_cherry_logs', 'vinery:dark_cherry_planks');

    registerSawingRecipes(event, 'vinery:dark_cherry_planks', 'vinery:dark_cherry_floorboard', 1, false);

    way_sign(event, 'vinery', 'dark_cherry');

    // Harmonize recipes with unusual furniture's or handcrafted's
    event.remove({ id: 'vinery:dark_cherry_chair' });
    event.shaped('vinery:dark_cherry_chair', 
        [
            'AA',
            'AA',
            'BB'
        ],
        {
            'A': 'vinery:dark_cherry_slab',
            'B': 'minecraft:stick'
        }
    );
    event.remove({ id: 'vinery:dark_cherry_table' });
    event.shaped('vinery:dark_cherry_table',
        [
            'AAA',
            'B B'
        ],
        {
            'A': 'vinery:dark_cherry_slab',
            'B': 'minecraft:stick'
        }
    );
});