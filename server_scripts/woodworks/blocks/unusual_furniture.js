// priority:5

// unusual_furniture furniture items
const mod_id = 'unusual_furniture';
const u_chair = modBlockFactory(mod_id, 'chair', 4, 1);
const u_stool = modBlockFactory(mod_id, 'stool', 4 , 1);
const u_drawer = modBlockFactory(mod_id, 'drawer', 1, 0);
const u_shelf = modBlockFactory(mod_id, 'shelf', 4, 1);
const u_carved = modBlockFactory(mod_id, 'carved', 4, 1);
const u_railing = modBlockFactory(mod_id, 'railing', 2, 0);
const u_coffee_table = modBlockFactory(mod_id, 'coffee_table', 1, 0);
const u_beam = modBlockFactory(mod_id, 'beam', 4, 1);

function u_open_riser(event, wood_type, logs) {
    if (logs === undefined) {
        logs = 'logs';
    }
    registerSawingRecipes(event, `${wood_type}_${logs}`, `unusual_furniture:${wood_type}_open_riser_stairs`, 4, true);
    registerSawingRecipes(event, `${wood_type}_planks`, `unusual_furniture:${wood_type}_open_riser_stairs`, 1, false);
    registerSawingRecipes(event, `${wood_type}_stairs`, `unusual_furniture:${wood_type}_open_riser_stairs`, 1, false);
}

function unusualWoodRecipes(event, wood_type, logs) {
    if (logs === undefined) {
        logs = 'logs';
    }
    for ( let f of [
        u_chair,
        u_stool,
        u_drawer,
        u_shelf,
        u_railing,
        u_coffee_table,
        u_beam
    ]) {
        f(event, `${wood_type}_${logs}`, `${wood_type}_planks`);
    }
    u_open_riser(event, wood_type, logs);
    u_carved(event, `${wood_type}_${logs}`, `${wood_type}_planks`, `unusual_furniture:carved_${wood_type}`);
}