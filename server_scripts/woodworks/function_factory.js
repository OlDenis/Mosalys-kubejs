// priority: 10
// requires: woodworks

// Sawmill recipe generator
function sawmillRecipe(ingredient, result_id, result_amount, is_logs) {
    // Returns the correct dict for a sawmill recipe    
    // Use tag for log or stem as ingredient
    if (is_logs) {
        return {
            "type": "woodworks:sawmill",
            "ingredient": {
                "tag": ingredient
            },
            "result": {
                "count": result_amount,
                "id": result_id
            }
        }
    }
    // Use item for other ingredients
    else {
        return {
            "type": "woodworks:sawmill",
            "ingredient": {
                "item": ingredient
            },
            "result": {
                "count": result_amount,
                "id": result_id
            }
        }
    }
}


function registerCreateCuttingRecipe(event, ingredient, result_id, result_amount, is_logs) {
    addCreateRecipeHandler(event);
    if (is_logs) {
        event.recipes.create.cutting(
            Item.of(result_id, result_amount),
            '#' + ingredient
        ).id(`kubejs:create_cutting/${result_id.replace(':', '_')}_from_${ingredient.replace(':', '_').replace('/', '_')}`);
    }
    else {
        event.recipes.create.cutting(
            Item.of(result_id, result_amount),
            ingredient
        ).id(`kubejs:create_cutting/${result_id.replace(':', '_')}_from_${ingredient.replace(':', '_').replace('/', '_')}`);
    }
    event.recipes.create.finalize();
}

function registerSawmillRecipes(event, ingredient, result_id, result_amount, is_logs) {
    let r = sawmillRecipe(ingredient, result_id, result_amount, is_logs);
    event.custom(r).id(`kubejs:sawmill/${result_id.replace(':', '_')}_from_${ingredient.replace(':', '_').replace('/', '_')}`);
}

function registerSawingRecipes(event, ingredient, result_id, result_amount, is_logs) {
    registerCreateCuttingRecipe(event, ingredient, result_id, result_amount, is_logs);
    registerSawmillRecipes(event, ingredient, result_id, result_amount, is_logs);
}

// Factory function for creating block recipe functions
function blockFactory(name, n_l, n_p) {
    // n_l: number from logs, n_p: number from planks
    return (event, arg1, arg2, arg3) => {
        // Default block factory when only wood type is provided
        if (arg1 !== undefined && arg2 === undefined) {
            let wood_type = arg1;
            registerSawingRecipes(event, `${wood_type}_logs`, `${wood_type}_${name}`, n_l, true);
            if (n_p > 0) {
                registerSawingRecipes(event,`${wood_type}_planks`, `${wood_type}_${name}`, n_p, false);
            }
        }
        // General block factory when specific input and output are provided
        else {
            let input_logs = arg1;
            let input_planks = arg2;
            let output = arg3;
            if (output === undefined) { output = input_planks.replace('_planks', '_' + name); }
            registerSawingRecipes(event, input_logs, output, n_l, true);
            if (n_p > 0) {
                registerSawingRecipes(event, input_planks, output, n_p, false);
            }
        }
    }
}

// Vanilla items
const planks = blockFactory('planks', 4, 0);
const stairs = blockFactory('stairs', 4, 1);
const slab = blockFactory('slab', 8, 2);
const fence = blockFactory('fence', 4, 1);
const fence_gate = blockFactory('fence_gate', 4, 0);
const door = blockFactory('door', 2, 0);
const trapdoor = blockFactory('trapdoor', 2, 0);
const pressure_plate = blockFactory('pressure_plate', 2, 0);
const button = blockFactory('button', 4, 1);
const sign = blockFactory('sign', 2, 0);

// Mod blocks

function modBlockFactory(mod, name, n_l, n_p) {
    return (event, input_logs, input_planks, output) => {
        if (output === undefined) { 
            let wood_type = input_planks.replace('_planks', '');
            if (wood_type.includes(':')) {
                wood_type = wood_type.split(':')[1];
            }   
            output = `${mod}:${wood_type}_${name}`; 
        }
        registerSawingRecipes(event, input_logs, output, n_l, true);
        if (n_p > 0) {
            registerSawingRecipes(event, input_planks, output, n_p, false);
        }
    }
};

function way_sign(event, mod, wood_type, logs) {
    if (logs === undefined) {
        logs = 'logs';
    }
    registerSawingRecipes(event,`${mod}:${wood_type}_${logs}`, `supplementaries:${mod}/way_sign_${wood_type}`, 4, true);
    registerSawingRecipes(event,`${mod}:${wood_type}_planks`, `supplementaries:${mod}/way_sign_${wood_type}`, 1, false);
}

function way_sign_from_vanilla(event, wood_type) {
    registerSawingRecipes(event,`minecraft:${wood_type}_logs`, `supplementaries:way_sign_${wood_type}`, 4, true);
    registerSawingRecipes(event,`minecraft:${wood_type}_planks`, `supplementaries:way_sign_${wood_type}`, 1, false);
}



// Common recipes for all wood types
function commonWoodRecipes(event, wood_type, logs) {
    for ( let f of [
        planks,
        stairs,
        slab,
        fence,
        fence_gate,
        door,
        trapdoor,
        pressure_plate,
        button,
        sign
    ]){
        if (logs === undefined) { 
            f(event, wood_type);
        }
        else {
            f(event,`${wood_type}_${logs}`, `${wood_type}_planks`);
        }
    }
}
