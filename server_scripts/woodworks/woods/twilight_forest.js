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
        banister(event, `twilightforest:${wood_type}_logs`, `twilightforest:${wood_type}_planks`);
        hollowed_log(event, 'twilightforest', wood_type)
    }

    event.remove({ id: "twilightforest:stonecutting/dark_log/encased_towerwood"})
    registerSawingRecipes(event, 'twilightforest:darkwood_logs', 'twilightforest:encased_towerwood', 1, true);
});