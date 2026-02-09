ServerEvents.recipes(event => {
    // Ars Nouveau
    planks(event, 'c:logs/archwood', 'ars_nouveau:archwood_planks');
    stairs(event, 'c:logs/archwood', 'ars_nouveau:archwood_planks');
    slab(event, 'c:logs/archwood', 'ars_nouveau:archwood_planks');
    fence(event, 'c:logs/archwood', 'ars_nouveau:archwood_planks');
    fence_gate(event, 'c:logs/archwood', 'ars_nouveau:archwood_planks');
    door(event, 'c:logs/archwood', 'ars_nouveau:archwood_planks');
    trapdoor(event, 'c:logs/archwood', 'ars_nouveau:archwood_planks');
    pressure_plate(event, 'c:logs/archwood', 'ars_nouveau:archwood_planks');
    button(event, 'c:logs/archwood', 'ars_nouveau:archwood_planks');
    sign(event, 'c:logs/archwood', 'ars_nouveau:archwood_planks');
    registerSawingRecipes(event, 'c:logs/archwood', 'supplementaries:ars_nouveau/way_sign_archwood', 2, true);
});