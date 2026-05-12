// Cracked blocks
function crackBlock(cracked_block, base_block, brick) {
    coatBlock(cracked_block, base_block, brick, 'pickaxe')
}
function crackBlocks(cracked_block, base_block, brick) {
    coatBlocks(cracked_block, base_block, brick, 'pickaxe')
}

crackBlock('minecraft:cracked_stone_bricks', 'minecraft:stone_bricks', 'immersive_weathering:stone_brick')
crackBlock('minecraft:infested_cracked_stone_bricks', 'minecraft:infested_stone_bricks', 'immersive_weathering:stone_brick')
crackBlock('minecraft:cracked_deepslate_bricks', 'minecraft:deepslate_bricks', 'immersive_weathering:deepslate_brick')
crackBlock('minecraft:cracked_deepslate_tiles', 'minecraft:deepslate_tiles', 'immersive_weathering:deepslate_tile')
crackBlock('minecraft:cracked_polished_blackstone_bricks', 'minecraft:polished_blackstone_bricks', 'immersive_weathering:blackstone_brick')
crackBlock('minecraft:cracked_nether_bricks', 'minecraft:nether_bricks', 'minecraft:nether_brick')
crackBlocks('immersive_weathering:cracked_bricks', 'minecraft:bricks', 'minecraft:brick')
crackBlocks('immersive_weathering:cracked_prismarine_bricks', 'minecraft:prismarine_bricks', 'immersive_weathering:prismarine_brick')
crackBlock('stoneworks:cracked_prismarine_bricks', 'stoneworks:prismarine_bricks', 'immersive_weathering:prismarine_brick')