// requires: friendsandfoes
// requires: woodworks

ServerEvents.recipes(event => {
    // Beehives
    for (const wood of ['spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'crimson', 'warped']) {
        event.shapeless(
            `friendsandfoes:${wood}_beehive`,
            `woodworks:${wood}_beehive`
        )
        event.shapeless(
            `woodworks:${wood}_beehive`,
            `friendsandfoes:${wood}_beehive`
        )
        event.remove({ id: `friendsandfoes:${wood}_beehive` })
    }
})