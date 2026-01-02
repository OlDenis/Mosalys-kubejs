// This script reworks the tuff crushing recipes

ServerEvents.tags("item", event => {
    event.add('kubejs:cobbled_tuff', 'stoneworks:cobbled_tuff');
    event.add('kubejs:cobbled_tuff', 'stoneworks:cobbled_tuff_stairs');
    event.add('kubejs:cobbled_tuff', 'stoneworks:cobbled_tuff_slab');
    event.add('kubejs:cobbled_tuff', 'stoneworks:cobbled_tuff_wall');
    event.add('kubejs:cobbled_tuff', 'stoneworks:mossy_cobbled_tuff');
    event.add('kubejs:cobbled_tuff', 'stoneworks:mossy_cobbled_tuff_stairs');
    event.add('kubejs:cobbled_tuff', 'stoneworks:mossy_cobbled_tuff_slab');
    event.add('kubejs:cobbled_tuff', 'stoneworks:mossy_cobbled_tuff_wall');
});

ServerEvents.recipes(event => {
    addCreateRecipeHandler(event);   

    event.remove({ id: 'create:crushing/tuff' });
    event.remove({ id: 'create:crushing/tuff_recycling' });
    event.remove({ id: 'createaddition:crushing/tuff_recycling' });

    const p1 = 0.10;
    const p2 = 0.05;
    event.recipes.create.crushing(
        [
            withChance('create_ironworks:tin_nugget', p1),
            withChance('minecraft:iron_nugget', p1),
            withChance('create:copper_nugget', p1),
            withChance('create:zinc_nugget', p1),
            withChance('minecraft:gold_nugget', p2),
            withChance('create_more_additions:silver_nugget', p2),
        ],
        '#kubejs:cobbled_tuff'
    ).id('kubejs:tuff_nugget_crushing');

    event.recipes.create.crushing(
        withChance('stoneworks:cobbled_tuff', 0.85),
        '#create:stone_types/tuff'
    ).id('kubejs:tuff_crushing');

    event.recipes.create.finalize();
});