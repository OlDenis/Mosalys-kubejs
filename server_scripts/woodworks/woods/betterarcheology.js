ServerEvents.recipes(event =>{
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
        f(event, 'betterarcheology:rotten');
    }
    way_sign(event, 'betterarcheology', 'rotten');
});