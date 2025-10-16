const ultimate = 'create_ultimate_factory';
const recipesToRemove = [
    "compacting_coalblock",
    "compacting_calcite",
    "crushing_blackstone",
    "crushing_seagrass",
    "crushing_netherite",
    "crushing_scoria",
    "haunting_charcoal"
];

ServerEvents.recipes(event => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);   

    // Remove the recipes from the ultimate factory mod
    for (const recipe of recipesToRemove) {
        event.remove({id: `${ultimate}:${recipe}`});
    }
    event.remove({output: "minecraft:wither_skeleton_skull"});

    // Blast coal dust into graphite powder
    event.blasting(
        "kubejs:graphite_powder",
        "create_ironworks:coal_dust"
    )
    // Compact 9x graphite power into graphite
    event.recipes.create.compacting(
        "kubejs:graphite",
        [
            "kubejs:graphite_powder",
            "kubejs:graphite_powder",
            "kubejs:graphite_powder",
            "kubejs:graphite_powder",
            "kubejs:graphite_powder",
            "kubejs:graphite_powder",
            "kubejs:graphite_powder",
            "kubejs:graphite_powder",
            "kubejs:graphite_powder"
        ]
    ).heated().id("kubejs:graphite_compacting");

    // Compact graphite into diamond
    event.recipes.create.compacting(
        [
           withChance("kubejs:impure_diamond", 0.80),
           withChance("minecraft:diamond", 0.005),
           withChance("neodsprocessing:deepslate_chunk", 0.15),
        ],
        [
            "kubejs:graphite",
            {
                "type" : "fluid_stack",
                "fluid" : "minecraft:lava",
                "amount" : 1000
            }
        ]
    ).superheated();

    // Recycle impure diamond into gravel
    event.recipes.create.crushing(
        [
            withChance("minecraft:gravel", 0.6),
            withChance("kubejs:graphite_powder", 0.1),
            withChance("dndesires:diamond_shard", 0.02),
            withChance("create:experience_nugget", 0.5)
        ],
        "kubejs:impure_diamond"
    )

    // Compact gravel and salt into calcite
    event.recipes.create.compacting(
        "minecraft:calcite",
        [
            "minecraft:gravel",
            "garnished:salt_compound",
            "garnished:salt_compound",
            "garnished:salt_compound",
        ]
    ).heated()

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})
