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
    function steelRecipe(iron, carbon, n_steel_nugget, p_iron_nugget) {
        return event.recipes.create.mixing(
            [
                Item.of('alloyed:steel_ingot', 1),
                Item.of('alloyed:steel_nugget', n_steel_nugget).
                    withChance('minecraft:iron_nugget', p_iron_nugget),
                withChance('create:experience_nugget', 0.95)
            ],
            [
                iron,
                iron,
                carbon,
                carbon,
                carbon,
                carbon,
                carbon
            ]
        ).superheated()
    }
    steelRecipe(
        'minecraft:iron_ingot', 
        'create_ironworks:charcoal_dust', 
        2, 0.8
    ).id('kubejs:mixing/steel_charcoal_from_ingot')
    
    steelRecipe(
        'minecraft:iron_ingot', 
        'create_ironworks:coal_dust', 
        5, 0.2
    ).id('kubejs:mixing/steel_coal_from_ingot')

    steelRecipe(
        'create:crushed_iron', 
        'create_ironworks:charcoal_dust', 
        4, 0.8
    ).id('kubejs:mixing/steel_charcoal_from_crushed')
    
    steelRecipe(
        'create:crushed_iron', 
        'create_ironworks:coal_dust', 
        7, 0.2
    ).id('kubejs:mixing/steel_coal_from_crushed')

    event.remove({id: [
        'create_ironworks:materials/alloys/steel_coal_from_crushed',
        'create_ironworks:materials/alloys/steel_coal_from_ingot',
        'create_ironworks:materials/alloys/steel_charcoal_from_crushed',
        'create_ironworks:materials/alloys/steel_charcoal_from_ingot'
    ]})

    event.recipes.create.mixing(
        [
            Item.of('alloyed:steel_ingot', 1),
            Item.of('alloyed:steel_nugget', 2).
            withChance('minecraft:iron_nugget', 0.8),
            withChance('create:experience_nugget', 0.95)
        ],        
        [
            'minecraft:iron_ingot',
            'minecraft:iron_ingot',
            'create_ironworks:charcoal_dust',
            'create_ironworks:charcoal_dust',
            'create_ironworks:charcoal_dust',
            'create_ironworks:charcoal_dust',
            'create_ironworks:charcoal_dust'
        ]
    ).superheated().id('kubejs:mixing/steel_charcoal_from_ingot')

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
    
    event.replaceInput(
        {id: 'create_ironworks:materials/steel/upgrade_template'},
        'create_ironworks:steel_ingot',
        'alloyed:steel_ingot'
    )

    // Allow conversion from ironworks steel ingots to alloyed steel ingots
    event.shapeless(
        'alloyed:steel_ingot',
        'create_ironworks:steel_ingot'
    )
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