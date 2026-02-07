// priority: 2
// requires: woodworks

// Sawmill recipe generator
function sawmillRecipe(ingredient, result_id, result_amount, is_logs) {
    // Returns the correct dict for a sawmill recipe    
    // Use tag for log or stem as ingredient
    if (is_logs) {
        return {
            "type": "woodworks:sawmill",
            "ingredient": {
                "tag": ingredient
            },
            "result": {
                "count": result_amount,
                "id": result_id
            }
        }
    }
    // Use item for other ingredients
    else {
        return {
            "type": "woodworks:sawmill",
            "ingredient": {
                "item": ingredient
            },
            "result": {
                "count": result_amount,
                "id": result_id
            }
        }
    }
}


ServerEvents.recipes(event => {
    function registerCreateCuttingRecipe(ingredient, result_id, result_amount, is_logs) {
        if (is_logs) {
            event.recipes.create.cutting(
                Item.of(result_id, result_amount),
                '#' + ingredient
            ).id(`kubejs:create_cutting/${result_id.replace(':', '_')}_from_${ingredient.replace(':', '_').replace('/', '_')}`);
        }
        else {
            event.recipes.create.cutting(
                Item.of(result_id, result_amount),
                ingredient
            ).id(`kubejs:create_cutting/${result_id.replace(':', '_')}_from_${ingredient.replace(':', '_').replace('/', '_')}`);
        }
    }

    function registerSawmillRecipes(ingredient, result_id, result_amount, is_logs) {
        let r = sawmillRecipe(ingredient, result_id, result_amount, is_logs);
        event.custom(r).id(`kubejs:sawmill/${result_id.replace(':', '_')}_from_${ingredient.replace(':', '_').replace('/', '_')}`);
    }

    function registerSawingRecipes(ingredient, result_id, result_amount, is_logs) {
        registerCreateCuttingRecipe(ingredient, result_id, result_amount, is_logs);
        registerSawmillRecipes(ingredient, result_id, result_amount, is_logs);
    }

    // Factory function for creating block recipe functions
    function blockFactory(name, n_l, n_p) {
        // n_l: number from logs, n_p: number from planks
        return (arg1, arg2, arg3) => {
            // Default block factory when only wood type is provided
            if (arg1 !== undefined && arg2 === undefined) {
                let wood_type = arg1;
                registerSawingRecipes(`${wood_type}_logs`, `${wood_type}_${name}`, n_l, true);
                if (n_p > 0) {
                    registerSawingRecipes(`${wood_type}_planks`, `${wood_type}_${name}`, n_p, false);
                }
            }
            // General block factory when specific input and output are provided
            else {
                let input_logs = arg1;
                let input_planks = arg2;
                let output = arg3;
                if (output === undefined) { output = input_planks.replace('_planks', '_' + name); }
                registerSawingRecipes(input_logs, output, n_l, true);
                if (n_p > 0) {
                    registerSawingRecipes(input_planks, output, n_p, false);
                }
            }
        }
    }

    // Vanilla items
    const planks = blockFactory('planks', 4, 0);
    const stairs = blockFactory('stairs', 4, 1);
    const slab = blockFactory('slab', 8, 2);
    const fence = blockFactory('fence', 4, 1);
    const fence_gate = blockFactory('fence_gate', 4, 0);
    const door = blockFactory('door', 2, 0);
    const trapdoor = blockFactory('trapdoor', 3, 0);
    const pressure_plate = blockFactory('pressure_plate', 2, 0);
    const button = blockFactory('button', 4, 1);
    const sign = blockFactory('sign', 3, 0);
    const boat = blockFactory('boat', 1, 0);

    // Mod blocks
    function way_sign(mod, wood_type, logs) {
        if (logs === undefined) {
            logs = 'logs';
        }
        registerSawingRecipes(`${mod}:${wood_type}_${logs}`, `supplementaries:${mod}/way_sign_${wood_type}`, 4, true);
        registerSawingRecipes(`${mod}:${wood_type}_planks`, `supplementaries:${mod}/way_sign_${wood_type}`, 1, false);
    }

    function way_sign_from_vanilla(wood_type) {
        registerSawingRecipes(`minecraft:${wood_type}_logs`, `supplementaries:way_sign_${wood_type}`, 4, true);
        registerSawingRecipes(`minecraft:${wood_type}_planks`, `supplementaries:way_sign_${wood_type}`, 1, false);
    }


    // Common recipes for all wood types
    function commonWoodRecipes(wood_type, logs) {
        for ( let f of [
            planks,
            stairs,
            slab,
            fence,
            fence_gate,
            door,
            trapdoor,
            pressure_plate,
            button,
            sign
        ]){
            if (logs === undefined) { 
                f(wood_type);
            }
            else {
                f(`${wood_type}_${logs}`, `${wood_type}_planks`);
            }
        }
    }


    // Minecraft
    commonWoodRecipes('minecraft:pale_oak');
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
        way_sign_from_vanilla(wood_type);
    }

    // Aether
    commonWoodRecipes('aether:skyroot');
    way_sign('aether', 'skyroot');

    // Ars Nouveau
    planks('c:logs/archwood', 'ars_nouveau:archwood_planks');
    stairs('c:logs/archwood', 'ars_nouveau:archwood_planks');
    slab('c:logs/archwood', 'ars_nouveau:archwood_planks');
    fence('c:logs/archwood', 'ars_nouveau:archwood_planks');
    fence_gate('c:logs/archwood', 'ars_nouveau:archwood_planks');
    door('c:logs/archwood', 'ars_nouveau:archwood_planks');
    trapdoor('c:logs/archwood', 'ars_nouveau:archwood_planks');
    pressure_plate('c:logs/archwood', 'ars_nouveau:archwood_planks');
    button('c:logs/archwood', 'ars_nouveau:archwood_planks');
    sign('c:logs/archwood', 'ars_nouveau:archwood_planks');
    registerSawingRecipes('c:logs/archwood', 'supplementaries:ars_nouveau/way_sign_archwood', 2, true);

    // Better Archeology
    for (let f of [
        planks,
        stairs,
        slab,
        fence,
        fence_gate,
        door,
        pressure_plate,
    ]) {
        f('betterarcheology:rotten');
    }    
    way_sign('betterarcheology', 'rotten');

    // Crabbers Delight
    for (let f of [
        planks,
        stairs,
        slab,
        fence,
        fence_gate,
        door,
        pressure_plate,
        button,
        sign
    ]) {
        f('crabbersdelight:palm');
    }
    trapdoor(
        'crabbersdelight:palm_logs', 
        'crabbersdelight:palm_planks',
        'crabbersdelight:palm_trapdoor_bottom'
    );
    way_sign('crabbersdelight', 'palm');

    // Deeper and Darker
    commonWoodRecipes('deeperdarker:echo');
    way_sign('deeperdarker', 'echo');
    commonWoodRecipes('deeperdarker:bloom', 'stems');
    way_sign('deeperdarker', 'bloom', 'stems');

    // Deep Aether
    for (let wood_type of [
        "roseroot",
        "yagroot",
        "cruderoot",
        "sunroot",
        "conberry"
    ]) {
        commonWoodRecipes(`deep_aether:${wood_type}`);
        way_sign('deep_aether', wood_type);
    }

    // Eternal Starlight
    for (let wood_type of [
        "cradlewood",
        "lunar",
        "northland",
        "starlight_mangrove",
        "scarlet",
        "torreya",
        "jinglestem"
    ]) {
        commonWoodRecipes(`eternal_starlight:${wood_type}`);
    }

    // Expanded Delight
    commonWoodRecipes('expandeddelight:cinnamon');

    // Garnished
    commonWoodRecipes('garnished:nut');
    commonWoodRecipes('garnished:sepia');    

    // More Sniffer Flowers
    commonWoodRecipes('moresnifferflowers:vivicus');
    commonWoodRecipes('moresnifferflowers:corrupted');

    // Pastel
    for (let nox_wood_type of [
        'chestnut',
        'ebony',
        'ivory',
        'slate'
    ]) {
        let nox_stem = `pastel:${nox_wood_type}_noxcap_stems`;
        let nox_planks = `pastel:${nox_wood_type}_noxwood_planks`;

        planks(nox_stem, nox_planks);
        stairs(nox_stem, nox_planks);
        slab(nox_stem, nox_planks);
        fence(nox_stem, nox_planks);
        fence_gate(nox_stem, nox_planks);
        door(nox_stem, nox_planks);
        trapdoor(nox_stem, nox_planks);
        pressure_plate(nox_stem, nox_planks);
        button(nox_stem, nox_planks);
    }


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
        commonWoodRecipes(`twilightforest:${wood_type}`);
    }
    // Upgrade Aquatic
    commonWoodRecipes('upgrade_aquatic:driftwood');
    commonWoodRecipes('upgrade_aquatic:river');
    // Regions unexplored
    planks('regions_unexplored:alpha');
    stairs('regions_unexplored:alpha');
    slab('regions_unexplored:alpha');
    for ( let wood_type of [
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
        commonWoodRecipes(`regions_unexplored:${wood_type}`);
    }

    // Undergarden
    for ( let wood_type of [
        "ancient_root",
        "smogstem",
        "grongle",
        "wigglewood"
    ]) {
        commonWoodRecipes(`undergarden:${wood_type}`);
    }

    // Wetland Whimsy
    commonWoodRecipes('wetland_whimsy:bald_cypress');

    // Would 
    for ( let wood_type of [
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
        commonWoodRecipes(`would:${wood_type}`);
    }
});
