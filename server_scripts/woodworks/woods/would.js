ServerEvents.recipes(event =>{
    // Would 
    for (let wood_type of [
        "willow",
        "baobab",
        "ebony",
        "fir",
        "pine",
        "cedar",
        "mahogany",
        "azalea",
        "palm",
        "maple",
        "aspen",
        "walnut",
        "blue_spruce"
    ]) {
        commonWoodRecipes(event, `would:${wood_type}`);
    }
});