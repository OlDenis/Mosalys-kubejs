function createCasingFix(event, wood) {
    event.add("c:stripped_logs", wood + "_log");
    event.add("c:stripped_woods", wood + "_wood");
}

ServerEvents.tags("block", event => {
    createCasingFix(event, "vanillabackports:stripped_pale_oak");
    for (let wood of [
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
    ]){
        createCasingFix(event, `would:stripped_${wood}`);
    }
    
})