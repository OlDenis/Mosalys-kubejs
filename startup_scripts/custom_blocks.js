StartupEvents.registry('block', event => {
    // General function to create a block set
    
    function createBlock(blockname, createFunc){
        createFunc(event.create(blockname))
            .fullBlock(true);
    }

    function createSet(blockname, createFunc){
        createBlock(blockname, createFunc)
        for (let type of ['stairs', 'slab', 'wall']) {
            blockname = blockname.replace('bricks', 'brick')
            createFunc(event.create(`${blockname}_${type}`, type))
                .waterlogged();
        }
    }

    // Block set attributes
    function dirt(block){
        block
            .soundType('gravel')
            .hardness(0.5)
            .resistance(0.5)
            .requiresTool(false)
            .tagBlock('minecraft:mineable/shovel')
        return block
    }

    function glass(block){
        block
            .soundType('glass')
            .hardness(0.3)
            .resistance(0.3)
            .requiresTool(false)
            .tagBlock('minecraft:mineable/pickaxe')
        return block
    }

    function cobblestone(block){
        block
            .soundType('stone')
            .hardness(2)
            .resistance(6)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        return block
    }

    function stone(block){
        block
            .soundType('stone')
            .hardness(1.5)
            .resistance(6)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        return block
    }

    function bricks(block){
        block
            .soundType('stone')
            .hardness(2)
            .resistance(6)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        return block
    }

    function endStone(block) {
        block
            .soundType('stone')
            .hardness(3)
            .resistance(9)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        return block
    }

    function prismarine(block) {
        block
            .soundType('stone')
            .hardness(1.5)
            .resistance(6)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        return block
    }

    function snow(block) {
        block
            .soundType('snow')
            .hardness(0.2)
            .resistance(0.2)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        return block
    }
    // Create immersive weathering blocks
    // Mossy
    createSet('immersive_weathering:mossy_bricks', bricks);
    createSet('immersive_weathering:cracked_bricks', bricks);
    createBlock('immersive_weathering:mossy_chiseled_stone_bricks', stone)
        
    // Cracked
    createSet('immersive_weathering:cracked_end_stone_bricks', endStone);
    createSet('immersive_weathering:cracked_prismarine_bricks', prismarine);

    // Sandy
    createSet('immersive_weathering:sandy_cobblestone', cobblestone);
    createSet('immersive_weathering:sandy_stone', cobblestone);
    createSet('immersive_weathering:sandy_stone_bricks', cobblestone);
    createBlock('immersive_weathering:sandy_chiseled_stone_bricks', stone);

    createSet('immersive_weathering:sandier_cobblestone', cobblestone);
    createSet('immersive_weathering:sandier_stone', cobblestone);
    createSet('immersive_weathering:sandier_stone_bricks', cobblestone);
    createBlock('immersive_weathering:sandier_chiseled_stone_bricks', stone);

    createBlock('immersive_weathering:sandy_dirt', dirt);
    createBlock('immersive_weathering:vitrified_sand', glass)

    // Snowy
    createSet('immersive_weathering:snowy_cobblestone', cobblestone);
    createSet('immersive_weathering:snowy_stone', stone);
    createSet('immersive_weathering:snowy_stone_bricks', stone);
    createSet('immersive_weathering:snow_bricks', snow)
    createBlock('immersive_weathering:snowy_chiseled_stone_bricks', stone);
    createBlock('immersive_weathering:snowy_dirt', dirt); // Needs a texture

    // Stone wall
    stone(event.create('minecraft:stone_wall', 'wall'))
});