// requires: would

// Add Would sapplings to the Sniffer's loot table

const sapling_types = [
    "willow",
    "baobab",
    "ebony",
    "fir",
    "pine",
    "cedar",
    "mahogany",
    // "palm",
    "maple",
    "aspen",
    "walnut",
    "blue_spruce"
]

LootJS.modifiers(event => {
    sapling_types.forEach(type => {
        event.addTableModifier("minecraft:gameplay/sniffer_digging")
            .addLoot(`would:${type}_sapling`).randomChance(0.025)
    })
})