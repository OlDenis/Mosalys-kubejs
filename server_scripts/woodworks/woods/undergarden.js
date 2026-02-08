ServerEvents.recipes(event =>{
    // Undergarden
    for (let wood_type of [
        "ancient_root",
        "smogstem",
        "grongle",
        "wigglewood"
    ]) {
        commonWoodRecipes(event, `undergarden:${wood_type}`);
    }
});