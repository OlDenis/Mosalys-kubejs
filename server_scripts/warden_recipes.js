//requires: create_deep_dark
// requires: deeperdarker
// requires: create
// requires: garnished
// Add recipes for a new warden armor : reinforced echo armor
// Change recipes for warden tools to use reinforced echo ingot

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
     
  let armorPieces = [
    'helmet',
    'chestplate',
    'leggings',
    'boots'
  ];
  
  let tools = [
    'pickaxe',
    'axe',
    'shovel',
    'sword',
    'hoe'
  ];

  // Adding the Reinforced echo recipes
  for (let piece of armorPieces) {
    // Adding reinforced echo armor recipe
    event.smithing(
      'kubejs:reinforced_echo_' + piece,                  // arg 1: output
      'deeperdarker:warden_upgrade_smithing_template', // arg 2: the smithing template
      'create_deep_dark:echo_armor_' + piece,          // arg 3: the item to be upgraded
      'kubejs:reinforced_echo_ingot'             // arg 4: the upgrade item
    );
  }
  // Adding the Warden tools recipes  
  for (let tool of tools) {
    // Remove the Warden tools recipes
    event.remove({output: 'deeperdarker:warden_' + tool});
    // Changing Warden tools recipe
    event.smithing(
      'deeperdarker:warden_' + tool,                    // arg 1: output
      'deeperdarker:warden_upgrade_smithing_template',  // arg 2: the smithing template
      'minecraft:netherite_' + tool,                    // arg 3: the item to be upgraded
      'kubejs:reinforced_echo_ingot'                    // arg 4: the upgrade item
    )
  }
  // Adding Warden hatchet recipe from create : garnished
  event.remove({ output: 'garnished:warden_hatchet' });
    event.smithing(
      'garnished:warden_hatchet',                       // arg 1: output
      'deeperdarker:warden_upgrade_smithing_template',  // arg 2: the smithing template
      'garnished:netherite_hatchet',                      // arg 3: the item to be upgraded
      'kubejs:reinforced_echo_ingot'                    // arg 4: the upgrade item
    )
  
  // THIS LINE IS IMPORTANT!
  // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
  addCreateRecipeHandler(event);

  event.recipes
    .createSequencedAssembly(
      [
        // start the recipe
      "kubejs:reinforced_echo_ingot" // output
      ],
      "create_deep_dark:echo_ingot", // input
      [
        // the transitional item set by "transitionalItem('create:large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
        event.recipes.createDeploying("create_deep_dark:echo_ingot", [
          "create_deep_dark:echo_ingot",
          'minecraft:phantom_membrane',
        ]), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createFilling("create_deep_dark:echo_ingot", [
          "create_deep_dark:echo_ingot",
          Fluid.of("create_deep_dark:molten_echo")
        ]),
        event.recipes.createPressing("create_deep_dark:echo_ingot", [
          "create_deep_dark:echo_ingot"
        ]),
        event.recipes.createDeploying("create_deep_dark:echo_ingot", [
          "create_deep_dark:echo_ingot",
          'deeperdarker:warden_carapace',
        ])
      ]
    )
    .transitionalItem("create_deep_dark:echo_ingot")
    .loops(4); // set the transitional item and the loops (amount of repetitions)


  // THIS LINE IS ALSO IMPORTANT!
  // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
  event.recipes.create.finalize();

  // Adding reinforced echo block recipes
  event.shapeless(
    Item.of('kubejs:reinforced_echo_block'), // arg 1: output
    [
      '9x kubejs:reinforced_echo_ingot' // arg 2: the input items
    ]
  )
  event.shapeless(
    Item.of('kubejs:reinforced_echo_ingot', 9), // arg 1: output
    [
      'kubejs:reinforced_echo_block' // arg 2: the input items
    ]
  )
})
