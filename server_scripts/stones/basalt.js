ServerEvents.recipes(event => {
    addCreateRecipeHandler(event);

    event.remove({ id: "create_more_additions:renewable_silver"})
    event.remove({ id: 'garnished:crushing/brittle_dust_from_basalt' });
    event.recipes.create.crushing(
        [
            withChance("garnished:brittle_dust", 0.85),
            withChance("garnished:brittle_dust", 0.45),
            withChance("create_more_additions:silver_nugget", 0.08),
        ],
        "#c:basalt"
    ).id("kubejs:renewable_silver_crushing");

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
});

ServerEvents.tags("item", event => {
    for (let item of ['', '_stairs', '_slab', '_wall']) {
        event.add('c:basalt', 'stoneworks:cobbled_basalt' + item);
        event.add('c:basalt', 'stoneworks:mossy_cobbled_basalt' + item);
    }
});