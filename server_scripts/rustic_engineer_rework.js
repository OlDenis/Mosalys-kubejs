//requires: create
//requires: alloyed

ServerEvents.recipes(event => {
    addCreateRecipeHandler(event); 
    
    // Gears are made by cutting steel sheets
    event.remove({output: 'rustic_engineer:gear'});
    event.stonecutting('9x rustic_engineer:gear', '#c:plates/steel');
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

    event.recipes.create.finalize();
})
