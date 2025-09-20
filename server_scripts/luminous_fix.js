// requires: luminousworld

ServerEvents.tags("block", event => {
    // Baobab blocks
    event.add("minecraft:wooden_stairs", "luminousworld:baobab_stairs")
    event.add("minecraft:wooden_slabs", "luminousworld:baobab_slab")
    event.add("minecraft:wooden_fences", "luminousworld:baobabfence")
    event.add("minecraft:wooden_fence_gates", "luminousworld:baobab_fence_gate")
    event.add("minecraft:wooden_doors", "luminousworld:baobab_door")
    event.add("minecraft:wooden_trapdoors", "luminousworld:baobabtrapdoor")
})

ServerEvents.recipes(event => {
    
    // Fix auburn planks recipe (should be stripped auburn logs instead of acacia logs)
    event.replaceInput(
        {input: 'minecraft:stripped_acacia_log', 
            output: 'luminousworld:autumnplank'},
        'minecraft:stripped_acacia_log',
        'luminousworld:stripped_auburn_log'
    )
})