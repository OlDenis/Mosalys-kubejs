// Pastel
function colorPastelRecipes(event, color) {
    planks(event, `pastel:${color}`);
    stairs(event, `pastel:${color}`);
    slab(event, `pastel:${color}`);
    fence(event, `pastel:${color}`);
    fence_gate(event, `pastel:${color}`);
    button(event, `pastel:${color}`);
    pressure_plate(event, `pastel:${color}`);
}

function commonPastelRecipes(event, p_logs, p_planks) {
    planks(event, p_logs, p_planks);
    stairs(event, p_logs, p_planks);
    slab(event, p_logs, p_planks);
    fence(event, p_logs, p_planks);
    fence_gate(event, p_logs, p_planks);
    door(event, p_logs, p_planks);
    trapdoor(event, p_logs, p_planks);
    pressure_plate(event, p_logs, p_planks);
    button(event, p_logs, p_planks);
}


ServerEvents.recipes(event =>{
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
        colorPastelRecipes(event, color);
    }

    for (let nox_wood_type of [
        'chestnut',
        'ebony',
        'ivory',
        'slate'
    ]) {
        let nox_stem = `pastel:${nox_wood_type}_noxcap_stems`;
        let nox_planks = `pastel:${nox_wood_type}_noxwood_planks`;
        commonPastelRecipes(event, nox_stem, nox_planks);
    }
    commonPastelRecipes(event, 'pastel:weeping_gala_logs', 'pastel:weeping_gala_planks');
});