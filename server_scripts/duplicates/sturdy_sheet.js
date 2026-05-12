//requires:create_ironworks
//requires:create_compressed

// Sturdy sheet blocks
const create_tm = 'create_things_and_misc:';
const ssb = 'create_ironworks:sturdy_sheet_block';
const pssb = 'create_compressed:sturdy_sheet_block';
const tssb = create_tm + 'sturdy_sheet_block'
const tss_slab = create_tm + 'sturdy_sheet_slab'
const tss_stairs = create_tm + 'sturdy_sheet_slab_stairs'

ServerEvents.recipes(event => {
    // Sturdy sheet blocks
    event.remove({ output: pssb });
    event.shaped(
        Item.of(pssb, 4),
        [
            'AA',
            'AA'
        ],
        {
            A: ssb
        }
    );
    event.stonecutting(pssb, ssb);
    event.stonecutting(ssb, pssb);
});
