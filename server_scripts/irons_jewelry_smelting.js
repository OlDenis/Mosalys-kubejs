//requires irons_jewelry

ServerEvents.recipes((event) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);

    event.recipes.createMixing(
        Fluid.of("create_wizardry:mana", 1000),
        '#curios:ring'
    ).superheated();
    event.recipes.createMixing(
        Fluid.of("create_wizardry:mana", 1000),
        '#curios:necklace'
    ).superheated();

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
});