const stone_types = [
    'andesite',
    'diorite',
    'granite',
    'calcite',
    'tuff',
    'netherrack',
    'blackstone',
    'end_stone',
    'purpur',
    'prismarine',
    'dark_prismarine',
    'sandstone',
    'red_sandstone',
    'quartz',
    'basalt',
    'deepslate'
];

const block_types = ['', '_stairs', '_slab', '_wall']

function shearMoss(mossyStone, tool, tool_sound){
    if (tool === undefined){
        tool = 'shears';
    }
    if (tool_sound === undefined){
        tool_sound = 'entity.sheep.shear'
    }
    BlockEvents.rightClicked(mossyStone, event => {
        if(event.item.id.includes(tool)){
            event.player.playSound(tool_sound, 1.0, 1.0);
        }
    });
}
function addMoss(baseStone, mossItem, sound ){
    if (sound === undefined){
        sound='block.moss.place'
    }
    BlockEvents.rightClicked(baseStone, event => {
        if(event.item == mossItem){
            event.player.playSound(sound, 1.0, 1.0);
        }
    });
}

function coatBlock(baseStone, mossyStone, mossItem, coat_sound, tool, tool_sound){
    shearMoss(mossyStone, tool, tool_sound);
    addMoss(baseStone, mossItem, coat_sound);
}

function coatBlocks(bare_block, mossy_block, moss_item, coat_sound, tool, tool_sound) {
    for (let type of block_types) {
        if (type === '') {
            coatBlock(bare_block, mossy_block, moss_item, coat_sound, tool, tool_sound);
        }
        else {
            bare_block = bare_block.replace('bricks', 'brick').replace('tiles', 'tile')
            mossy_block = mossy_block.replace('bricks', 'brick').replace('tiles', 'tile')
            coatBlock(bare_block + type, mossy_block + type, moss_item, coat_sound, tool, tool_sound);
        }
    }
}

const moss = 'kubejs:moss_clump'
// Cobbled variants
coatBlocks('minecraft:stone', 'regions_unexplored:mossy_stone', moss);
coatBlocks('minecraft:cobblestone', 'minecraft:mossy_cobblestone', moss);
coatBlocks('minecraft:andesite', 'stoneworks:mossy_cobbled_andesite', moss);
coatBlocks('minecraft:diorite', 'stoneworks:mossy_cobbled_diorite', moss);
coatBlocks('minecraft:granite', 'stoneworks:mossy_cobbled_granite', moss);
coatBlocks('minecraft:calcite', 'stoneworks:mossy_cobbled_calcite', moss);
coatBlocks('minecraft:tuff', 'stoneworks:mossy_cobbled_tuff', moss);
coatBlocks('minecraft:netherrack', 'stoneworks:mossy_cobbled_netherrack', moss);
coatBlocks('stoneworks:cobbled_blackstone', 'stoneworks:mossy_cobbled_blackstone', moss);
coatBlocks('minecraft:end_stone', 'stoneworks:mossy_cobbled_end_stone', moss);
coatBlocks('minecraft:purpur_block', 'stoneworks:mossy_cobbled_purpur', moss);
coatBlocks('minecraft:prismarine', 'stoneworks:mossy_cobbled_prismarine', moss);
coatBlocks('minecraft:dark_prismarine', 'stoneworks:mossy_cobbled_dark_prismarine', moss);
coatBlocks('minecraft:sandstone', 'stoneworks:mossy_cobbled_sandstone', moss);
coatBlocks('minecraft:red_sandstone', 'stoneworks:mossy_cobbled_red_sandstone', moss);
coatBlocks('minecraft:quartz', 'stoneworks:mossy_cobbled_quartz', moss);
coatBlocks('minecraft:basalt', 'stoneworks:mossy_cobbled_basalt', moss);
coatBlocks('minecraft:cobbled_deepslate', 'stoneworks:mossy_cobbled_deepslate', moss);

