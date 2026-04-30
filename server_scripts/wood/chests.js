const wood_types = {
    "minecraft": [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "dark_oak",
        "mangrove",
        "cherry",
        "bamboo",
        "crimson",
        "warped",
        "pale_oak"
    ],
    "aether": [
        "skyroot"
    ],
    "ars_nouveau": [
        "archwood"
    ],
    "betterarcheology": [
        "rotten"
    ],
    "crabbersdelight": [
        "palm"
    ],
    "deeperdarker": [
        "echo",
        "bloom"
    ],
    "deep_aether": [
        "roseroot",
        "yagroot",
        "cruderoot",
        "conberry",
        "sunroot"
    ],
    "eternal_starlight": [
        "lunar",
        "northland",
        "starlight_mangrove",
        "scarlet",
        "torreya",
        "jinglestem"
    ],
    "expandeddelight": [
        "cinnamon"
    ],
    "garnished": [
        "nut",
        "sepia"
    ],
    "luminousworld": [
        "white_oak",
        "palm",
        "auburn",
        "baobab"
    ],
    "luminous_nether": [
        "mushroom",
        "withered"
    ],
    "moresnifferflowers": [
        "vivicus",
        "corrupted"
    ],
    "mynethersdelight": [
        "powdery"
    ],
    "twilightforest": [
        "twilight_oak",
        "canopy",
        "mangrove",
        "dark",
        "time",
        "transformation",
        "mining",
        "sorting"
    ],
    "pastel": [
        "slate_noxwood",
        "ebony_noxwood",
        "ivory_noxwood",
        "chestnut_noxwood",
        "weeping_gala",
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "light_gray",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black"
    ],
    "regions_unexplored": [
        "alpha",
        "baobab",
        "blackwood",
        "blue_bioshroom",
        "brimwood",
        "cobalt",
        "cypress",
        "dead",
        "eucalyptus",
        "green_bioshroom",
        "joshua",
        "kapok",
        "larch",
        "magnolia",
        "maple",
        "mauve",
        "palm",
        "pine",
        "pink_bioshroom",
        "redwood",
        "socotra",
        "willow",
        "yellow_bioshroom"
    ],
    "undergarden": [
        "ancient_root",
        "smogstem",
        "grongle",
        "wigglewood"
    ],
    "wetland_whimsy": [
        "bald_cypress"
    ],
    "would": [
        "willow",
        "baobab",
        "ebony",
        "fir",
        "pine",
        "cedar",
        "mahogany",
        "azalea",
        "palm",
        "maple",
        "aspen",
        "walnut",
        "blue_spruce"
    ]
}

// Wood types with missing chest variant
const missing_chest_variant = [
    // Luminous
    'luminousworld:autumnplank',
    'luminousworld:baobab_plank',
    'luminousworld:palmplank',
    'luminousworld:white_oak_plank',
    // Pastel
    '#pastel:noxwood_planks'
]

// Create new tags
ServerEvents.tags("item", event => {
    // Missing chest variants
    for (const planks_type of missing_chest_variant) {
        event.add("kubejs:mod_planks", planks_type)
    }
    for (const mod_namespace of Object.keys(wood_types)) {
        if (mod_namespace !== "minecraft" && mod_namespace !== "luminousworld" && mod_namespace !== "pastel") {
            for (const plank_type of wood_types[mod_namespace]) {
                event.add("kubejs:mod_planks", mod_namespace + ":" + plank_type + "_planks")
                event.add("kubejs:mod_slabs", mod_namespace + ":" + plank_type + "_slab")
            }
        }
    }
    for (const wood_type of wood_types["minecraft"]) {
        event.add("woodworks:chests", `woodworks:${wood_type}_chest`)
        event.add("woodworks:trapped_chests", `woodworks:trapped_${wood_type}_chest`)
    }
})


ServerEvents.recipes(event => {
    // Add vanilla chest recipe for modded planks
    event.shaped(
        'minecraft:bookshelf',
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            'A': '#kubejs:mod_planks',
            'B': 'minecraft:book'
        }
    )
    event.remove({ id: 'woodworks:oak_beehive' })
    event.remove({ id: 'aether:skyroot_beehive' })
    event.shaped(
        'minecraft:beehive',
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            'A': '#kubejs:mod_planks',
            'B': 'minecraft:honeycomb'
        }
    )

    event.replaceInput(
        { id: 'woodworks:oak_ladder' },
        'minecraft:oak_planks',
        'minecraft:stick'
    )

    // Convert wood chest variants to vanilla one
    event.shapeless(
        'minecraft:chest',
        [
            '#woodworks:chests'
        ]
    ).id('kubejs:chest_from_wood_chests')
    event.shapeless(
        'minecraft:trapped_chest',
        [
            '#woodworks:trapped_chests'
        ]
    ).id('kubejs:trapped_chest_from_wood_chests')

    // Rework twilight forest trapped chest recipes
    for (const wood_type of wood_types["twilightforest"]) {
        event.remove({ id: `twilightforest:wood/${wood_type}_trapped_chest` })
        event.shapeless(
            `twilightforest:${wood_type}_trapped_chest`,
            [
                'minecraft:tripwire_hook',
                `twilightforest:${wood_type}_chest`
            ]
        ).id(`kubejs:trapped_${wood_type}_chest_vanilla_style`)
    }
})