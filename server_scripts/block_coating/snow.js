// Snow
const snow = 'minecraft:snowball'
function snowedBlock(base_block, snowed_block) {
    coatBlock(base_block, snowed_block, snow, shovel)
}
function snowedBlocks(base_block, snowed_block) {
    coatBlocks(base_block, snowed_block, snow, shovel)
}
snowedBlocks('minecraft:cobblestone', 'immersive_weathering:snowy_cobblestone')
snowedBlocks('minecraft:stone', 'immersive_weathering:snowy_stone')
snowedBlocks('minecraft:stone_bricks', 'immersive_weathering:snowy_stone_bricks')
snowedBlock('minecraft:chiseled_stone_bricks', 'immersive_weathering:snowy_chiseled_stone_bricks')

snowedBlocks('immersive_weathering:snowy_cobblestone', 'dustydecorations:snowy_cobblestone')
snowedBlocks('immersive_weathering:snowy_stone_bricks', 'dustydecorations:snowy_stone_bricks')
