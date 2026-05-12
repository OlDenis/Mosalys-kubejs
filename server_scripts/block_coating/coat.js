// Make coatable blocks uncoated

function shearCoat(bare_block, coated_block, coat_item, tool) {
    if (tool === undefined) tool = 'shears';
    BlockEvents.rightClicked(coated_block, event => {
        const { block, item, player } = event
        block.properties; // Store block properties
        if (item.id.includes(tool)) {
            // Remove the coat
            block.set(bare_block, block.properties)
            // And drop it as an item 
            block.popItemFromFace(coat_item, event.getFacing())
            // Damage the tool
            let currentdamage = item.getDamageValue();
            if (!player.isCreative()) {
                item.setDamageValue(currentdamage + 1); // Damage the tool by 1
            }
            player.swing() //makes the hand swing as if an item was used
        }
    });
}

function addCoat(bare_block, coated_block, coat_item) {
    BlockEvents.rightClicked(bare_block, event => {
        const { block, item, player } = event
        const properties = block.properties; // Store block properties
        if (item === coat_item) {
            if (item === 'immersive_weathering:sand') {
                properties.level = 0;
            }
            // Add the coat
            block.set(coated_block, properties)

            // Consume the coat item
            if (!player.isCreative() && coat_item != 'minecraft:snowball' && !coat_item.includes('brick')) {
                item.shrink(1);
            }
            if (coat_item == 'kubejs:warped_spores' || coat_item == 'crimson_spores') {
                event.cancel()
                player.give(coat_item, 1)
            } // flickers...
            player.swing() //makes the hand swing as if an item was used
        }
    });
}

function coatBlock(bare_block, coated_block, coat_item, tool) {
    shearCoat(bare_block, coated_block, coat_item, tool);
    addCoat(bare_block, coated_block, coat_item);
}

function coatBlocks(bare_block, coated_block, coat_item, tool) {
    for (let type of block_types) {
        if (type === '') {
            coatBlock(bare_block, coated_block, coat_item, tool);
        }
        else {
            bare_block = bare_block.replace('bricks', 'brick').replace('tiles', 'tile')
            coated_block = coated_block.replace('bricks', 'brick').replace('tiles', 'tile')
            coatBlock(bare_block + type, coated_block + type, coat_item, tool);
        }
    }
}
