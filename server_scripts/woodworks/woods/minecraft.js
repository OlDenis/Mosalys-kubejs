ServerEvents.recipes(event => {
    function vanillaWoodRecipes(event, wood_type, logs) {
        if (logs === undefined) {
            logs = 'logs';
        }
        commonWoodRecipes(event, wood_type);
        decorativeRecipes(event, wood_type, logs);
        handcraftedWoodRecipes(event, wood_type, logs);
        unusualWoodRecipes(event, wood_type, logs);
        way_sign_from_vanilla(event, wood_type, logs);
        fd_cabinet(event, `${wood_type}_${logs}`, `${wood_type}_planks`);
        shaft(event, `${wood_type}_${logs}`, `${wood_type}_planks`);
        banister(event, `${wood_type}_${logs}`, `${wood_type}_planks`);
    }

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
        vanillaWoodRecipes(event, wood_type);
    }
    vanillaWoodRecipes(event, 'crimson', 'stems');
    vanillaWoodRecipes(event, 'warped', 'stems');
    vanillaWoodRecipes(event, 'bamboo', 'blocks');
});