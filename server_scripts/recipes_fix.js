// This script removes or alters recipes to fix conflicts or balance issues.

ServerEvents.recipes(event => {
  event.remove({id: 'spelunkers_palette:iron/iron_trapdoor'})
  event.remove({id: 'create:crushing/scrap_cobblestone_small'})
  event.remove({id: 'garnished_additions:mixing/chromatic_compound'})
  event.remove({id: 'create_more_additions:totem1'})
  event.remove({id: 'create_more_additions:totem2'})
});