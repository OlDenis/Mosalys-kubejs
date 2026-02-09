ServerEvents.tags('item', event => {
    // Luminous nether logs
    event.add("luminous_nether:withered_logs", "luminous_nether:withered_log")
    event.add("luminous_nether:withered_logs", "luminous_nether:stripped_withered_log")
    event.add("luminous_nether:mushroom_logs", "luminous_nether:goldenstem")
    event.add("luminous_nether:mushroom_logs", "luminous_nether:shredded_stem")

    // Luminousworld logs
    event.add("luminousworld:baobab_logs", "luminousworld:bao_bob_log")
    event.add("luminousworld:baobab_logs", "luminousworld:stripped_baobab_log")
    event.add("luminousworld:baobab_logs", "luminousworld:bao_bob_wood")
    event.add("luminousworld:baobab_logs", "luminousworld:stripped_baobab_wood")

    event.add("luminousworld:white_oak_logs", "luminousworld:whiteoaklog")
    event.add("luminousworld:white_oak_logs", "luminousworld:stripped_white_oak_log")
    event.add("luminousworld:white_oak_logs", "luminousworld:white_oak_wood")
    event.add("luminousworld:white_oak_logs", "luminousworld:stripped_white_oak_wood")

    event.add("luminousworld:palm_logs", "luminousworld:palm_log")
    event.add("luminousworld:palm_logs", "luminousworld:stripped_palm_log")
    event.add("luminousworld:palm_logs", "luminousworld:palm_wood")
    event.add("luminousworld:palm_logs", "luminousworld:stripped_palm_wood")

    event.add("luminousworld:auburn_logs", "luminousworld:auburnlog")
    event.add("luminousworld:auburn_logs", "luminousworld:stripped_auburn_log")
    event.add("luminousworld:auburn_logs", "luminousworld:auburn_wood")
    event.add("luminousworld:auburn_logs", "luminousworld:stripped_auburn_wood")

    // Vinery logs
    event.add("vinery:dark_cherry_logs", "vinery:dark_cherry_log")
    event.add("vinery:dark_cherry_logs", "vinery:stripped_dark_cherry_log")
    event.add("vinery:dark_cherry_logs", "vinery:dark_cherry_wood")
    event.add("vinery:dark_cherry_logs", "vinery:stripped_dark_cherry_wood")

    // Cataclysm
    event.add("cataclysm:chorus_stems", "cataclysm:chorus_stem")

    // Garnished additions
    event.add("garnished_additions:ethereal_logs", "#minecraft:ethereal_logs")
});