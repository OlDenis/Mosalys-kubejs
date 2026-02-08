// priority: 5

// Handcrafted wood items
const h_bench = modBlockFactory('handcrafted', 'bench', 2, 0);
const h_chair = modBlockFactory('handcrafted', 'chair', 2, 0);
const h_dining_bench = modBlockFactory('handcrafted', 'dining_bench', 2, 0);
const h_table = modBlockFactory('handcrafted', 'table', 2, 0);
const h_pillar_trim = modBlockFactory('handcrafted', 'pillar_trim', 6, 2);
const h_corner_trim = modBlockFactory('handcrafted', 'corner_trim', 4, 1);

function handcraftedWoodRecipes(event, wood_type, logs) {
    if (logs === undefined) {
        logs = 'logs';
    }
    for ( let f of [
        h_bench,
        h_chair,
        h_dining_bench,
        h_table,
        h_pillar_trim,
        h_corner_trim
    ]) {
        f(event, `${wood_type}_${logs}`, `${wood_type}_planks`);
    }
}