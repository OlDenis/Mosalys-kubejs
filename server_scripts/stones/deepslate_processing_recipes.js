// requires: create
// requires: rechiseled
// priority: 2

// This script adds tags for deepstone blocks (rechiseled)

// Edit Rechiseled Deepstone tooltip
ItemEvents.modifyTooltips(event => {
    event.add('#kubejs:connecting', Text.gray('Connecting'));
    event.add('kubejs:deepstone_bricks_connecting', Text.gray('Connecting'));
})