// Bricks variants
coatBlocks('minecraft:stone_bricks', 'minecraft:mossy_stone_bricks', moss);
coatBlocks('stoneworks:andesite_bricks', 'stoneworks:mossy_andesite_bricks', moss);
coatBlocks('stoneworks:diorite_bricks', 'stoneworks:mossy_diorite_bricks', moss);
coatBlocks('stoneworks:granite_bricks', 'stoneworks:mossy_granite_bricks', moss);
coatBlocks('stoneworks:calcite_bricks', 'stoneworks:mossy_calcite_bricks', moss);
coatBlocks('minecraft:tuff_bricks', 'stoneworks:mossy_tuff_bricks', moss);
coatBlocks('stoneworks:netherrack_bricks', 'stoneworks:mossy_netherrack_bricks', 'kubejs:crimson_spores');
coatBlocks('minecraft:polished_blackstone_bricks', 'stoneworks:mossy_blackstone_bricks', 'kubejs_warped_spores');
coatBlocks('minecraft:end_stone_bricks', 'stoneworks:mossy_end_stone_bricks', moss);
coatBlocks('stoneworks:purpur_bricks', 'stoneworks:mossy_purpur_bricks', moss);
coatBlocks('minecraft:prismarine_bricks', 'stoneworks:mossy_prismarine_bricks', moss);
coatBlocks('stoneworks:dark_prismarine_bricks', 'stoneworks:mossy_dark_prismarine_bricks', moss);
coatBlocks('stoneworks:sandstone_bricks', 'stoneworks:mossy_sandstone_bricks', moss);
coatBlocks('stoneworks:red_sandstone_bricks', 'stoneworks:mossy_red_sandstone_bricks', moss);
coatBlocks('minecraft:quartz_bricks', 'stoneworks:mossy_quartz_bricks', moss);
coatBlocks('stoneworks:basalt_bricks', 'stoneworks:mossy_basalt_bricks', 'minecraft:twisting_vines');
coatBlocks('minecraft:deepslate_bricks', 'stoneworks:mossy_deepslate_bricks', moss);

// Aether mossy holystone
coatBlocks('aether:holystone', 'aether:mossy_holystone', 'aether_moss_clump');
coatBlocks('aether:holystone_bricks', 'deep_aether:mossy_holystone_bricks', 'aether_moss_clump');
coatBlocks('deep_aether:holystone_tiles', 'deep_aether:mossy_holystone_tiles', 'aether_moss_clump');

// Immersive weathering
coatBlocks('minecraft:bricks','immersive_weathering:mossy_bricks',moss)

// Mossy oak from ribbits
for (let type of ['', '_stairs', '_slab', '_fence', '_fence_gate', '_door']) {
    coatBlock('minecraft:oak_planks' + type, 'ribbits:mossy_oak_planks' + type, moss);
}
'minecraft:dark_oak_stairs'
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
// Regions Unexplored
coatBlock('minecraft:stone', 'regions_unexplored:mossy_stone', moss);
// Immersive weathering
coatBlock('minecraft:chiseled_stone_bricks', 'immersive_weathering:mossy_chiseled_stone_bricks', moss)

// Kelpy blocks
const kelp = "minecraft:kelp"
const kelp_sound = 'block.wet_grass.place'
coatBlocks('minecraft:cobblestone', 'upgrade_aquatic:kelpy_cobblestone', kelp, kelp_sound)
coatBlocks('minecraft:stone_bricks', 'upgrade_aquatic:kelpy_stone_bricks', kelp, kelp_sound)

// Sand
const sand = 'immersive_weathering:sand';
const sand_sound = 'block'
// const sandParams = [sand, sand_sound,'shovel', 'block.sand.break'] // Spread operator doesn't work...
coatBlocks('minecraft:cobblestone', 'immersive_weathering:sandy_cobblestone', sand, sand_sound,'shovel', 'block.sand.break')
coatBlocks('minecraft:stone', 'immersive_weathering:sandy_stone', sand, sand_sound,'shovel', 'block.sand.break')
coatBlocks('minecraft:stone_bricks', 'immersive_weathering:sandy_stone_bricks', sand, sand_sound,'shovel', 'block.sand.break')
coatBlock('minecraft:chiseled_stone_bricks', 'immersive_weathering:sandy_chiseled_stone_bricks', sand, sand_sound,'shovel', 'block.sand.break')
coatBlocks('immersive_weathering:sandy_cobblestone', 'immersive_weathering:sandier_cobblestone', sand, sand_sound,'shovel', 'block.sand.break')
coatBlocks('immersive_weathering:sandy_stone', 'immersive_weathering:sandier_stone', sand, sand_sound,'shovel', 'block.sand.break')
coatBlocks('immersive_weathering:sandy_stone_bricks', 'immersive_weathering:sandier_stone_bricks', sand, sand_sound,'shovel', 'block.sand.break')
coatBlock('immersive_weathering:sandy_chiseled_stone_bricks', 'immersive_weathering:sandier_chiseled_stone_bricks', sand, sand_sound,'shovel', 'block.sand.break')
coatBlock('minecraft:dirt', 'immersive_weathering:sandy_dirt', sand, sand_sound,'shovel', 'block.sand.break')

