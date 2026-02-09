function checkArmorSet(player, prefix) {
    return !player.armorSlots.some(a => 
        !a.id.startsWith(prefix)
    )
};

PlayerEvents.tick(event => {
    const { player } = event;

    // Fires event once a second
    if (!(player.tickCount % 25 === 0)) {
        return;
    }
    let prefix = "kubejs:reinforced_echo_";
    // Check if the player is wearing the full armor set
    if (checkArmorSet(player, prefix)) {
        // Apply regeneration potion effect
        let potion = event.player.potionEffects
        for (let effect of [
            'minecraft:strength',
            'minecraft:resistance'
            ]
        ) {
            potion.add(effect, 230, 1)
        }

    }
});