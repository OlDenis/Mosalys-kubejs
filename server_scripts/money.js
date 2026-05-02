ServerEvents.recipes(event => {
    // Bevels
    event.shapeless(
        Item.of('numismatics:spur', 8),
        'numismatics:bevel'
    )
    event.shapeless(
        'numismatics:bevel',
        Item.of('numismatics:spur', 8)
    )
    // Sprockets
    event.shapeless(
        'numismatics:sprocket',
        Item.of('numismatics:bevel', 2)
    )
    event.shapeless(
        Item.of('numismatics:spur', 16),
        'numismatics:sprocket'
    )
    // Cogs
    event.shapeless(
        Item.of('numismatics:sprocket', 4),
        'numismatics:cog'
    )
    event.shapeless(
        Item.of('numismatics:bevel', 8),
        'numismatics:cog'
    )
    event.shapeless(
        'numismatics:cog',
        Item.of('numismatics:bevel', 8)
    )
    // Crowns
    event.shapeless(
        Item.of('numismatics:cog', 8),
        'numismatics:crown'
    )
    event.shapeless(
        'numismatics:crown',
        Item.of('numismatics:cog', 8)
    )
    // Suns
    event.shapeless(
        Item.of('numismatics:crown', 8),
        'numismatics:sun'
    )
    event.shapeless(
        'numismatics:sun',
        Item.of('numismatics:crown', 8)
    )


});