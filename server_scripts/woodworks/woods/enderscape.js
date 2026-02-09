ServerEvents.recipes(event => {
   // Enderscape
   for (let wood_type of [
        "veiled",
        "celestial",
        "murublight"
    ]) {
        commonWoodRecipes(event, `enderscape:${wood_type}`);
        way_sign(event, 'enderscape', wood_type);
    }
});