ServerEvents.recipes(event =>{
    // Regions unexplored
    planks(event, 'regions_unexplored:alpha');
    stairs(event, 'regions_unexplored:alpha');
    slab(event, 'regions_unexplored:alpha');
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