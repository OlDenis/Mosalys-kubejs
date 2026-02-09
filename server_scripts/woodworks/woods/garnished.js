ServerEvents.recipes(event =>{
    // Garnished
    commonWoodRecipes(event, 'garnished:nut');
    way_sign(event, 'garnished', 'nut');
    commonWoodRecipes(event, 'garnished:sepia', 'stems');
    way_sign(event, 'garnished', 'sepia');

    // Garnished additions
    commonWoodRecipes(event, 'garnished_additions:ethereal', 'logs', true);
    way_sign(event, 'garnished_additions', 'ethereal', 'logs', true);
});