// requires: rechiseled

// This script adds the minecraft:dirt tag to rechiseled dirt blocks

ServerEvents.tags('item', event => {
    
    // Make savanna dirt mineable with a shovel
    event.add('minecraft:mineable/shovel','luminousworld:savannah_ground' );
})