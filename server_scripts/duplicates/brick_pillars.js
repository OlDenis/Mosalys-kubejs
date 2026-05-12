// requires: abyssal_decor

ServerEvents.recipes(event => {
    // Abyssal Decor Pillars (Brick pillar)
    const pillar_materials = {
        'white_pearl': ['block_of_pearl','white_pearl'],
        'blood_coral':['polished_blood_coral', 'blood_coral_bud'],
        'jade':['polished_jade','green_dye'],
        'seabrass':['seabrass_block', 'seabrass_ingot'],
        'deepbronze': ['deepbronze_block', 'deepbronze_ingot'],
        'lapis':['lapis_block', 'lapis_lazuli'],
        'black_pearl':['block_of_black_pearl', 'black_pearl'],
        'brick': ['bricks', 'brick'],
        'effervescent' : ['polished_effervescence', 'effervescence']
    }
    const pillar_minecraft = ['green_dye', 'lapis_lazuli', 'lapis_block', 'brick', 'bricks']

    for (const [material, ingredients] of Object.entries(pillar_materials)){
        // event.remove({output: `abyssal_decor:${material}_pillar`})
        let A = `abyssal_decor:${ingredients[1]}`;
        let B = `abyssal_decor:${ingredients[0]}`;
        if (pillar_minecraft.includes(ingredients[1])){
            A = `minecraft:${ingredients[1]}`;
        }
        if (pillar_minecraft.includes(ingredients[0])){
            B = `minecraft:${ingredients[0]}`;
        }
        
        event.recipes.stonecutting(`abyssal_decor:${material}_pillar`, B)
    }

    // Brick trapdoor recipe
    event.remove({output: 'abyssal_decor:brick_trapdoor'});
    event.shaped(
        Item.of('abyssal_decor:brick_trapdoor'),
        [
            'ABA',
            'ABA'
        ],
        {
            A: 'minecraft:bricks',
            B: 'minecraft:brick'
        }
    )

})