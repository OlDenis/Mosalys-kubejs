ServerEvents.tags("item", event => {
    event.add("ars_additions:codex_entries", "ars_additions:codex_entry")
    event.add("ars_additions:codex_entries", "ars_additions:lost_codex_entry")
    event.add("ars_additions:codex_entries", "ars_additions:ancient_codex_entry")
})

LootJS.modifiers(event => {
    // Remove Codex Entry from everywhere
    event.addTableModifier(LootType.CHEST)
        .replaceLoot("#ars_additions:codex_entries", "ars_nouveau:experience_gem")
})