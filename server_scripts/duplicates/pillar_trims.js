//requires:handcrafted

ServerEvents.recipes(event => {
    // Handcrafted Pillar Trims (Bricks pillar)
    const pillar_trim_materials = [
        'andesite',
        'blackstone',
        'bricks',
        'calcite',
        'blackstone',
        'diorite',
        'granite',
        'stone',
        'sandstone',
        'red_sandstone'
    ]

    // Add stone trim pillars to stoncutter
    for (let m of pillar_trim_materials) {
        event.recipes.stonecutting(`2x handcrafted:${m}_pillar_trim`, `minecraft:${m}`)
    }
    event.recipes.stonecutting('2x handcrafted:dripstone_pillar_trim', 'minecraft:dripstone_block')
    event.recipes.stonecutting('2x handcrafted:quartz_pillar_trim', 'minecraft:quartz_block')

    // Wood types
    let all_woods = {
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
            "warped"
        ],
        "wetland_whimsy": [
            "bald_cypress"
        ],
        "undergarden": [
            "smogstem",
            "wigglewood",
            "grongle"
        ],
        "eternal_starlight": [
            "lunar",
            "northland",
            "starlight_mangrove",
            "scarlet",
            "torreya",
            "jinglestem"
        ],
        "moresnifferflowers": [
            "vivicus",
            "corrupted"
        ],
        "garnished": [
            "nut",
            "sepia" // stems instead of logs
        ],
        "ars_nouveau": [
            "archwood"
        ],
        "aether": [
            "skyroot",

        ],
        "deep_aether": [
            "roseroot",
            "yagroot",
            "cruderoot",
            "conberry",
            "sunroot"
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
        "deeperdarker": [
            "echo",
            "bloom" // stems instead of logs
        ],
        // "abyssal_decor": [  // No tags
        //     // "ancient_birch",
        //     "white_wood",
        //     "blackwood",
        //     "cinnamon" // needs extra attention
        // ],
        "expandeddelight": [
            "cinnamon"
        ],
        "mynethersdelight": [
            "powdery"       // blocks instead of logs (like bamboo)
        ],
        "betterarcheology": [
            "rotten"        // Doesn't need tag (only log)
        ]
    }
    // Remove old pillar trim recipe and replace it by new one
    function pillarTrim(output_material, pillarInputs) {
        let output = `handcrafted:${output_material}_pillar_trim`
        event.remove({ output: output })
        event.shaped(
            Item.of(output, 4),
            [
                ' A ',
                ' AB',
                ' A '
            ],
            {
                A: pillarInputs[0],
                B: pillarInputs[1]
            }
        )
    }
    for (let m of pillar_trim_materials) {
        if (['calcite', 'bricks'].includes(m)) { continue; }
        pillarTrim(m, [`minecraft:${m}`, `minecraft:${m}_slab`]);
    }
    pillarTrim('dripstone', ['minecraft:dripstone_block', 'create:cut_dripstone_slab']);
    pillarTrim('quartz', ['minecraft:quartz_block', 'minecraft:quartz_slab']);
    pillarTrim('calcite', ['minecraft:calcite', 'stoneworks:cobbled_calcite_slab'])
    pillarTrim('bricks', ['minecraft:bricks', 'minecraft:brick_slab'])

    for (const [mod, woods] of Object.entries(all_woods)) {
        for (let m of woods) {
            if (mod === 'minecraft') {
                pillarTrim(m, [`${mod}:${m}_planks`, `${mod}:${m}_slab`]);
            }
        }
    }
});