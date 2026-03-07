ServerEvents.recipes(event => {
    function money(baseCoin, lowerCoin, higherCoin) {
        // Convert 8 lower coins to 1 base coin
        if (lowerCoin) {
            event.shapeless(
                baseCoin,
                Item.of(lowerCoin, 8)
            )
        }
        if (higherCoin) {
            // Convert 1 higher coin to 8 base coins
            event.shapeless(
                Item.of(baseCoin, 8),
                higherCoin
            )
        }
    }

    // Coins
    const coins = [
        'spur',
        'bevel',
        'sprocket',
        'cog',
        'crown',
        'sun'
    ]

    // Money recipes
    let mod = 'numismatics'
    for(let i = 0; i < coins.length; i++) {
        let baseCoin = `numismatics:${coins[i]}`
        let lowerCoin = i > 0 ? `numismatics:${coins[i - 1]}` : null
        let higherCoin = i < coins.length - 1 ? `numismatics:${coins[i + 1]}` : null
        money(baseCoin, lowerCoin, higherCoin)
    }
});