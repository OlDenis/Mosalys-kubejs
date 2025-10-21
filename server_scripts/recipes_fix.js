// This script removes or alters recipes to fix conflicts or balance issues.

ServerEvents.recipes(event => {
  event.remove({id: 'spelunkers_palette:iron/iron_trapdoor'})
  event.remove({id: 'create:crushing/scrap_cobblestone_small'})


}
)