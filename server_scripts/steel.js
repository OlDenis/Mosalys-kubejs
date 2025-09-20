// requires: create
// requires: create_ironworks
// requires: alloyed
// requires: samurai_dynasty

function foldRecipe(event, input, output) {
    event.smithing(
        Item.of(output, 3),
        input,
        input,
        input
    )
}

const stages = [
    'wrought',
    'hardened',
    'tempered'
]
const time = 200
const exp = 0.35

// Create ironworks tags for carbon dust
ServerEvents.tags('item', event => {
    event.add('create_ironworks:carbon_dust', 'create_ironworks:coal_dust')
    event.add('create_ironworks:carbon_dust', 'create_ironworks:charcoal_dust')
})

// This script tweaks the steel ingot recipes
ServerEvents.recipes(event => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);

    // Adding ingot folding recipes
    stages.forEach (stage => {
        for (let i = 0; i < 3; i++) {
            foldRecipe(event, `kubejs:${stage}_iron_ingot_${i}`, `kubejs:${stage}_iron_ingot_${i + 1}`)
        }
    })
    // Removing original steel ingot recipe
    event.remove({id: 'samurai_dynasty:steel_ingot_from_blasting_iron_ingot'})
    // Adding new blasting recipes
    event.blasting(
        'kubejs:wrought_iron_ingot_0',
        'minecraft:iron_ingot',
        exp,
        2*time
    )
    event.blasting(
        'samurai_dynasty:steel_ingot',
        'kubejs:tempered_iron_ingot_3',
        exp,
        time
    )
   for (let i = 0; i < 2; i++) {
        event.blasting(
            `kubejs:${stages[i+1]}_iron_ingot_0`,
            `kubejs:${stages[i]}_iron_ingot_3`,
            exp,
            time
        )
    }

    // Create Alloyed and Create Ironworks compatibility

    // Remove Alloyed steel tools and armor recipes
    event.remove({output: 'alloyed:steel_helmet'})
    event.remove({output: 'alloyed:steel_chestplate'})
    event.remove({output: 'alloyed:steel_leggings'})
    event.remove({output: 'alloyed:steel_boots'})
    event.remove({output: 'alloyed:steel_sword'})
    event.remove({output: 'alloyed:steel_shovel'})
    event.remove({output: 'alloyed:steel_axe'})
    event.remove({output: 'alloyed:steel_pickaxe'})
    event.remove({output: 'alloyed:steel_hoe'})

    // Add smithing recipes for steel and armor
    const armorPieces = [
        'helmet',
        'chestplate',
        'leggings',
        'boots'
    ];

    for (let piece of armorPieces) {
        // Remove Create Ironworks steel armor recipes
        event.remove({ output: 'create_ironworks:steel_armor_' + piece });
        // Ironworks steel armor recipes
        event.smithing(
            'create_ironworks:steel_armor_' + piece, // arg 1: output
            'alloyed:steel_upgrade_smithing_template', // arg 2: the smithing template
            'minecraft:iron_' + piece, // arg 3: the item to be upgraded
            '#c:ingots/steel' // arg 4: the upgrade item
        );
    }

    // Change Alloyed steel recipe for Create Ironworks steel ingot
    event.remove({id: 'alloyed:mixing/steel_ingot'})
    event.recipes.create.mixing(
        [
            'alloyed:steel_ingot',
            withChance('alloyed:steel_nugget', 0.3333),
            withChance('create:experience_nugget', 0.5)
        ],        
        [
            '2x minecraft:iron_ingot',
            '#create_ironworks:carbon_dust',
            '#create_ironworks:carbon_dust',
            '#create_ironworks:carbon_dust',
            '#create_ironworks:carbon_dust',
            '#create_ironworks:carbon_dust',
            '#create_ironworks:carbon_dust',
            '#create_ironworks:carbon_dust'
        ]
    ).superheated().id('kubejs:mixing/steel_ingot')

    // Steel sheet metal from steel sheets (Alloyed)
    event.shapeless(
        'alloyed:steel_sheet_metal',
        '4x alloyed:steel_sheet'
    )

    // Distinguish the two steel blocks
    event.replaceInput(
        {id: 'alloyed:stonecutting/steel_sheet_metal_from_steel_block'},
        '#c:blocks/steel',
        'alloyed:steel_block'
    )
    event.remove({output: 'create_ironworks:steel_block'})
    event.stonecutting(
        'create_ironworks:steel_block',
        'alloyed:steel_block'
    )
    event.stonecutting(
        'alloyed:steel_block',
        'create_ironworks:steel_block'
    )
    event.remove({id: 'create_ironworks:materials/steel/ingot_from_block'})
    



    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})

// Remove item from EMI/JEI/REI
RecipeViewerEvents.removeEntries('item', event => {
    event.remove('alloyed:steel_helmet')
    event.remove('alloyed:steel_chestplate')
    event.remove('alloyed:steel_leggings')
    event.remove('alloyed:steel_boots')
    event.remove('alloyed:steel_sword')
    event.remove('alloyed:steel_shovel')
    event.remove('alloyed:steel_axe')
    event.remove('alloyed:steel_pickaxe')
    event.remove('alloyed:steel_hoe')

    event.remove('create_ironworks:steel_sheet')
    event.remove('create_ironworks:steel_ingot')
    event.remove('create_ironworks:steel_nugget')

})