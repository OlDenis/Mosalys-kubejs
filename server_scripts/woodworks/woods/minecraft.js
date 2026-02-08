ServerEvents.recipes(event => {
    // Minecraft
    commonWoodRecipes(event, 'minecraft:pale_oak');
    way_sign_from_vanilla(event, 'pale_oak');
    for (let wood_type of [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "dark_oak",
        "mangrove",
        "cherry"
    ]) {
        way_sign_from_vanilla(event, wood_type);
        handcraftedWoodRecipes(event, wood_type);
        decorativeRecipes(event, wood_type);
        unusualWoodRecipes(event, wood_type);
    }
});