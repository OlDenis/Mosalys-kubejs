ServerEvents.recipes(event =>{
    // Regions unexplored

    // Alpha wood
    planks(event, 'regions_unexplored:alpha');
    stairs(event, 'regions_unexplored:alpha');
    slab(event, 'regions_unexplored:alpha');

    // Painted planks
    function paintedPlanks(color) {
        // Remove painted planks bugged recipe
        event.remove({ id: `regions_unexplored:${color}_painted_planks` })
        // Add painted planks correct recipe
        event.shaped(
            `regions_unexplored:${color}_painted_planks`,
            [
                'AAA',
                'ABA',
                'AAA'
            ],
            {
                'A': '#minecraft:planks',
                'B': `minecraft:${color}_dye`
            }
        ).id(`kubejs:${color}_painted_planks`)
        // Sawmill recipes
        registerSawingRecipes(event, `regions_unexplored:${color}_painted_planks`, `regions_unexplored:${color}_painted_stairs`, 1);
        registerSawingRecipes(event, `regions_unexplored:${color}_painted_planks`, `regions_unexplored:${color}_painted_slab`, 2);
    }

    paintedPlanks('white')
    paintedPlanks('orange')
    paintedPlanks('magenta')
    paintedPlanks('light_blue')
    paintedPlanks('yellow')
    paintedPlanks('lime')
    paintedPlanks('pink')
    paintedPlanks('gray')
    paintedPlanks('light_gray')
    paintedPlanks('cyan')
    paintedPlanks('purple')
    paintedPlanks('blue')
    paintedPlanks('brown')
    paintedPlanks('green')
    paintedPlanks('red')
    paintedPlanks('black')

    // All other woods
    for (let wood_type of [
        "baobab",
        "blackwood",
        "blue_bioshroom",
        "brimwood",
        "cobalt",
        "cypress",
        "dead",
        "eucalyptus",
        "green_bioshroom",
        "joshua",
        "kapok",
        "larch",
        "magnolia",
        "maple",
        "mauve",
        "palm",
        "pine",
        "pink_bioshroom",
        "redwood",
        "socotra",
        "willow",
        "yellow_bioshroom"
    ]) {
        commonWoodRecipes(event, `regions_unexplored:${wood_type}`);
    }
});