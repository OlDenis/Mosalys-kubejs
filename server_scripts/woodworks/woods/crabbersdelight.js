ServerEvents.recipes(event =>{
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
        f(event, 'crabbersdelight:palm');
    }
    trapdoor(event,
        'crabbersdelight:palm_logs',
        'crabbersdelight:palm_planks',
        'crabbersdelight:palm_trapdoor_bottom'
    );
    way_sign(event, 'crabbersdelight', 'palm');

});