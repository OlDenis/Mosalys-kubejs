ServerEvents.recipes(event =>{
    // Twilight Forest
    for (let wood_type of [
        "twilight_oak",
        "canopy",
        "mangrove",
        "dark",
        "time",
        "transformation",
        "mining",
        "sorting"
    ]) {
        commonWoodRecipes(event, `twilightforest:${wood_type}`);
    }
});