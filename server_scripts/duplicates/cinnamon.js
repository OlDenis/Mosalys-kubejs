//requires: expandeddelight
//requires: abyssal_decor

ServerEvents.recipes(event => {
// Cinamon
    event.replaceInput({input:"abyssal_decor:cinnamon_stick", not:{output:"abyssal_decor:cinnamon_shingles"}},
        "abyssal_decor:cinnamon_stick",
        "expandeddelight:cinnamon"
    )
    event.remove({output: "expandeddelight:cinnamon"})
    event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
                {
                    "tag": "kubejs:cinnamon_stick"
                }
            ],
            "result": [
                {
                    "item": {
                        "count": 2,
                        "id": "expandeddelight:cinnamon"
                    }
                },
                {
                    "chance": 0.15,
                    "item": {
                        "count": 1,
                        "id": "expandeddelight:cinnamon"
                    }
                }
            ],
            "tool": {
                "tag": "expandeddelight:crushing_tools"
            }
          }
    )
    event.shapeless("expandeddelight:cinnamon_stick", "abyssal_decor:cinnamon_stick");
    event.shapeless("abyssal_decor:cinnamon_stick", "expandeddelight:cinnamon_stick");
});

ServerEvents.tags("item", event => {
    // Cinnamon
    event.add("kubejs:cinnamon_stick", "abyssal_decor:cinnamon_stick");
    event.add("kubejs:cinnamon_stick", "expandeddelight:cinnamon_stick");
})