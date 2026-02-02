//requires: rustic_engineer
//requires: create
//requires: alloyed

ServerEvents.recipes(event => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event); 
    
    // Remove Engineer's Hammer
    event.remove({output: 'rustic_engineer:rustic_hammer'});

    // Replace iron plates by steel sheets
    event.replaceInput(
        {input: 'rustic_engineer:iron_plate'},
        'rustic_engineer:iron_plate',
         'alloyed:steel_sheet');
    // Replace iron parts ingredient by steel parts
    event.replaceInput(
        {output: 'rustic_engineer:iron_pieces'},
        'minecraft:iron_ingot',
         'alloyed:steel_ingot');
    event.replaceInput(
        {output: 'rustic_engineer:iron_pieces'},
        'minecraft:iron_nugget',
         'alloyed:steel_nugget');
    // Gears are made by cutting steel sheets
    event.remove({output: 'rustic_engineer:gear'});
    event.stonecutting('4x rustic_engineer:gear', 'alloyed:steel_sheet');
    // Replace iron nuggets by gears in precision mechanism recipe
    event.remove(
        {output: 'create:precision_mechanism'});
    event.recipes.createSequencedAssembly(
        [
            'create:precision_mechanism' // output
        ],
        
        'create:golden_sheet', // input
       [
           event.recipes.createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'create:cogwheel']),
           event.recipes.createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'create:large_cogwheel']),
           event.recipes.createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'rustic_engineer:gear']),
        
       ]
    ).transitionalItem('create:precision_mechanism')
        .loops(5);

    // Replace logs by andesite casing for moveable parts
    event.replaceInput(
        {output: 'rustic_engineer:movable_parts'},
        '#minecraft:logs',
         'create:andesite_casing');

    // Replace iron in tool and key recipes by steel
    event.remove({output: 'rustic_engineer:repair_tool'});
    event.shaped(
        Item.of('rustic_engineer:repair_tool', 1),
        [
            'A A',
            ' B ',
            ' B '
        ],
        {
            A: 'alloyed:steel_sheet',
            B: 'alloyed:steel_ingot',
        }
    )
    event.remove({output: 'rustic_engineer:clock_key'});
    event.shaped(
        Item.of('rustic_engineer:clock_key', 1),
        [
            'ABA',
            ' B '
        ],
        {
            A: 'alloyed:steel_sheet',
            B: 'alloyed:steel_ingot',
        }
    )

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})
