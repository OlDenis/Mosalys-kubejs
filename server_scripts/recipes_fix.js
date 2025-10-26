// This script removes or alters recipes to fix conflicts or balance issues.

ServerEvents.recipes(event => {
  event.remove({id: 'spelunkers_palette:iron/iron_trapdoor'})
  event.remove({id: 'create:crushing/scrap_cobblestone_small'})
  
  event.shapeless(
    'create_compressed:crushed_tin_pile',
    '9x create_ironworks:crushed_raw_tin'
  ) 
  event.shapeless(
    '9x create_ironworks:crushed_raw_tin',
    'create_compressed:crushed_tin_pile'
  ) 
  event.remove({id: 'create_compressed:crushed_raw_tin'})
  
}
)