// Salt items
const salt_bag = 'cratedelight:salt_bag';
const salt = 'expandeddelight:salt';
const salt_rock = 'expandeddelight:salt_rock';
const salt_ore = 'c:ores/salt';
const salt_compound = 'garnished:salt_compound';
const crushed_salt = 'garnished:crushed_salt';

ServerEvents.recipes(event => {
    addCreateRecipeHandler(event);   

    // Salt recipes
        event.remove({output: salt_rock});
        event.recipes.create.milling(
            [
                salt_rock,
                withChance(salt, 0.18, 3),
                withChance("create:experience_nugget", 0.05)
            ],
            {tag: salt_ore}
        );
        event.recipes.create.milling(
            [
                Item.of(salt, 2),
                withChance(salt, 0.15)
            ],
            salt_rock
        );
        event.recipes.create.milling(
            [
                Item.of(salt, 2),
                withChance(salt, 0.1)
            ],
            crushed_salt
        );
        event.remove({id: "sliceanddice:cooking/createfood/farmersdelight/cooking/salt_from_cooking_0"})
        event.recipes.farmersdelight.cutting(
            salt_rock,
            'expandeddelight:crushing_mallet',
            [
                Item.of(salt, 2),
                ChanceResult.of(salt, 0.15)
            ]
        )
        event.remove({id: "expandeddelight:cutting/salt_rock"})

    event.recipes.create.finalize();
    });