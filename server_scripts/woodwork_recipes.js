// priority: 2
// requires: woodworks

// Data
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
        "warped"
    ],
    "wetland_whimsy": [
        "bald_cypress"
    ],
    "luminousworld": [
        "white_oak",
        "palm", 
        "auburn",
        "baobab" // Cursed naming convention
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
    "mynethersdelight":[
        "powdery"       // blocks instead of logs (like bamboo)
    ],
    "betterarcheology":[
        "rotten"        // Doesn't need tag (only log)
    ],
    "vanillabackport":[
        "pale_oak"
    ],
    "undergarden":[
        "ancient_root",
        "smogstem",
        "grongle",
        "wigglewood"
    ],
    "pastel":[
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
    "regions_unexplored":[
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
    "luminous_nether": [
        "mushroom",
        "withered"
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

const special_log_tags = {
    "aether": {
        "skyroot" : "crafts_skyroot_planks"
    },
    "pastel": {
        "slate_noxwood": "slate_noxcap_stems",
        "ebony_noxwood": "ebony_noxcap_stems",
        "ivory_noxwood": "ivory_noxcap_stems",
        "chestnut_noxwood": "chestnut_noxcap_stems"
    },
    "regions_unexplored": {
        "magnolia": "magnolia_logs_item"
    }
}

const mod_items = {
    "logs": {
        "minecraft": [
            {
                "id": "boat",
                "amount": 1
            }
        ],
        "supplementaries": [
            {
                "id": "way_sign",
                "amount": 4
            }
        ],
        "handcrafted": [
            {
                "id": "bench",
                "amount": 2
            },
            {
                "id": "chair",
                "amount": 2
            },
            {
                "id": "dining_bench",
                "amount": 2
            },
            {
                "id": "table",
                "amount": 2
            },
            {
                "id": "pillar_trim",
                "amount": 6
            },
            {
                "id": "corner_trim",
                "amount": 4
            }
        ],
        "luminousworld": [
            {
                "id": "table",
                "amount": 1
            },
            {
                "id": "shelf",
                "amount": 3
            },
            {
                "id": "log_stack",
                "amount": 1
            }
        ],
        "createcasing": [
            {
                "id": "shaft",
                "amount": 4
            }
        ],
        "farmersdelight": [
            {
                "id": "cabinet",
                "amount": 1
            }
        ],
        "unusual_furniture": [
            {
                "id": "chair",
                "amount": 4
            },
            {
                "id": "stool",
                "amount": 4
            },
            {
                "id": "drawer",
                "amount": 1
            },
            {
                "id": "shelf",
                "amount": 4
            },
            {
                "id": "open_riser_stairs",
                "amount": 4
            },
            {
                "id": "carved",
                "amount": 4
            },
            {
                "id": "railing",
                "amount": 2
            },
            {
                "id": "coffee_table",
                "amount": 1
            },
            {
                "id": "beam",
                "amount": 4
            }
        ],
        "decorativepaths": [
            {
                "id": "planks_path_01",
                "amount": 4
            },
            {
                "id": "planks_path_02",
                "amount": 4
            },
            {
                "id": "planks_path_03",
                "amount": 4
            },
            {
                "id": "planks_path_04",
                "amount": 4
            },
            {
                "id": "planks_path_05",
                "amount": 4
            },
            {
                "id": "planks_path_06",
                "amount": 4
            }
        ],
        "decorativepavers": [
            {
                "id": "paver_01",
                "amount": 4
            },
            {
                "id": "paver_02",
                "amount": 4
            },
            {
                "id": "paver_03",
                "amount": 4
            },
            {
                "id": "paver_04",
                "amount": 4
            },
            {
                "id": "paver_05",
                "amount": 4
            },
            {
                "id": "paver_06",
                "amount": 4
            },
            {
                "id": "paver_07",
                "amount": 4
            },
            {
                "id": "paver_08",
                "amount": 4
            },
            {
                "id": "paver_09",
                "amount": 4
            },
            {
                "id": "paver_10",
                "amount": 4
            }
        ]
    },
    "planks": {
        "supplementaries": [
            {
                "id": "way_sign",
                "amount": 1
            }
        ],
        "handcrafted": [
            {
                "id": "pillar_trim",
                "amount": 2
            },
            {
                "id": "corner_trim",
                "amount": 1
            }
        ],
        "decorativepaths": [
            {
                "id": "planks_path_01",
                "amount": 1
            },
            {
                "id": "planks_path_02",
                "amount": 1
            },
            {
                "id": "planks_path_03",
                "amount": 1
            },
            {
                "id": "planks_path_04",
                "amount": 1
            },
            {
                "id": "planks_path_05",
                "amount": 1
            },
            {
                "id": "planks_path_06",
                "amount": 1
            }
        ],
        "decorativepavers": [
            {
                "id": "paver_01",
                "amount": 1
            },
            {
                "id": "paver_02",
                "amount": 1
            },
            {
                "id": "paver_03",
                "amount": 1
            },
            {
                "id": "paver_04",
                "amount": 1
            },
            {
                "id": "paver_05",
                "amount": 1
            },
            {
                "id": "paver_06",
                "amount": 1
            },
            {
                "id": "paver_07",
                "amount": 1
            },
            {
                "id": "paver_08",
                "amount": 1
            },
            {
                "id": "paver_09",
                "amount": 1
            },
            {
                "id": "paver_10",
                "amount": 1
            }
        ],
        "twilightforest": [
            {
                "id": "banister",
                "amount": 3
            }
        ],
        "unusual_furniture": [
            {
                "id": "chair",
                "amount": 1
            },
            {
                "id": "stool",
                "amount": 1
            },
            {
                "id": "shelf",
                "amount": 1
            },
            {
                "id": "open_riser_stairs",
                "amount": 1
            },
            {
                "id": "carved",
                "amount": 1
            }
        ]
    },
    "sign": {
        "supplementaries": [
            {
                "id": "way_sign",
                "amount": 2
            }
        ]
    },
    "stairs": {
        "unusual_furniture": [
            {
                "id": "open_riser_stairs",
                "amount": 1
            }
        ]
    }
}

const vanilla_items = {
    "logs" : [
        {
            "id": "planks",
            "amount": 4
        },
        {
            "id": "stairs",
            "amount": 4
        },
        {
            "id": "slab",
            "amount": 8
        },
        {
            "id": "fence",
            "amount": 4
        },
        {
            "id": "fence_gate",
            "amount": 1
        },
        {
            "id": "door",
            "amount": 2
        },
        {
            "id": "trapdoor",
            "amount": 2
        },
        {
            "id": "pressure_plate",
            "amount": 2
        },
        {
            "id": "button",
            "amount": 4
        },
        {
            "id": "sign",
            "amount": 2
        },
        {
            "id": "boat",
            "amount": 1
        }
    ],
    "planks" : [
        {
            "id": "stairs",
            "amount" : 1
        },
        {
            "id": "slab",
            "amount": 2
        },
        {
            "id": "fence",
            "amount": 1
        },
        {
            "id": "button",
            "amount": 1
        }
    ]
}

const luminousshelf = ["oak", "birch", "spruce", "bao"];
const stem_wood = [
    "crimson",
     "warped", 
     "sepia", 
     "bloom",
    ];
const bamboo_wood = ["bamboo", "powdery"] // Note: has a special type of planks called mosaic
const log_variants = ["logs", "stems", "blocks"]
const colors = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
]

// Wood types with missing chest variant
const missing_chest_variant = [
    // Luminous
    'luminousworld:autumnplank',
    'luminousworld:baobab_plank',
    'luminousworld:palmplank',
    'luminousworld:white_oak_plank',
    // Pastel
    '#pastel:noxwood_planks',
    // Samuraï Dynasty
    'samurai_dynasty:red_maple_planks'
]

// Utility functions
function pad(num, size) {
    var s = "000" + num;
    return s.substr(s.length - size);
}

// Sawmill recipe generator
function sawmillRecipe(ingredient, result_id, result_amount, is_logs){
    // Returns the correct dict for a sawmill recipe
    // Add sawmill recipes
    let r = {
        "type": "woodworks:sawmill",
        "ingredient": {
            "item": ingredient
        },
        "result": {
            "count": result_amount,
            "id": result_id
        }
    }
    // Use tag for log or stem as ingredient
    if (is_logs) {
        r = {
            "type": "woodworks:sawmill",
            "ingredient": {
                "tag": ingredient
            },
            "result": {
                "count": result_amount,
                "id": result_id
            }
        }
    }
    
    return r
    
}

// Functions adding sawmill recipes
function modItemSawmillRecipe(event, mod_items, wood_type, namespace){
    // Register sawmill recipe of modded items made of vanilla wood
    for (const [ingredient_part, mod_results] of Object.entries(mod_items)) {
        if (ingredient_part === "logs") {
            if (stem_wood.includes(wood_type)) {
                ingredient_part = "stem";
            }
            else if (wood_type === "bamboo") {
                ingredient_part = "blocks";
            }
        }
        let ingredient = namespace + ":" + wood_type + "_" + ingredient_part;
        for (const [mod, results] of Object.entries(mod_results)) {
            for (const result of results) {
                // Define proper item id for the result
                let result_id = mod + ":" + wood_type + "_" + result["id"];
                if (result["id"] === "way_sign") {
                    result_id = mod + ":way_sign_" + wood_type;
                }
                else if (mod === "luminousworld") {
                    // Patch luminousworld log_stack IDs
                    if (result["id"] !== "log_stack") {
                        result_id = mod + ":" + wood_type + result["id"];
                    }
                    // Patch luminous dark oak items IDs
                    if (wood_type === "dark_oak") {
                        result_id = mod + ":darkoak" + result["id"];
                    }
                    // Patch luminousworld shelves IDs
                    if (result["id"] === "shelf" && luminousshelf.includes(wood_type)) {
                        result_id += "_1";
                    }
                }
                else if (mod === "unusual_furniture" && result["id"] === "carved") {
                    result_id = mod + ":carved_" + wood_type;
                }

                let r = sawmillRecipe(ingredient, result_id, result["amount"], log_variants.includes(ingredient_part))
                // Register sawmill recipes
                let r_id = wood_type + "_" + mod + "_" + result["id"] + "_from_" + ingredient_part;
                event.custom(r).id(r_id + "_sawing")

                // Add create:cutting recipes
                if (log_variants.includes(ingredient_part)) {
                    let tag_ingredient = '#' + ingredient;
                    event.recipes.create.cutting(
                        withChance(result_id, 1, result["amount"]),
                        tag_ingredient
                    )
                }
                else {
                    event.recipes.create.cutting(
                        withChance(result_id, 1, result["amount"]),
                        ingredient
                    ).id(r_id + "_cutting")
                }

            }
        }
        // Remove stonecutting recipe (Decorative paths and pavers)
        for (let i = 1; i < 7; i++) {
            event.remove({ output: "decorativepaths:" + wood_type + "_planks_path_0" + i })
        }
        for (let i = 1; i < 11; i++) {
            event.remove({ output: "decorativepavers:" + wood_type + "_paver_" + pad(i,2)})
        }
    }
}

function vanillaItemSawmillRecipe(event, vanilla_items, wood_type, namespace){
    // Register sawmill recipe of vanilla items made of modded wood
    for (let [ingredient_part, vanilla_results] of Object.entries(vanilla_items)) {
        // Replace logs by stems
        if (ingredient_part === "logs") {
            if (stem_wood.includes(wood_type)) {
                ingredient_part = "stems";
            }
        }
        let ingredient = namespace + ":" + wood_type + "_" + ingredient_part;
        // Special tags for aether and ars_nouveau and other exceptions
        if (Object.keys(special_log_tags).includes(namespace) && Object.keys(special_log_tags[namespace]).includes(wood_type)){
            ingredient = namespace + ":" + special_log_tags[namespace][wood_type];
        }
        else if (namespace === "ars_nouveau" && wood_type === "archwood" && ingredient_part === "logs"){
            ingredient ="c:logs/archwood";
        }
            for (const result of vanilla_results) {
                // Define proper item id for the result
                let result_id = namespace + ":" + wood_type + "_" + result["id"];
                if (namespace === "luminousworld"){
                    if (wood_type === "white_oak"){
                        ingredient = ingredient.replace("planks", "plank");
                        result_id = result_id.replace("planks", "plank");
                        if ("trapdoor" === result["id"]){
                            result_id = namespace + ":white_oak" + result["id"];
                        }
                        else if ( result["id"] === "fence_gate"){
                            result_id = namespace + ":white_oakfencegate";
                        }                        
                    }
                    else if (wood_type === "baobab"){
                        ingredient = ingredient.replace("planks", "plank");
                        result_id = result_id.replace("planks", "plank");
                        if ( ["fence", "trapdoor"].includes(result["id"])){
                            result_id = result_id.replace("_", "");
                        }
                    }
                    else {
                        ingredient = ingredient.replace("_planks", "plank");
                        result_id = result_id.replace("_planks", "plank");
                        if (wood_type === "auburn"){
                            if (result["id"] !== "door"){
                                result_id = result_id.replace("_", "");
                            }
                            if (result["id"] === "fence_gate"){
                                result_id = result_id.replace("_", "");
                            }
                            if (! ["door", "trapdoor"].includes(result["id"])){
                                result_id = result_id.replace("auburn", "autumn");
                            }
                        }
                        else if (wood_type === "palm"){
                            if (!["fence_gate", "door"].includes(result["id"])){
                                result_id = result_id.replace("_", "");
                            }
                        }
                       
                    }                
                }
                else if (namespace === "luminous_nether"){
                    if (wood_type === "mushroom" && result["id"] === "fence_gate"){
                        result_id = result_id.replace(wood_type,"mushoom") ;
                    }
                    if (wood_type === "mushroom" && result["id"] === "slab"){
                        result_id = result_id.replace("slab", "slabs");
                    }
                }
                if (result["id"] === "boat"){
                    if (wood_type === "bamboo") {result_id = result_id.replace("boat", "raft");}
                    else if (["crimson", "warped"].includes(wood_type)) continue;
                }
                
                // Create sawmill recipe
                let r = sawmillRecipe(ingredient, result_id, result["amount"], log_variants.includes(ingredient_part))
                let r_id = namespace + "_" + wood_type + "_" + result["id"] + "_from_" + ingredient_part;
                // Register sawmill recipes
                event.custom(r).id(r_id + "_sawing")
            }
    }
}

function modItemFromModdedWoodSawmillRecipe(event, mod_items, wood_type, namespace){
    // Register sawmill recipe of modded items made of modded wood
    for (const [ingredient_part, mod_results] of Object.entries(mod_items)){
        let ingredient = `${namespace}:${wood_type}_${ingredient_part}`;
        let is_logs = log_variants.includes(ingredient_part)
        
        // Supplementaries recipe (way_signs)
        if (Object.keys(mod_results).includes("supplementaries")){
            for (let result of mod_results["supplementaries"]){
                let result_id = `supplementaries:${namespace}/${result["id"]}_${wood_type}`;
                let r = sawmillRecipe(ingredient, result_id, result["amount"], is_logs);
                let r_id = `supplementaries_${namespace}_${wood_type}_${result["id"]}_from_${ingredient_part}`
                // Register sawmill recipes
                event.custom(r).id(r_id + "_sawing")
            }
        }
        // Luminous
        if (namespace === "luminousworld" && Object.keys(mod_results).includes("luminousworld")){
            for (let result of mod_results[namespace]){
                let result_id = `${namespace}:${wood_type}${result["id"]}`
                let r = sawmillRecipe(ingredient, result_id, result["amount"], is_logs);
                let r_id = `${namespace}_${wood_type}_${namespace}_${result["id"]}_from_${ingredient_part}`
                // Register sawmill recipes
                event.custom(r).id(r_id + "_sawing")
            }
        }
    }
}


// Create new tags
ServerEvents.tags("item", event => {
    // Missing chest variants
    for (const planks_type of missing_chest_variant){
        event.add("kubejs:vanilla_chest_ingredient", planks_type)
    }
    for (const plank_type of wood_types["regions_unexplored"]){
        event.add("kubejs:vanilla_chest_ingredient", "regions_unexplored:" + plank_type + "_planks")
    }

    // Luminous nether logs
    event.add("luminous_nether:withered_logs", "luminous_nether:withered_log")
    event.add("luminous_nether:withered_logs", "luminous_nether:stripped_withered_log")
    event.add("luminous_nether:mushroom_logs", "luminous_nether:goldenstem")
    event.add("luminous_nether:mushroom_logs", "luminous_nether:shredded_stem")
    
    // Luminousworld logs
    event.add("luminousworld:baobab_logs", "luminousworld:bao_bob_log")
    event.add("luminousworld:baobab_logs", "luminousworld:stripped_baobab_log")
    event.add("luminousworld:baobab_logs", "luminousworld:bao_bob_wood")
    event.add("luminousworld:baobab_logs", "luminousworld:stripped_baobab_wood")
    
    event.add("luminousworld:white_oak_logs", "luminousworld:whiteoaklog")
    event.add("luminousworld:white_oak_logs", "luminousworld:stripped_white_oak_log")
    event.add("luminousworld:white_oak_logs", "luminousworld:white_oak_wood")
    event.add("luminousworld:white_oak_logs", "luminousworld:stripped_white_oak_wood")
    
    event.add("luminousworld:palm_logs", "luminousworld:palm_log")
    event.add("luminousworld:palm_logs", "luminousworld:stripped_palm_log")
    event.add("luminousworld:palm_logs", "luminousworld:palm_wood")
    event.add("luminousworld:palm_logs", "luminousworld:stripped_palm_wood")
    
    event.add("luminousworld:auburn_logs", "luminousworld:auburnlog")
    event.add("luminousworld:auburn_logs", "luminousworld:stripped_auburn_log")
    event.add("luminousworld:auburn_logs", "luminousworld:auburn_wood")
    event.add("luminousworld:auburn_logs", "luminousworld:stripped_auburn_wood")

    // Alpha logs
    event.add("regions_unexplored:alpha_logs", "regions_unexplored:alpha_log")

    // Ancient root logs
    event.add("undergarden:ancient_root_logs", "undergarden:ancient_root")
})


ServerEvents.recipes(event => {
    // Add vanilla chest recipe for 
    event.shaped(
        'minecraft:chest',
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            'A': '#kubejs:vanilla_chest_ingredient'
        }
    )
    event.shaped(
        'minecraft:bookshelf',
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        { 
            'A': '#kubejs:vanilla_chest_ingredient', 
            'B': 'minecraft:book' 
        }
    )
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);

    // Sawmill recipes
    for (const [namespace, w_types] of Object.entries(wood_types)){
        if (namespace === "minecraft"){
            for (const w_type of w_types) {
                modItemSawmillRecipe(event, mod_items, w_type, namespace);
            }
        }
        else {
            for (const w_type of w_types){
                vanillaItemSawmillRecipe(event, vanilla_items, w_type, namespace);
                modItemFromModdedWoodSawmillRecipe(event, mod_items, w_type, namespace)
            }
        }
    }
    event.recipes.create.cutting(
        'luminousworld:stripped_baobab_log',
        'luminousworld:bao_bob_log'
    )
    event.remove({id: 'create:cutting/runtime_generated/compat/luminousworld/baobab_log_to_stripped_baobab_log'})

    // Remove shafts crafting recipe (create encased)
    for (const w_type of wood_types["minecraft"]){
        event.remove({output: `createcasing:${w_type}_shaft`})
    }
    // Remove items from stonecutting and put them in sawmill
    event.remove({output: 'barbequesdelight:tray'})
    event.custom(sawmillRecipe("minecraft:planks", "barbequesdelight:tray", 1, true))
        .id('barbequesdelight:tray_from_planks_sawing')
    event.custom(sawmillRecipe("minecraft:logs", "barbequesdelight:tray", 4, true))
        .id('barbequesdelight:tray_from_logs_sawing')
    event.recipes.create.cutting(
    'barbequesdelight:tray',
        '#minecraft:planks'
    ).id('barbequesdelight:tray_from_planks_cutting')
    
    event.remove({output: 'barbequesdelight:basin'})
    event.custom(sawmillRecipe("minecraft:logs", "barbequesdelight:basin", 2, true))
    event.recipes.create.cutting(
    'barbequesdelight:basin',
        '#minecraft:logs'
    ).id('barbequesdelight:basin_from_logs_cutting')

    // Foxy pillar
    const foxy_r = sawmillRecipe("minecraft:spruce_logs", "abyssal_decor:foxy_pillar", 1, true)
    event.custom(foxy_r);
    // Wood plate
    const w_plate_r = sawmillRecipe("minecraft:wooden_slabs", "handcrafted:wood_plate", 1, true)
    event.custom(w_plate_r);
    // Bamboo missing blocks
    const bb_fence_gate = sawmillRecipe("bamboo_block", "bamboo_fence_gate")
    const bb_raft = sawmillRecipe( "bamboo_block", "bamboo_raft")

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})