// Snow
const snow = 'minecraft:snowball'
const snow_sound = 'block.snow.place'
// const snowParams = [snow, snow_sound, 'shovel', 'block.snow.break']
coatBlocks(
    'minecraft:cobblestone',
     'immersive_weathering:snowy_cobblestone',
     snow, snow_sound, 'shovel', 'block.snow.break'
    )
coatBlocks(
    'minecraft:stone', 
    'immersive_weathering:snowy_stone', 
    snow, snow_sound, 'shovel', 'block.snow.break'
)
coatBlocks(
    'minecraft:stone_bricks', 
    'immersive_weathering:snowy_stone_bricks', 
    snow, snow_sound, 'shovel', 'block.snow.break'
)
coatBlock(
    'minecraft:chiseled_stone_bricks', 'immersive_weathering:snowy_chiseled_stone_bricks',
     snow, snow_sound, 'shovel', 'block.snow.break'
    )
coatBlocks(
    'immersive_weathering:snowy_cobblestone', 'dustydecorations:snowy_cobblestone',
    snow, snow_sound, 'shovel', 'block.snow.break'
)
coatBlocks(
    'immersive_weathering:snowy_stone_bricks', 'dustydecorations:snowy_stone_bricks',
    snow, snow_sound, 'shovel', 'block.snow.break'
)

'rechiseled:prismarine_bricks_brick_pattern_slab_connecting'
// Cracked blocks
coatBlock(
    'minecraft:cracked_stone_bricks', 
    'minecraft:stone_bricks',
     'immersive_weathering:stone_brick',
      'block.stone.placed', 
      'pickaxe',
      'block.stone.break'
    )
coatBlock(
    'minecraft:cracked_deepslate_bricks',
    'minecraft:deepslate_bricks',
    'immersive_weathering:deepslate_brick',
    'block.deepslate_bricks.place',
    'pickaxe',
    'block.deepslate_bricks.break'
)
coatBlock(
    'minecraft:cracked_deepslate_tiles', 
    'minecraft:deepslate_tiles', 
    'immersive_weathering:deepslate_tile', 
    'block.deepslate_tiles.place',
    'pickaxe',
    'block.deepslate_tiles.break'
)
coatBlock(
    'minecraft:cracked_polished_blackstone_bricks', 
    'minecraft:polished_blackstone_bricks', 
    'immersive_weathering:blackstone_brick', 
    'block.blackstone_bricks.place',
    'pickaxe',
    'block.blackstone_bricks.break'
)
coatBlock(
    'minecraft:cracked_nether_bricks', 
    'minecraft:nether_bricks', 
    'minecraft:nether_brick', 
    'block.nether_bricks.place',
    'pickaxe',
    'block.nether_bricks.break'
)
coatBlock(
    'immersive_weathering:cracked_bricks',
    'minecraft:bricks',
    'minecraft:brick', 
    'block.bricks.place',
    'pickaxe',
    'block.bricks.break'
)
coatBlocks(
    'immersive_weathering:cracked_prismarine_bricks', 'minecraft:prismarine_bricks',
    'immersive_weathering:prismarine_brick', 
    'block.prismarine_bricks.place',
    'pickaxe',
    'block.prismarine_bricks.break'
)
coatBlock(
    'stoneworks:cracked_prismarine_bricks', 
    'stoneworks:prismarine_bricks',
    'immersive_weathering:prismarine_brick', 
    'block.prismarine_bricks.place',
    'pickaxe',
    'block.prismarine_bricks.break'
)

