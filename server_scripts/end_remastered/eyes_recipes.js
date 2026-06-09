// requires: endrem
// requires: endermanoverhaul
// requires: garnished
// requires: irons_spellbooks
// requires: tide
// requires: undergarden
// requires: upgrade_aquatic

// This script add the modified end remaster eyes recipes

ServerEvents.recipes(event => {
    // Old Eye
    event.shaped(
        Item.of('endrem:old_eye', 1), // arg 1: output
        [
            'AAA',
            'ABA', // pattern
            'ACA'
        ],
        {
            A: 'kubejs:old_eye_fragment', //input
            B: 'minecraft:ender_eye',
            C: 'garnished:amber_remnant'
        }
    )
    // Rogue Eye
    event.shaped(
        Item.of('endrem:rogue_eye', 1),
        [
            'AAA',
            'ABA', // pattern
            'ACA'
        ],
        {
            A: 'kubejs:rogue_eye_fragment',
            B: 'minecraft:ender_eye',
            C: 'minecraft:redstone'
        }
    )
    // Cursed Eye
    event.shaped(
        Item.of('endrem:cursed_eye', 1),
        [
            'AAA',
            'ABA', // pattern
            'ACA'
        ],
        {
            A: 'kubejs:cursed_eye_fragment',
            B: 'endermanoverhaul:warped_pearl',
            C: 'minecraft:blaze_powder'
        }
    )
    // Black Eye
    event.shaped(
        Item.of('endrem:black_eye', 1),
        [
            'ACA',
            'CBC', // pattern
            'ACA'
        ],
        {
            A: 'kubejs:black_eye_fragment',
            B: 'endermanoverhaul:soul_pearl',
            C: 'minecraft:prismarine_shard'
        }
    )
    // Lost Eye
    event.shaped(
        Item.of('endrem:lost_eye', 1),
        [
            'ACA',
            'CBC', // pattern
            'ACA'
        ],
        {
            A: 'kubejs:lost_eye_fragment',
            B: 'endermanoverhaul:soul_pearl',
            C: 'undergarden:utherium_crystal'
        }
    )
    // Exotic Eye
    event.remove({output:'endrem:exotic_eye'});
    event.shaped(
        Item.of('endrem:exotic_eye', 1),
        [
            'ABC',
            'DEF', // pattern
            'GHI'
        ],
        {
            A: 'minecraft:bubble_coral',
            B: 'minecraft:fire_coral',
            C: 'minecraft:conduit',
            D: 'tide:luminescent_jellyfish',
            E: 'endermanoverhaul:bubble_pearl',
            F: 'minecraft:glow_ink_sac',
            G: 'minecraft:horn_coral',
            H: 'minecraft:prismarine_crystals',
            I: 'minecraft:tube_coral'
        }
    )
    // Guardian Eye
    event.shaped(
        Item.of('endrem:guardian_eye', 1),
        [
            'ABA',
            'DCD', // pattern
            'BAB'
        ],
        {
            A: 'kubejs:guardian_eye_sclera',
            C: 'endermanoverhaul:bubble_pearl',
            B: 'upgrade_aquatic:thrasher_tooth',
            D: 'minecraft:blaze_powder'

        }
    )
    // Cold Eye
    event.shaped(
        Item.of('endrem:cold_eye', 1),
        [
            'BDB',
            'ACA', // pattern
            'BAB'
        ],
        {
            B: 'kubejs:cold_eye_fragment',
            C: 'endermanoverhaul:icy_pearl',
            A: 'deeperdarker:ice_lily',
            D: 'irons_spellbooks:permafrost_shard'
        }
    )
    // Witch Eye
    event.remove({output:'endrem:witch_eye'});
    event.shapeless(
        Item.of('endrem:witch_eye'),
        [
            'minecraft:ender_eye',
            'endrem:witch_pupil',
            'ars_nouveau:abjuration_essence',
            '2x minecraft:nether_wart',
            'minecraft:glistering_melon_slice'
        ]
    )//.damageIngredient('elixirium:alchemist_eye', 1)
})