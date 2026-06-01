ServerEvents.tags('item', event =>{
    event.add('kubejs:crab', 'crabbersdelight:crab')
    event.add('kubejs:crab', 'crabbersdelight:clawster')
    event.add('kubejs:crab', 'crabbersdelight:crab')
    event.add('kubejs:crab', 'wetland_whimsy:crawfish')

    event.add('kubejs:shell_like', 'crabbersdelight:crab_claw')
    event.add('kubejs:shell_like', 'crabbersdelight:clam')
    event.add('kubejs:shell_like', 'crabbersdelight:coral_fragments')
    event.add('kubejs:shell_like', 'friendsandfoes:crab_claw')
    event.add('kubejs:shell_like', 'minecraft:nautilus_shell')
    event.add('kubejs:shell_like', 'crabbersdelight:seashells')

    event.add('kubejs:fish_bones', 'crabbersdelight:fish_bones')
    event.add('kubejs:fish_bones', 'tide:fish_bones')
    event.add('kubejs:fish_bones', 'dustydecorations:fish_bones')
    // event.add('kubejs:fish_bones', 'netherdepthsupgrade:bonefish')
})


ServerEvents.recipes(event => {
    addCreateRecipeHandler(event);
    event.shaped(
        Item.of('dustydecorations:seastone', 4),
        [
            'AA',
            'AA'
        ],
        {
            'A': 'dusty_tweak:sediments'
        }
    ).id('seastone')

    event.recipes.create.crushing(
        [
            Item.of('dusty_tweak:chitin_powder', 5),
            withChance('dusty_tweak:chitin_powder', 0.75)
        ],
        '#kubejs:crab'
    ).id('chitin_from_crabs')
    event.recipes.create.crushing(
        [
            Item.of('dusty_tweak:chitin_powder', 2),
            withChance('dusty_tweak:chitin_powder', 0.5)
        ],
        '#kubejs:shell_like'
    ).id('chitin_from_shells')
    event.recipes.create.crushing(
        [
            'dusty_tweak:chitin_powder',
            withChance('dusty_tweak:chitin_powder', 0.25)
        ],
        'crabbersdelight:shrimp'
    ).id('chitin_from_shrimp')
    event.recipes.create.crushing(
        [
            'dusty_tweak:chitin_powder',
        ],
        '#kubejs:fish_bones'
    ).id('chitin_from_fish_bones')

    event.recipes.create.compacting(
        Item.of('dusty_tweak:sediments', 4),
        [
            'minecraft:gravel',
            'minecraft:gravel',
            'dusty_tweak:chitin_powder',
            'dusty_tweak:chitin_powder',
            'dusty_tweak:chitin_powder',
            'minecraft:kelp'
        ]
    ).id('sediments')

    event.recipes.create.finalize();
})