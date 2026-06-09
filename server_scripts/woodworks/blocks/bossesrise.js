ServerEvents.recipes(event =>{
    const mod = 'block_factorys_bosses'
    function bigPlanks(variant){
        registerSawingRecipes(event, `${mod}:big_oak_planks`, `${mod}:big_oak_planks_${variant}`, 1, false)
        event.remove({ output: `${mod}:big_oak_planks_${variant}` })
    }

    bigPlanks('variation')
    bigPlanks('straight')
    bigPlanks('cracked')
    bigPlanks('broken')

    // Planks
    const plank = modBlockFactory(mod, 'plank', 16, 4)
    plank(event, 'oak_logs', 'oak_planks', `${mod}:plank`)

    // Filling big panks to get wet planks
    addCreateRecipeHandler(event);

    function wetPlanks(variant){
        event.recipes.createFilling(
            `${mod}:big_oak_planks_wet${variant}`,
            [
                `${mod}:big_oak_planks${variant}`,
                Fluid.of("water", 250),
            ]
            
        )
    }

    wetPlanks('')
    wetPlanks('_variation')
    wetPlanks('_straight')
    wetPlanks('_cracked')
    wetPlanks('_broken')

    event.recipes.create.finalize();
})
