// requires : create

const bronze_oxydation_levels = [
    '',
    'exposed_',
    'weathered_',
    'oxidized_'
]
const iron_oxydation_levels = [
    '',
    'exposed_',
    'oxidized_'
]

const bronze_items = [
    '$I_block',
    'cut_$I',
    'cut_$I_stairs',
    'cut_$I_slab',
    '$I_pillar',
]

const iron_items = [
    'iron_plating',
    'cut_iron',
    'chiseled_iron',
    'cut_iron_stairs',
    'cut_iron_slab'
]

const golem_steel_items = [
    'block',
    'slab',
    'stairs',
    'tiles',
    'tile_slab',
    'tile_stairs',
    'grate',
    'pillar',
    'bars',
    'jet'
]

function fillingRecipe(event, ingredient, result, mod, metal) {
    event.recipes.createFilling(
        `${mod}:${result}`,
        [
            `${mod}:${ingredient}`,
            Fluid.of('minecraft:water', 250)
        ]
    ).id(`kubejs:oxidation/${metal}/${result}`);
}


ServerEvents.recipes(event => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);

    // Bronze Oxidation
    for(let index = 0; index < bronze_oxydation_levels.length - 1; index++) {
        bronze_items.forEach((item) => {
            let ingredient = item.replace('$I', bronze_oxydation_levels[index]+'bronze')
            let result = item.replace('$I', bronze_oxydation_levels[index + 1]+'bronze')
            fillingRecipe(event, ingredient, result, 'alloyed', 'bronze');
        });
    }

    // Iron Oxidation
    for(let index = 0; index < iron_oxydation_levels.length - 1; index++) {
        iron_items.forEach((item) => {
            let ingredient = `${iron_oxydation_levels[index]}${item}`
            let result = `${iron_oxydation_levels[index + 1]}${item}`
            fillingRecipe(event, ingredient, result,'spelunkers_palette', 'iron');
        });
    }

    // Golem Steel Oxidation
    golem_steel_items.forEach((item) => {
        let ingredient = `golem_steel_${item}`
        let result = `oxidized_golem_steel_${item}`
        fillingRecipe(event, ingredient, result,'eternal_starlight', 'golem_steel');
    });
    fillingRecipe(event,
        'chiseled_golem_steel_block',
        'oxidized_chiseled_golem_steel_block', 
        'eternal_starlight',
        'golem_steel'
        );


    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
});