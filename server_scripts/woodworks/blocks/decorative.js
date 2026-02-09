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