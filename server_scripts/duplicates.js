//requires: create_compressed, create_ironworks, create_things_and_misc, cratedelight, expandeddelight, create_things_and_misc, create, simplyswords

// This script removes duplicate items and recipes from Not a Modpack

// Sturdy sheet blocks
const create_tm = 'create_things_and_misc:';
const ssb = 'create_ironworks:sturdy_sheet_block';
const pssb = 'create_compressed:sturdy_sheet_block';
const tssb = create_tm + 'sturdy_sheet_block'
const tss_slab = create_tm + 'sturdy_sheet_slab'
const tss_stairs = create_tm + 'sturdy_sheet_slab_stairs'

// Rose quartz blocks
const rq_sheet_block = 'create_ironworks:rose_quartz_block';
const rq_sheet = 'create_things_and_misc:rose_quartz_sheet';
const rq_armor = 'create_ironworks:rose_quartz_armor';
const armor_slots = ['helmet', 'chestplate', 'leggings', 'boots'];

// Salt items
const salt_bag = 'cratedelight:salt_bag';
const salt = 'expandeddelight:salt';
const salt_rock = 'expandeddelight:salt_rock';
const salt_ore = 'c:ores/salt';
const salt_compound = 'garnished:salt_compound';
const crushed_salt = 'garnished:crushed_salt';

// Simply Swords materials
const ss_materials = [
    'iron',
    'gold',
    'diamond',
    'netherite',
    'runic'
];

// New tags
ServerEvents.tags("item", event => {
    // Cinnamon
    event.add("kubejs:cinnamon_stick", "abyssal_decor:cinnamon_stick");
    event.add("kubejs:cinnamon_stick", "expandeddelight:cinnamon_stick");
    // Copycats
    for (const cat of ['block', 'slab', 'beam', 'vertical_step', 'stairs', 
        'fence', 'fence_gate', 'wall', 'board', 'box', 'catwalk']){
            event.add("kubejs:copycats", `create_connected:copycat_${cat}`)
        }
})

