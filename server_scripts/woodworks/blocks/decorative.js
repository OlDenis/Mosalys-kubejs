//priority: 5

// Utility functions
function pad(num, size) {
    var s = "000" + num;
    return s.substr(s.length - size);
}


// Decoratives paths and pavers

function decorativeRecipes(event, wood_type) {
    for ( let n = 1; n <= 6; n++) {
        let path = modBlockFactory('decorativepaths', `planks_path_${pad(n, 2)}`, 4, 1);
        path(event, `${wood_type}_logs`, `${wood_type}_planks`, );
    }
    for ( let n = 1; n <= 10; n++) {
        let paver = modBlockFactory('decorativepavers', `paver_${pad(n, 2)}`, 4, 1);
        paver(event, `${wood_type}_logs`, `${wood_type}_planks`);
    }
}