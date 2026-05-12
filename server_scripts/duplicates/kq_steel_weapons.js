//requires:knightquest

ServerEvents.recipes(event => {
    // Knight Quest
    event.remove({ output: 'knightquest:steel_sword' })
    event.remove({ output: 'knightquest:steel_axe' })
    event.shaped(
        'knightquest:steel_sword',
        [
            ' A ', ' A ', ' B '
        ],
        {
            A: 'samurai_dynasty:steel_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        'knightquest:steel_axe',
        [
            'AA ',
            'AB ',
            ' B '
        ],
        {
            A: 'samurai_dynasty:steel_ingot',
            B: 'minecraft:stick'
        }
    )
});