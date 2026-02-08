ServerEvents.recipes(event => {
    addCreateRecipeHandler(event);

    // Gilded Blackstone Scrap
    event.remove({ id: 'create:crushing/misc/scrap_gilded_blackstone'});

    // Blackstone clusters
    event.remove({ id: "regions_unexplored:blackstone_cluster" })
    event.remove({ id: "regions_unexplored:blackstone_from_blackstone_cluster" })

    event.shaped(
        'eternalnether:cobbled_blackstone',
        [
            'BB',
        ],
        {
            B: 'regions_unexplored:blackstone_cluster',
        }
    ).id('kubejs:cobbled_blackstone_from_cluster');

    event.stonecutting(
        Item.of('regions_unexplored:blackstone_cluster', 2),
        'eternalnether:cobbled_blackstone'
    ).id('kubejs:blackstone_cluster_from_cobbled_blackstone');

    // Blackstone processing
    event.recipes.create.crushing(
        withChance('eternalnether:cobbled_blackstone', 0.95),
        'minecraft:blackstone'
    ).id('kubejs:blackstone_crushing');

    event.recipes.create.crushing(
        [
            withChance('stoneworks:cobbled_blackstone', 0.50),
            'regions_unexplored:blackstone_cluster'
        ],
        'eternalnether:cobbled_blackstone'
    ).id('kubejs:cobbled_blackstone_crushing');

    event.remove({ id: 'create:haunting/blackstone' });
    event.recipes.create.haunting(
        'eternalnether:cobbled_blackstone',
        '#c:cobblestones'
    ).id('kubejs:cobbled_blackstone_haunting');
    
    event.recipes.create.finalize();
});

// Cobalt Nylium loot table
LootJS.modifiers(event => {
    event.addTableModifier("regions_unexplored:blocks/cobalt_nylium")
    .replaceLoot("minecraft:blackstone", "eternalnether:cobbled_blackstone", true)
});