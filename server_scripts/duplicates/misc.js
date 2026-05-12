// requires: cratedelight
// requires: create


// This script removes duplicate items and recipes from Not a Modpack

// New tags
ServerEvents.tags("item", event => {
    // Copycats
    for (const cat of ['block', 'slab', 'beam', 'vertical_step', 'stairs', 
        'fence', 'fence_gate', 'wall', 'board', 'box', 'catwalk']){
            event.add("kubejs:copycats", `create_connected:copycat_${cat}`)
        }
    // Dirts
    event.add('c:dusts/ash', 'luminous_nether:ashes');
    event.add('kubejs:dirt', 'minecraft:dirt');
    event.add('kubejs:dirt', 'aether:aether_dirt');
    event.add('kubejs:dirt', 'undergarden:deepsoil');
    event.add('kubejs:dirt', 'undergarden:deepsoil');
})

ServerEvents.recipes(event => {
    // Apple crates
    event.remove({output: "cratedelight:apple_crate"});
   
    // Vertical vaults
    event.remove({output:"create_connected:item_silo"})    

    // Chorium
    event.remove({output:'createcasing:chorium_ingot'})
})

// Remove item from EMI/JEI/REI
RecipeViewerEvents.removeEntries('item', event => {
    event.remove('cratedelight:apple_crate')
    // Remove smallships whith no textures
    const smallship_w_types = [
    'undergarden_ancient_root',
    'wormwood'
    ]
    
    for (const ship_type of ['cog', 'brigg', 'galley', 'drakkar']){
        for (const w_type of smallship_w_types){
            event.remove(`smallships:${w_type}_${ship_type}`)
        }
    }
    // Create connected copycats 
    event.remove('#kubejs:copycats')

    // Vertical vaults
    event.remove('create_connected:item_silo')

    // Chorium
    event.remove('createcasing:chorium_ingot')
})
