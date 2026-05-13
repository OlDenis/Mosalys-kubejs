ServerEvents.recipes(event => {
    // Supplementaries sconce
    event.shaped(
        'supplementaries:sconce',
        [
            'NTN',
            'N N'
        ],
        {
            'N': 'create_ironworks:tin_nugget',
            'T': 'minecraft:torch'
        }
    );
    event.shaped(
        'supplementaries:sconce_soul',
        [
            'NTN',
            'N N'
        ],
        {
            N : 'create_ironworks:tin_nugget',
            T : 'minecraft:soul_torch'
        }
    );
    event.shapeless(
        'supplementaries:sconce_lever',
        [
            'supplementaries:sconce',
            'minecraft:redstone'
        ]
    );
})