// priority: 1
// requires: create
// requires: alloyed
// requires: create_ironworks

ServerEvents.tags("item", event => {
    event.add("kubejs:hammer", "handcrafted:hammer")
})

ServerEvents.tags("block", event =>{
    event.remove("minecraft:needs_iron_tool", "create:zinc_ore")
    event.add("minecraft:needs_stone_tool", "create:zinc_ore")
})

ServerEvents.recipes(event => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);

    event.shaped(
        "create:whisk",
        [
            " A ",
            "BAB",
            "BBB"
        ],
        {
            "A": 'create:andesite_alloy',
            "B": "create_ironworks:tin_sheet"
        }
    )
    event.shaped(
        'handcrafted:hammer',
        [
            " AB",
            " BA",
            "B  "
        ],
        {
            "A": 'minecraft:smooth_stone',
            "B": "minecraft:stick"
        }
    )
    event.recipes.shapeless(
        "create_ironworks:tin_sheet",
        [
            "create_ironworks:tin_ingot", 
            "handcrafted:hammer"
        ]
    ).keepIngredient("handcrafted:hammer")

    // Create Alloyed and Create Ironworks compatibility
    event.replaceInput(
        {input: 'create_ironworks:bronze_ingot'},
        'create_ironworks:bronze_ingot',
        'alloyed:bronze_ingot')
    event.remove({output: 'create_ironworks:bronze_ingot'})
    event.remove({id: 'alloyed:mixing/bronze_ingot_x3'})
    event.remove({id: 'alloyed:mixing/bronze_ingot'})
    event.replaceInput(
        {input: 'create_ironworks:bronze_block'}
        ,'create_ironworks:bronze_block'
        ,'alloyed:bronze_block')
    event.remove({output: 'create_ironworks:bronze_block'})
    event.remove({output: 'create_ironworks:bronze_nugget'})
    event.remove({output: 'create_ironworks:bronze_sheet'})

    // Alloy to convert ironworks bronze ingot to alloyed bronze ingot
    event.shapeless(
        'alloyed:bronze_ingot',
        'create_ironworks:bronze_ingot'
        ).id('kubejs:alloyed/bronze_ingot_from_ironworks')

    event.recipes.create.mixing(
        ['3x alloyed:bronze_ingot',
            withChance('create_ironworks:tin_nugget', 0.5),
            withChance('create:copper_nugget', 0.5),
            withChance('create:experience_nugget', 0.75)
        ],
        [
            'minecraft:copper_ingot',
            'minecraft:copper_ingot',
            'minecraft:copper_ingot',
            'create_ironworks:tin_ingot'
        ]
    ).id('kubejs:mixing/bronze_ingot_x3')
    
    event.recipes.create.mixing(
        ['alloyed:bronze_ingot',
            withChance('create_ironworks:tin_nugget', 0.1667),
            withChance('create:copper_nugget', 0.1667),
            withChance('create:experience_nugget', 0.25)
        ],
        [        
            'minecraft:copper_ingot',
            'create_ironworks:tin_nugget',
            'create_ironworks:tin_nugget',
            'create_ironworks:tin_nugget'
        ]
    ).id('kubejs:mixing/bronze_ingot')
    
    event.recipes.create.mixing(
       ['3x alloyed:bronze_nugget']
        [
            'create:copper_nugget',
            'create:copper_nugget',
            'create:copper_nugget',
            'create_ironworks:tin_nugget'
        ]
    ).id('kubejs:mixing/bronze_nugget_x3')

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})

// Remove item from EMI/JEI/REI
RecipeViewerEvents.removeEntries('item', event => {
    event.remove('create_ironworks:bronze_ingot')
    event.remove('create_ironworks:bronze_nugget')
    event.remove('create_ironworks:bronze_block')
    event.remove('create_ironworks:bronze_sheet')
})