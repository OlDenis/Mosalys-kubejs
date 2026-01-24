// This script adds compacted coal items from create: high_pressure

StartupEvents.registry('item', event => {
    // Create hight pressure
    event.create('graphite')
    event.create('graphite_powder')
    event.create('impure_diamond')

    // Moss
    event.create('moss_clump')
    event.create('crimson_spores')
    event.create('warped_spores')
    event.create('aether_moss_clump')
    event.create('golden_moss_clump').food(food => {
        food
            .nutrition(4)
            .saturation(0.6)
            .effect('minecraft:regeneration', 200, 0, 1)
            .alwaysEdible()
            .fastToEat()
    });
    //immersive weathering
    for (let item of [
        'sand',
        'red_sand',
        'blackstone_brick',
        'deepslate_brick',
        'deepslate_tile',
        'prismarine_brick',
        'stone_brick'
    ]){
        event.create(`immersive_weathering:${item}`);
    }
});