//priority: 5

// Utility functions
function pad(num, size) {
    var s = "000" + num;
    return s.substr(s.length - size);
}


// Decoratives paths and pavers

function decorativeRecipes(event, wood_type, logs) {
    if (logs === undefined) {
        logs = 'logs';
    }
    for ( let n = 1; n <= 6; n++) {
        let path_name = `planks_path_${pad(n, 2)}`;
        event.remove({id: `decorativespaths:${wood_type}_${path_name}`})
        let path = modBlockFactory('decorativepaths', path_name, 4, 1);
        path(event, `${wood_type}_${logs}`, `${wood_type}_planks`);
    }
    for ( let n = 1; n <= 10; n++) {
        let paver_name = `paver_${pad(n, 2)}`
        event.remove({id: `decorativepavers:${wood_type}_${paver_name}`})
        let paver = modBlockFactory('decorativepavers', paver_name , 4, 1);
        paver(event, `${wood_type}_${logs}`, `${wood_type}_planks`);
    }
}

ServerEvents.recipes(event => {
    // Convert mixed pavers recipe from stonecutting to sawmill
    let filter = { type: 'minecraft:stonecutting', mod: 'decorativepavers' }
    event.remove(filter);

    function mixedPavers(wood_a, wood_b, n) {
        n = pad(n, 2);
        event.shaped(
            Item.of(`decorativepavers:${wood_a}_and_${wood_b}_paver_${n}`, 4),
            [
                'AB',
                'BA'
            ],
            {
                'A': `decorativepavers:${wood_a}_paver_${n}`,
                'B': `decorativepavers:${wood_b}_paver_${n}`
            }
        )
    }

    mixedPavers('spruce', 'oak', 1)
    mixedPavers('oak', 'spruce', 2)
    mixedPavers('oak', 'spruce', 3)

    mixedPavers('jungle', 'oak', 1)
    mixedPavers('oak', 'jungle', 2)
    mixedPavers('oak', 'jungle', 3)

    mixedPavers('dark_oak', 'spruce', 1)
    mixedPavers('spruce', 'dark_oak', 2)
    mixedPavers('dark_oak', 'spruce', 3)
-
    mixedPavers('crimson', 'warped', 1);
    mixedPavers('warped', 'crimson', 2);
    mixedPavers('warped', 'crimson', 3);

    function fourPavers(a, b, c, d, i, o){
        i = pad(i, 2);
        o = pad(o, 2);
        event.shaped(
            Item.of(`decorativepavers:${a}_${b}_${c}_and_${d}_paver_${o}`, 4),
            [
                'AB',
                'CD'
            ],
            {
                'A': `decorativepavers:${a}_paver_${i}`,
                'B': `decorativepavers:${b}_paver_${i}`,
                'C': `decorativepavers:${c}_paver_${i}`,
                'D': `decorativepavers:${d}_paver_${i}`
            }
        )
    }

    fourPavers('dark_oak', 'crimson', 'mangrove', 'warped', 7, 1)
    fourPavers('oak', 'spruce', 'birch', 'jungle', 7, 2)
});