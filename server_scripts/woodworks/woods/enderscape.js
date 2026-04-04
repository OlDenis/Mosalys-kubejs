ServerEvents.recipes(event => {
   // Enderscape
    commonWoodRecipes(event, `enderscape:veiled`);
    way_sign(event, 'enderscape', 'veiled');

   for (let wood_type of [
        "celestial",
        "murublight"
    ]) {
        commonWoodRecipes(event, `enderscape:${wood_type}`, 'stems');
        way_sign(event, 'enderscape', wood_type, 'stems');
    }
});