ServerEvents.recipes(event => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);   

    // Apple crates
    event.remove({output: "cratedelight:apple_crate"});
    // Sturdy sheet blocks
    event.remove({output: pssb});
    event.shaped(
        Item.of(pssb, 4),
            [
                'AA',
                'AA'
            ],
            {
                A : ssb
            }
        );
    event.stonecutting(pssb, ssb);
    event.stonecutting(ssb, pssb);
    // Rose Quartz Block
    event.remove({output: rq_sheet_block});
    for (const slot of armor_slots) {
        event.remove({output: rq_armor + '_' + slot});
    }
    event.shaped(
        Item.of(rq_sheet_block, 1),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A : rq_sheet
            }
        );
    event.shaped(
    Item.of(rq_armor + '_helmet', 1),
        [
            'AAA',
            'A A'
        ],
        {
            A : rq_sheet
        }
    );
    event.shaped(
        Item.of(rq_armor + '_chestplate', 1),
            [
                'A A',
                'AAA',
                'AAA'
            ],
            {
                A : rq_sheet
            }
        );
    event.shaped(
        Item.of(rq_armor + '_leggings', 1),
            [
                'AAA',
                'A A',
                'A A'
            ],
            {
                A : rq_sheet
            }
        );
    event.shaped(   
        Item.of(rq_armor + '_boots', 1),
            [
                'A A',
                'A A'
            ],
            {
                A : rq_sheet
            }
        );
    // Salt recipes
    event.remove({id: "expandeddelight:salt"});
    event.shapeless(
        Item.of(salt, 9), [salt_bag]
    );
    event.remove({output: salt_rock});
    event.recipes.create.milling(
        [
            salt_rock,
            withChance(salt, 0.18, 3),
            withChance("create:experience_nugget", 0.05)
        ],
        {tag: salt_ore}
    );
    event.recipes.create.milling(
        [
            Item.of(salt, 2),
            withChance(salt, 0.15)
        ],
        salt_rock
    );
    event.recipes.create.milling(
        [
            Item.of(salt, 2),
            withChance(salt, 0.1)
        ],
        crushed_salt
    );
    event.recipes.create.mixing(
        salt,
        {
            "type": "fluid_stack",
            "amount": 1000,
            "fluid": "minecraft:water"
        }
    ).heated()

    // Simply Swords spears
    for (const material of ss_materials) {
        event.remove({output: 'simplyswords:' + material + '_spear'});                           
    }

    // Simply swords sai
    for (const material of ['iron', 'gold','diamond']){
        event.remove({ output: `simplyswords:${material}_sai` });
        let blade = "#c:gems/diamond";
        if (material !== "diamond"){
            blade = `#c:ingots/${material}`;
        }
        event.shaped(`simplyswords:${material}_sai`,
            [
                " A",
                "B "
            ],
            {
                "A" : blade,
                "B" : "samurai_dynasty:knive_handle"
            }
        );
    }

    for (const material of ["", "_netherite"]){
        event.remove({output: `samurai_dynasty:sai${material}`})
    }

    // Cinamon
    // event.replaceInput({input:"abyssal_decor:cinnamon_stick", not:{output:"abyssal_decor:cinnamon_shingles"}},
    //     "abyssal_decor:cinnamon_stick",
    //     "expandeddelight:cinnamon"
    // )
    // event.remove({output: "expandeddelight:cinnamon"})
    // event.custom(
    //     {
    //         "type": "farmersdelight:cutting",
    //         "ingredients": [
    //             {
    //                 "tag": "kubejs:cinnamon_stick"
    //             }
    //         ],
    //         "result": [
    //             {
    //                 "item": {
    //                     "count": 2,
    //                     "id": "expandeddelight:cinnamon"
    //                 }
    //             },
    //             {
    //                 "chance": 0.15,
    //                 "item": {
    //                     "count": 1,
    //                     "id": "expandeddelight:cinnamon"
    //                 }
    //             }
    //         ],
    //         "tool": {
    //             "tag": "expandeddelight:crushing_tools"
    //         }
    //       }
    // )
    // event.shapeless("expandeddelight:cinnamon_stick", "abyssal_decor:cinnamon_stick");
    // event.shapeless("abyssal_decor:cinnamon_stick", "expandeddelight:cinnamon_stick");

    // Rings (Jewelery vs Aether)
    // event.remove({output:"#jewelry:rings", output:"#rpg_series:tier_0_accessories"})
    // for (const metal of ['copper', 'iron', 'gold']){
    //     let metal_s = metal;
    //     if (metal === 'gold'){metal_s = 'golden';} // Golden sheets
    //     event.shaped(
    //         Item.of(`jewelry:${metal}_ring`, 1),
    //         [
    //             " A ",
    //             "B B",
    //             " B "

    //         ],
    //         {
    //             'A': `create:${metal_s}_sheet`,
    //             'B': `minecraft:${metal}_ingot`
    //         }
    //     )
    // }

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
    for (let m of pillar_trim_materials){
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
    function pillarTrim(output_material, pillarInputs){
        let output = `handcrafted:${output_material}_pillar_trim`
        event.remove({output:output})
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
    for (let m of pillar_trim_materials){
        if (['calcite', 'bricks'].includes(m)){continue;}
        pillarTrim(m, [`minecraft:${m}`, `minecraft:${m}_slab` ]);
    }
    pillarTrim('dripstone', ['minecraft:dripstone_block', 'create:cut_dripstone_slab']);
    pillarTrim('quartz', ['minecraft:quartz_block', 'minecraft:quartz_slab']);
    pillarTrim('calcite', ['minecraft:calcite', 'stoneworks:cobbled_calcite_slab'])
    pillarTrim('bricks', ['minecraft:bricks', 'minecraft:brick_slab'])
    
    for (const[mod, woods] of Object.entries(all_woods)){
        for (let m of woods){
            if (mod === 'minecraft'){
                pillarTrim(m, [`${mod}:${m}_planks`, `${mod}:${m}_slab` ]);
            }
            // else {
            //     // let output = `everycomp:hc/${mod}/${m}_pillar_trim`;
            //     let pillarInputs = [`${mod}:${m}_planks`, `${mod}:${m}_slab`]
            //     event.remove({ output: output })
            //     event.shaped(
            //         Item.of(output, 4),
            //         [
            //             ' A ',
            //             ' AB',
            //             ' A '
            //         ],
            //         {
            //             A: pillarInputs[0],
            //             B: pillarInputs[1]
            //         }
            //     )
            // }
        }
    }

    // Abyssal Decor Pillars (Brick pillar)
    // const pillar_materials = {
    //     'white_pearl': ['block_of_pearl','white_pearl'],
    //     'blood_coral':['polished_blood_coral', 'blood_coral_bud'],
    //     'jade':['polished_jade','green_dye'],
    //     'seabrass':['seabrass_block', 'seabrass_ingot'],
    //     'deepbronze': ['deepbronze_block', 'deepbronze_ingot'],
    //     'lapis':['lapis_block', 'lapis_lazuli'],
    //     'black_pearl':['block_of_black_pearl', 'black_pearl'],
    //     'brick': ['bricks', 'brick'],
    //     'effervescent' : ['polished_effervescence', 'effervescence']
    // }
    // const pillar_minecraft = ['green_dye', 'lapis_lazuli', 'lapis_block', 'brick', 'bricks']

    // for (const [material, ingredients] of Object.entries(pillar_materials)){
    //     // event.remove({output: `abyssal_decor:${material}_pillar`})
    //     let A = `abyssal_decor:${ingredients[1]}`;
    //     let B = `abyssal_decor:${ingredients[0]}`;
    //     if (pillar_minecraft.includes(ingredients[1])){
    //         A = `minecraft:${ingredients[1]}`;
    //     }
    //     if (pillar_minecraft.includes(ingredients[0])){
    //         B = `minecraft:${ingredients[0]}`;
    //     }
        
    //     event.recipes.stonecutting(`abyssal_decor:${material}_pillar`, B)
    // }

    // Brick trapdoor recipe
    // event.remove({output: 'abyssal_decor:brick_trapdoor'});
    // event.shaped(
    //     Item.of('abyssal_decor:brick_trapdoor'),
    //     [
    //         'ABA',
    //         'ABA'
    //     ],
    //     {
    //         A: 'minecraft:bricks',
    //         B: 'minecraft:brick'
    //     }
    // )

    // Wood plate
    event.remove({output: 'handcrafted:wood_plate'});
    event.shaped(
        Item.of('handcrafted:wood_plate', 5),
        [
            ' A ',
            'AAA',
            ' A '
        ],
        {
            A: '#minecraft:wooden_slabs'
        }
    )
    event.remove({output: 'handcrafted:terracotta_plate'});
    event.shaped(
        Item.of('handcrafted:terracotta_plate', 5),
        [
            ' A ',
            'AAA',
            ' A '
        ],
        {
            A: 'clayworks:terracotta_slab'
        }
    )
    event.recipes.stonecutting('handcrafted:terracotta_plate', 'clayworks:terracotta_slab');

    // Vertical vaults
    event.remove({output:"create_connected:item_silo"})
    event.shaped(
        Item.of('create_vibrant_vaults:vertical_item_vault', 1),
        [
            'ABA'
        ],
        {
            A : 'create:iron_sheet',
            B : 'minecraft:barrel'
        }
    )

    // Jade
    // event.recipes.stonecutting('jewelry:jade', 'samurai_dynasty:jade')

    // Chorium
    event.remove({output:'createcasing:chorium_ingot'})

    // Knight Quest
    event.remove({output:'knightquest:steel_sword'})
    event.remove({output:'knightquest:steel_axe'})
    event.shaped(
        'knightquest:steel_sword',
        [
            ' A ',' A ',' B '
        ],
        {
            A:'samurai_dynasty:steel_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        'knightquest:steel_axe',
        [
            'AA ',
            'AB ',
            ' B '
        ],
        {
            A: 'samurai_dynasty:steel_ingot',
            B: 'minecraft:stick'
        }
    )

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})



// Remove item from EMI/JEI/REI
RecipeViewerEvents.removeEntries('item', event => {
    event.remove('cratedelight:apple_crate')
    for (const material of ss_materials) {
        event.remove(`simplyswords:${material}_spear`)
    }
    for (const material of ["", "_netherite"]){
        event.remove(`samurai_dynasty:sai${material}`)
    }
    // Remove smallships whith no textures
    const smallship_w_types = [
        'aether_skyroot',
        'twilightforest_canopy',
        'twilightforest_dark',
        'twilightforest_dark',
        'twilightforest_mangrove',
        'twilightforest_mining',
        'twilightforest_sorting',
        'twilightforest_time',
        'twilightforest_transformation',
        'twilightforest_twilight_oak',
        'undergarden_grongle',
        'undergarden_smogstem',
        'undergarden_wigglewood'
    ]
    for (const ship_type of ['cog', 'brigg', 'galley', 'drakkar']){
        for (const w_type of smallship_w_types){
            event.remove(`smallships:${w_type}_${ship_type}`)
        }
    }
    // Create connected copycats 
    event.remove('#kubejs:copycats')

    // Vertical vaults
    event.remove('create_connected:item_silo')

    // Chorium
    event.remove('createcasing:chorium_ingot')

})

// Remove items from loot tables
// Spear filter that keeps sword on a stick in loot tables
const spearFilter = ItemFilter.allOf(
    '#simplyswords:spears',
    '!simplyswords:sword_on_a_stick'
);

LootJS.modifiers(event => {
    event.addTableModifier(LootType.CHEST).removeLoot(spearFilter)
})

// Remove tags from items
// ServerEvents.tags('item', event => {
//     for (const material of ['iron', 'gold', 'diamond']) {
//         event.removeAllTagsFrom('simplyswords:' + material + '_spear');
//     }
// });

