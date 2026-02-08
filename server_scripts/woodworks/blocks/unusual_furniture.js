// priority:5

// unusual_furniture furniture items
const mod_id = 'unusual_furniture';
const u_chair = modBlockFactory(mod_id, 'chair', 4, 1);
const u_stool = modBlockFactory(mod_id, 'stool', 4 , 1);
const u_drawer = modBlockFactory(mod_id, 'drawer', 1, 0);
const u_shelf = modBlockFactory(mod_id, 'shelf', 4, 1);
const u_open_riser = modBlockFactory(mod_id, 'open_riser_stairs', 4, 1);
const u_carved = modBlockFactory(mod_id, 'carved', 4, 1);
const u_railing = modBlockFactory(mod_id, 'railing', 2, 0);
const u_coffee_table = modBlockFactory(mod_id, 'coffee_table', 1, 0);
const u_beam = modBlockFactory(mod_id, 'beam', 4, 1);

function unusualWoodRecipes(event, wood_type) {
    for ( let f of [
        u_chair,
        u_stool,
        u_drawer,
        u_shelf,
        u_open_riser,
        u_railing,
        u_coffee_table,
        u_beam
    ]) {
        f(event, `${wood_type}_logs`, `${wood_type}_planks`);
    }
    u_carved(event, `${wood_type}_logs`, `${wood_type}_planks`, `unusual_furniture:carved_${wood_type}`);
}