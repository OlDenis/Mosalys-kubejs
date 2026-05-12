//requires:simplyswords
//requires:samurai_dynasty

// Simply Swords materials
const ss_materials = [
    'iron',
    'gold',
    'diamond',
    'netherite',
    'runic'
];

ServerEvents.recipes(event => {
    // Simply Swords spears
    for (const material of ss_materials) {
        event.remove({ output: 'simplyswords:' + material + '_spear' });
    }

    // Simply swords sai
    for (const material of ['iron', 'gold', 'diamond']) {
        event.remove({ output: `simplyswords:${material}_sai` });
        let blade = "#c:gems/diamond";
        if (material !== "diamond") {
            blade = `#c:ingots/${material}`;
        }
        event.shaped(`simplyswords:${material}_sai`,
            [
                " A",
                "B "
            ],
            {
                "A": blade,
                "B": "samurai_dynasty:knive_handle"
            }
        );
    }

    for (const material of ["", "_netherite"]) {
        event.remove({ output: `samurai_dynasty:sai${material}` })
    }
});

// Remove item from EMI/JEI/REI
RecipeViewerEvents.removeEntries('item', event => {
    for (const material of ss_materials) {
        event.remove(`simplyswords:${material}_spear`)
    }
    for (const material of ["", "_netherite"]) {
        event.remove(`samurai_dynasty:sai${material}`)
    }
});