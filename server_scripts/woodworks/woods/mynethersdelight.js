ServerEvents.recipes(event => {
    // My Nether's Delight
    registerSawmillRecipes(event, 'mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks', 3, true);
    stairs(event, 'mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks');
    slab(event, 'mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks');
    fence(event, 'mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks', 'mynethersdelight:powdery_fence');
    fence_gate(event, 'mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks', 'mynethersdelight:powdery_fence_gate');
    door(event, 'mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks');
    trapdoor(event, 'mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks', 'mynethersdelight:powdery_trapdoor');
    pressure_plate(event, 'mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks');
    button(event, 'mynethersdelight:block_of_powdery', 'mynethersdelight:powdery_planks');
    registerSawingRecipes(event, 'mynethersdelight:powdery_planks', 'mynethersdelight:powdery_mosaic', 1, false);
    registerSawingRecipes(event, 'mynethersdelight:powdery_mosaic', 'mynethersdelight:powdery_mosaic_stairs', 1, false);
    registerSawingRecipes(event, 'mynethersdelight:powdery_mosaic', 'mynethersdelight:powdery_mosaic_slab', 2, false);

});