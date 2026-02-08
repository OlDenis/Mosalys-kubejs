// Fix for Create casings not accepting modded stripped wood types
function addStrippedWoodTag(event, wood) {
    event.add("c:stripped_logs", wood + "_log");
    event.add("c:stripped_woods", wood + "_wood");
}

const mod_woods = {
    "aether": [
        "skyroot",
    ], 
    "deep_aether": [
        "roseroot",
        "yagroot",
        "cruderoot",
        "conberry",
        "sunroot"
    ],
    "deeperdarker": [
        "echo",
        "bloom" // stems instead of logs
    ],
    "luminousworld": [
        "white_oak",
        "palm",
        "auburn",
        "baobab" // Cursed naming convention
    ],
    "moresnifferflowers": [
        "vivicus",
        "corrupted"
    ],
    "minecraft": [
        "pale_oak"
    ],
    "wetland_whimsy": [
        "bald_cypress"
    ],
    "would": [
        "willow",
        "baobab",
        "ebony",
        "fir",
        "pine",
        "cedar",
        "mahogany",
        "palm",
        "maple",
        "aspen",
        "walnut",
        "blue_spruce"
    ]
}
// Loop over all types of modded wood incompatible with create casings
function createCasingFix(event) {
    for (const [mod, woods] of Object.entries(mod_woods)) {
        for (const wood of woods) {
        addStrippedWoodTag(event, `${mod}:stripped_${wood}`);
        }
    }
    addStrippedWoodTag(event, `luminous_nether:stripped_withered`);
    // logs with special names
    event.add("c:stripped_logs", "luminous_nether:shredded_stem");
    event.add("c:stripped_logs", 'mynethersdelight:stripped_powdery_block');
}

// Create casing fix for blocks and items
ServerEvents.tags("block", event => {
    createCasingFix(event);
})
ServerEvents.tags("item", event => {
    createCasingFix(event);
})