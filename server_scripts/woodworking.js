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
    const trapdoor = blockFactory('trapdoor', 2, 0);
    const pressure_plate = blockFactory('pressure_plate', 2, 0);
    const button = blockFactory('button', 4, 1);
    const sign = blockFactory('sign', 2, 0);

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

    // Luminous Nether
    //Mushroom
    planks('luminous_nether:mushroom_logs', 'luminous_nether:mushroom_planks');
    stairs('luminous_nether:mushroom_logs', 'luminous_nether:mushroom_planks');
    slab('luminous_nether:mushroom_logs', 'luminous_nether:mushroom_planks', 'luminous_nether:mushroom_slabs');
    fence('luminous_nether:mushroom_logs', 'luminous_nether:mushroom_planks', 'luminous_nether:mushroom_fence');
    fence_gate('luminous_nether:mushroom_logs', 'luminous_nether:mushroom_planks', 'luminous_nether:mushoom_fence_gate');
    door('luminous_nether:mushroom_logs', 'luminous_nether:mushroom_planks');
    trapdoor('luminous_nether:mushroom_logs', 'luminous_nether:mushroom_planks', 'luminous_nether:mushroom_trap_door');
    pressure_plate('luminous_nether:mushroom_logs', 'luminous_nether:mushroom_planks');
    button('luminous_nether:mushroom_logs', 'luminous_nether:mushroom_planks');
    // Withered
    planks('luminous_nether:withered_logs', 'luminous_nether:withered_planks');
    stairs('luminous_nether:withered_logs', 'luminous_nether:withered_planks');
    slab('luminous_nether:withered_logs', 'luminous_nether:withered_planks');
    fence('luminous_nether:withered_logs', 'luminous_nether:withered_planks', 'luminous_nether:withered_fence');
    fence_gate('luminous_nether:withered_logs', 'luminous_nether:withered_planks', 'luminous_nether:withered_fence_gate');
    door('luminous_nether:withered_logs', 'luminous_nether:withered_planks');
    trapdoor('luminous_nether:withered_logs', 'luminous_nether:withered_planks', 'luminous_nether:withered_trap_door');
    pressure_plate('luminous_nether:withered_logs', 'luminous_nether:withered_planks');
    button('luminous_nether:withered_logs', 'luminous_nether:withered_planks');

    // Luminous World
    // Baobab
    planks('luminousworld:baobab_logs', 'luminousworld:baobab_plank');
    stairs('luminousworld:baobab_logs', 'luminousworld:baobab_plank');
    slab('luminousworld:baobab_logs', 'luminousworld:baobab_plank');
    fence('luminousworld:baobab_logs', 'luminousworld:baobab_plank', 'luminousworld:baobabfence');
    fence_gate('luminousworld:baobab_logs', 'luminousworld:baobab_plank');
    door('luminousworld:baobab_logs', 'luminousworld:baobab_plank');
    trapdoor('luminousworld:baobab_logs', 'luminousworld:baobab_plank', 'luminousworld:baobabtrapdoor');
    pressure_plate('luminousworld:baobab_logs', 'luminousworld:baobab_plank');
    button('luminousworld:baobab_logs', 'luminousworld:baobab_plank');
    // Palm 
    planks('luminousworld:palm_logs', 'luminousworld:palmplank');
    stairs('luminousworld:palm_logs', 'luminousworld:palmplank', 'luminousworld:palmstairs');
    slab('luminousworld:palm_logs', 'luminousworld:palmplank', 'luminousworld:palmslab');
    fence('luminousworld:palm_logs', 'luminousworld:palmplank', 'luminousworld:palmfence');
    fence_gate('luminousworld:palm_logs', 'luminousworld:palmplank', 'luminousworld:palm_fencegate');
    door('luminousworld:palm_logs', 'luminousworld:palmplank');
    trapdoor('luminousworld:palm_logs', 'luminousworld:palmplank', 'luminousworld:palmtrapdoor');
    pressure_plate('luminousworld:palm_logs', 'luminousworld:palmplank');
    button('luminousworld:palm_logs', 'luminousworld:palmplank');
    // White Oak
    planks('luminousworld:white_oak_logs', 'luminousworld:white_oak_plank');
    stairs('luminousworld:white_oak_logs', 'luminousworld:white_oak_plank');
    slab('luminousworld:white_oak_logs', 'luminousworld:white_oak_plank');
    fence('luminousworld:white_oak_logs', 'luminousworld:white_oak_plank');
    fence_gate('luminousworld:white_oak_logs', 'luminousworld:white_oak_plank', 'luminousworld:white_oakfencegate');
    button('luminousworld:white_oak_logs', 'luminousworld:white_oak_plank');
    pressure_plate('luminousworld:white_oak_logs', 'luminousworld:white_oak_plank');
    door('luminousworld:white_oak_logs', 'luminousworld:white_oak_plank');
    trapdoor('luminousworld:white_oak_logs', 'luminousworld:white_oak_plank', 'luminousworld:whiteoaktrapdoor');
    // Auburn
    planks('luminousworld:auburn_logs', 'luminousworld:autumnplank');
    stairs('luminousworld:auburn_logs', 'luminousworld:autumnplank', 'luminousworld:autumnstairs');
    slab('luminousworld:auburn_logs', 'luminousworld:autumnplank', 'luminousworld:autumnslab');
    fence('luminousworld:auburn_logs', 'luminousworld:autumnplank', 'luminousworld:autumnfence');
    fence_gate('luminousworld:auburn_logs', 'luminousworld:autumnplank', 'luminousworld:autumnfencegate');
    door('luminousworld:auburn_logs', 'luminousworld:autumnplank');
    trapdoor('luminousworld:auburn_logs', 'luminousworld:autumnplank', 'luminousworld:auburntrapdoor');
    pressure_plate('luminousworld:auburn_logs', 'luminousworld:autumnplank');
    button('luminousworld:auburn_logs', 'luminousworld:autumnplank');


    // More Sniffer Flowers
    commonWoodRecipes('moresnifferflowers:vivicus');
    commonWoodRecipes('moresnifferflowers:corrupted');

    // My Nether's Delight
    
    registerSawmillRecipes('mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks', 3, false);
    stairs('mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks');
    slab('mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks');
    fence('mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks', 'mynethersdelight:powdery_fence');
    fence_gate('mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks', 'mynethersdelight:powdery_fence_gate');
    door('mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks');
    trapdoor('mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks', 'mynethersdelight:powdery_trapdoor');
    pressure_plate('mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks');
    button('mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks');
    registerSawingRecipes('mynethersdelight:powdery_planks', 'mynethersdelight:powdery_mosaic', 1, false);
    registerSawingRecipes('mynethersdelight:powdery_mosaic','mynethersdelight:powdery_mosaic_stairs', 1, false);
    registerSawingRecipes('mynethersdelight:powdery_mosaic','mynethersdelight:powdery_mosaic_slab', 2, false);
    

    // Pastel
    function colorPastelRecipes(color) {
        planks(`pastel:${color}`);
        stairs(`pastel:${color}`);
        slab(`pastel:${color}`);
        fence(`pastel:${color}`);
        fence_gate(`pastel:${color}`);
        button(`pastel:${color}`);
        pressure_plate(`pastel:${color}`);
    }
    for (let color of [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ]) {
        colorPastelRecipes(color);
    }
    
    function commonPastelRecipes(p_logs, p_planks) {
        planks(p_logs, p_planks);
        stairs(p_logs, p_planks);
        slab(p_logs, p_planks);
        fence(p_logs, p_planks);
        fence_gate(p_logs, p_planks);
        door(p_logs, p_planks);
        trapdoor(p_logs, p_planks);
        pressure_plate(p_logs, p_planks);
        button(p_logs, p_planks);
    }

    for (let nox_wood_type of [
        'chestnut',
        'ebony',
        'ivory',
        'slate'
    ]) {
        let nox_stem = `pastel:${nox_wood_type}_noxcap_stems`;
        let nox_planks = `pastel:${nox_wood_type}_noxwood_planks`;
        commonPastelRecipes(nox_stem, nox_planks);        
    }
    commonPastelRecipes('pastel:weeping_gala_logs', 'pastel:weeping_gala_planks');


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
    // Upgrade Aquatic
    commonWoodRecipes('upgrade_aquatic:driftwood');
    commonWoodRecipes('upgrade_aquatic:river');


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

