ServerEvents.recipes(event => {
    function spelunkerSmelting(stone) {
        event.smelting(
            `minecraft:${stone}`,
            `spelunkerspalette:cobbled_${stone}`
        );
    }
    
    spelunkerSmelting('tuff');
    spelunkerSmelting('calcite');

    event.smelting(
        'minecraft:dripstone_block',
        'spelunkerspalette:cobbled_dripstone'
    )
});