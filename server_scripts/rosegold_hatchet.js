ServerEvents.recipes(event => {
    event.shaped('garnished:rose_gold_hatchet', [
        ' Rs',
        ' SR',
        ' S '
    ], {
        R: 'create_rosegold:rose_gold_ingot',
        S: 'minecraft:stick',
        s: 'minecraft:string'
    }).id('kubejs:rose_gold_hatchet')
});