ServerEvents.tags('item', event => {
    // Luminous nether logs
    event.add("luminous_nether:withered_logs", "luminous_nether:withered_log")
    event.add("luminous_nether:withered_logs", "luminous_nether:stripped_withered_log")
    event.add("luminous_nether:mushroom_logs", "luminous_nether:goldenstem")
    event.add("luminous_nether:mushroom_logs", "luminous_nether:shredded_stem")

    // Luminousworld logs
    event.add("luminousworld:baobab_logs", "luminousworld:bao_bob_log")
    event.add("luminousworld:baobab_logs", "luminousworld:stripped_baobab_log")
    event.add("luminousworld:baobab_logs", "luminousworld:bao_bob_wood")
    event.add("luminousworld:baobab_logs", "luminousworld:stripped_baobab_wood")

    event.add("luminousworld:white_oak_logs", "luminousworld:whiteoaklog")
    event.add("luminousworld:white_oak_logs", "luminousworld:stripped_white_oak_log")
    event.add("luminousworld:white_oak_logs", "luminousworld:white_oak_wood")
    event.add("luminousworld:white_oak_logs", "luminousworld:stripped_white_oak_wood")

    event.add("luminousworld:palm_logs", "luminousworld:palm_log")
    event.add("luminousworld:palm_logs", "luminousworld:stripped_palm_log")
    event.add("luminousworld:palm_logs", "luminousworld:palm_wood")
    event.add("luminousworld:palm_logs", "luminousworld:stripped_palm_wood")

    event.add("luminousworld:auburn_logs", "luminousworld:auburnlog")
    event.add("luminousworld:auburn_logs", "luminousworld:stripped_auburn_log")
    event.add("luminousworld:auburn_logs", "luminousworld:auburn_wood")
    event.add("luminousworld:auburn_logs", "luminousworld:stripped_auburn_wood")
});
