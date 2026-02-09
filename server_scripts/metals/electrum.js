//requires: createaddition
//requires: create_more_additions

ServerEvents.recipes(event => {
    // Electrum recipes
    for (const mod_id of [
        'ars_nouveau',
        'magnumtorch',
        'ars_additions',
        'starbunclemania']){
            event.replaceInput(
                {
                    mod: mod_id,
                    input: 'minecraft:gold_ingot'
                }, 
                'minecraft:gold_ingot',
                'createaddition:electrum_ingot'
            );
        }

    event.replaceInput(
        { id: 'irons_spellbooks:artificer_cane' },
        'minecraft:gold_ingot',
        'createaddition:electrum_ingot'
    );
    for (const recipe_id of [
        'alshanex_familiars:familiar_tome',
        'irons_spellbooks:paladin_chestplate',
        'cataclysm:netherite_effigy',
        'undergarden:catalyst'
    ]){
        event.replaceInput(
            {id: recipe_id}, 
            'minecraft:gold_ingot',
          'createaddition:electrum_ingot'
        );
    }
    


    // Silver recipes
    event.remove({id: 'irons_spellbooks:magic_cloth'});
    event.shaped('irons_spellbooks:magic_cloth', 
        [
            'SAA',
            'SWA',
            'SAA'
        ], 
        {
            S : 'create_more_additions:silver_nugget',
            A : 'irons_spellbooks:arcane_essence',
            W : '#minecraft:wool'
        }
    );
    event.replaceInput(
        {id:'irons_spellbooks:alchemist_cauldron'},
        '#c:ingots/iron',
        'create_more_additions:silver_ingot'
    )

    // Armors
    for (const piece of ['helmet', 'chestplate', 'leggings', 'boots']){
        event.remove({id: `irons_spellbooks:electromancer_${piece}_crafting`});
        event.shapeless(`irons_spellbooks:electromancer_${piece}`, [
            `irons_spellbooks:wizard_${piece}`,
            'irons_spellbooks:lightning_rune',
            'irons_spellbooks:arcane_essence',
            'createaddition:electrum_ingot'
        ]);
        event.remove({id: `irons_spellbooks:cryomancer_${piece}_crafting`});
        event.shapeless(`irons_spellbooks:cryomancer_${piece}`, [
            `irons_spellbooks:wizard_${piece}`,
            'irons_spellbooks:ice_rune',
            'irons_spellbooks:arcane_essence',
            'create_more_additions:silver_ingot'
        ]);
        event.replaceInput(
            {id: `knightquest:silver_${piece}`}, 
            'minecraft:iron_block',
            'create_more_additions:silver_block'
        )
    }

    // Arcane ingot
    event.remove({id: 'irons_spellbooks:arcane_ingot'});
    event.shaped('irons_spellbooks:arcane_ingot',
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A : 'irons_spellbooks:arcane_essence',
            B : '#irons_spellbooks:arcane_ingot_base'
        }
    )
    event.remove({id: 'irons_spellbooks:filling/arcane_ingot'});
    addCreateRecipeHandler(event);
        event.recipes.create.filling(
            'irons_spellbooks:arcane_ingot', 
            [
                '#irons_spellbooks:arcane_ingot_base',
                Fluid.of('create_wizardry:mana', 1000)
            ],
        );
    event.recipes.create.finalize();
});    

ServerEvents.tags('item', tag => {
    tag.add('irons_spellbooks:arcane_ingot_base','alloyed:bronze_ingot');
    tag.add('irons_spellbooks:arcane_ingot_base','#c:ingots/electrum');
    tag.add('irons_spellbooks:arcane_ingot_base','#c:ingots/silver');
    tag.remove('irons_spellbooks:arcane_ingot_base','#c:ingots/iron');
    tag.remove('irons_spellbooks:arcane_ingot_base','#c:ingots/copper');
});