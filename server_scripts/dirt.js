// requires: rechiseled

// This script adds the minecraft:dirt tag to rechiseled dirt blocks

ServerEvents.tags('item', event => {
    // for (const block of [
    //     'blobs',
    //     'bricks',
    //     'chunks',
    //     'clumps',
    //     'cobbled',
    //     'large_tiles',
    //     'muddy',
    //     'small_bricks',
    //     'small_tiles',
    //     'smooth_clumps',
    //     'soil',
    //     'squares',
    //     'tiles',
    //     'tilled'
    // ]){
    //     event.add('minecraft:dirt', `rechiseled:dirt_${block}`);
    //     event.add('minecraft:dirt', `rechiseled:dirt_${block}_connecting`);
    // }

    // Make savanna dirt mineable with a shovel
    event.add('minecraft:mineable/shovel','luminousworld:savannah_ground' );
})