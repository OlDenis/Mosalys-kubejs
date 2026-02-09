// priority:5

// Twilight Forest wood items
const banister = modBlockFactory('twilightforest', 'banister', 12, 3);
function hollowed_log(event, mod, wood_type, log){
    if (log === undefined){log = 'log'}
    event.remove(`twilightforest:stonecutting/${wood_type}_${log}/hollow_${wood_type}_${log}`);
    registerSawingRecipes(event, `${mod}:${wood_type}_${log}`, `twilightforest:hollow_${wood_type}_${log}`, 1)
}