ServerEvents.recipes(event =>{
    // Aether
    commonWoodRecipes(event, 'aether:skyroot');
    way_sign(event, 'aether', 'skyroot');

    // Deep Aether
    for (let wood_type of [
        "roseroot",
        "yagroot",
        "cruderoot",
        "sunroot",
        "conberry"
    ]) {
        commonWoodRecipes(event, `deep_aether:${wood_type}`);
        way_sign(event, 'deep_aether', wood_type);
    }

});