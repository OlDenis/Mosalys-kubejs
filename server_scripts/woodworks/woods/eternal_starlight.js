ServerEvents.recipes(event =>{
    // Eternal Starlight
    for (let wood_type of [
        "cradlewood",
        "lunar",
        "northland",
        "starlight_mangrove",
        "scarlet",
        "torreya",
        "jinglestem"
    ]) {
        commonWoodRecipes(event, `eternal_starlight:${wood_type}`);
    }

});