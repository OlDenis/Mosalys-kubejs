moss = 'kubejs:moss_clump';
// Cobbled variants
coatBlocks('minecraft:cobblestone', 'minecraft:mossy_cobblestone', moss)
coatBlocks( 'stoneworks:cobbled_andesite', 'stoneworks:mossy_cobbled_andesite', moss);
coatBlocks( 'stoneworks:cobbled_diorite', 'stoneworks:mossy_cobbled_diorite', moss);
coatBlocks( 'stoneworks:cobbled_granite', 'stoneworks:mossy_cobbled_granite', moss);
coatBlocks( 'stoneworks:cobbled_calcite', 'stoneworks:mossy_cobbled_calcite', moss);
coatBlocks( 'stoneworks:cobbled_tuff', 'stoneworks:mossy_cobbled_tuff', moss);
coatBlocks( 'stoneworks:cobbled_netherrack', 'stoneworks:mossy_cobbled_netherrack', moss);
coatBlocks( 'stoneworks:cobbled_blackstone', 'stoneworks:mossy_cobbled_blackstone', moss);
coatBlocks( 'stoneworks:cobbled_end_stone', 'stoneworks:mossy_cobbled_end_stone', moss);
coatBlocks( 'stoneworks:cobbled_purpur', 'stoneworks:mossy_cobbled_purpur', moss);
coatBlocks( 'stoneworks:cobbled_prismarine', 'stoneworks:mossy_cobbled_prismarine', moss);
coatBlocks( 'stoneworks:cobbled_dark_prismarine', 'stoneworks:mossy_cobbled_dark_prismarine', moss);
coatBlocks( 'stoneworks:cobbled_sandstone', 'stoneworks:mossy_cobbled_sandstone', moss);
coatBlocks( 'stoneworks:cobbled_red_sandstone', 'stoneworks:mossy_cobbled_red_sandstone', moss);
coatBlocks( 'stoneworks:cobbled_quartz', 'stoneworks:mossy_cobbled_quartz', moss);
coatBlocks( 'stoneworks:cobbled_basalt', 'stoneworks:mossy_cobbled_basalt', moss);
coatBlocks( 'minecraft:cobbled_deepslate', 'stoneworks:mossy_cobbled_deepslate', moss);

// Bricks variants
coatBlocks('minecraft:stone_bricks', 'minecraft:mossy_stone_bricks', moss)
coatBlocks('stoneworks:andesite_bricks', 'stoneworks:mossy_andesite_bricks', moss);
coatBlocks('stoneworks:diorite_bricks', 'stoneworks:mossy_diorite_bricks', moss);
coatBlocks('stoneworks:granite_bricks', 'stoneworks:mossy_granite_bricks', moss);
coatBlocks( 'stoneworks:calcite_bricks', 'stoneworks:mossy_calcite_bricks', moss);
coatBlocks( 'minecraft:tuff_bricks', 'stoneworks:mossy_tuff_bricks', moss);
coatBlocks( 'stoneworks:netherrack_bricks', 'stoneworks:mossy_netherrack_bricks', 'kubejs:crimson_spores');
coatBlocks( 'minecraft:polished_blackstone_bricks', 'stoneworks:mossy_blackstone_bricks', 'kubejs:warped_spores');
coatBlocks( 'minecraft:end_stone_bricks', 'stoneworks:mossy_end_stone_bricks', moss);
coatBlocks( 'stoneworks:purpur_bricks', 'stoneworks:mossy_purpur_bricks', moss);
coatBlocks( 'stoneworks:prismarine_bricks', 'stoneworks:mossy_prismarine_bricks', moss);
coatBlocks( 'stoneworks:dark_prismarine_bricks', 'stoneworks:mossy_dark_prismarine_bricks', moss);
coatBlocks( 'stoneworks:sandstone_bricks', 'stoneworks:mossy_sandstone_bricks', moss);
coatBlocks( 'stoneworks:red_sandstone_bricks', 'stoneworks:mossy_red_sandstone_bricks', moss);
coatBlocks('minecraft:quartz_bricks', 'stoneworks:mossy_quartz_bricks', moss);
coatBlocks( 'stoneworks:basalt_bricks', 'stoneworks:mossy_basalt_bricks', 'kubejs:warped_spores');
coatBlocks( 'minecraft:deepslate_bricks', 'stoneworks:mossy_deepslate_bricks', moss);

// Aether mossy holystone
coatBlocks( 'aether:holystone', 'aether:mossy_holystone', 'kubejs:aether_moss_clump');
coatBlocks('aether:holystone_bricks', 'deep_aether:mossy_holystone_bricks', 'kubejs:aether_moss_clump');
coatBlocks('deep_aether:holystone_tiles', 'deep_aether:mossy_holystone_tiles', 'kubejs:aether_moss_clump');

// Mossy oak from ribbits
for (let type of ['', '_stairs', '_slab', '_fence', '_fence_gate', '_door']) {
    coatBlock('minecraft:oak_planks' + type, 'ribbits:mossy_oak_planks' + type, moss);
}
// Regions Unexplored
coatBlocks('minecraft:stone', 'regions_unexplored:mossy_stone', moss);

// Single blocks
// Twilight Forest
coatBlock('twilightforest:etched_nagastone', 'twilightforest:mossy_etched_nagastone', moss);
coatBlock('twilightforest:nagastone_pillar', 'twilightforest:mossy_nagastone_pillar', moss);
coatBlock('twilightforest:nagastone_stairs_left', 'twilightforest:mossy_nagastone_stairs_left', moss);
coatBlock('twilightforest:nagastone_stairs_right', 'twilightforest:mossy_nagastone_stairs_right', moss);
coatBlock('twilightforest:mazestone', 'twilightforest:mossy_mazestone', moss);
coatBlock('twilightforest:underbrick', 'twilightforest:mossy_underbrick', moss);
coatBlock('twilightforest:towerwood', 'twilightforest:mossy_towerwood', moss);
coatBlock('twilightforest:castle_brick', 'twilightforest:mossy_castle_brick', moss);
coatBlock('twilightforest:castle_brick_stairs', 'twilightforest:mossy_castle_brick_stairs', moss);
// Born in Chaos
coatBlock('born_in_chaos_v1:black_argillite_brick', 'born_in_chaos_v1:mossy_black_argillite_brick', moss);
coatBlock('born_in_chaos_v1:black_argillite_brick_n', 'born_in_chaos_v1:mossy_black_argillite_brick_n', moss);
// Kubejs
coatBlock('minecraft:chiseled_stone_bricks', 'immersive_weathering:mossy_chiseled_stone_bricks', moss);
coatBlocks('minecraft:bricks', 'immersive_weathering:mossy_bricks', moss);