ServerEvents.recipes(event => {
    event.shaped('would:rosegold_hatchet', [
        ' Rs',
        ' SR',
        ' S '
    ], {
        R: 'create_rosegold:rosegold_ingot',
        S: 'minecraft:stick',
        s: 'minecraft:string'
    }).id('kubejs:rosegold_hatchet')
});