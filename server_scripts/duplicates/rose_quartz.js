// requires: create_ironworks
// requires: create_things_and_misc

// Rose quartz blocks
const prq = 'create:polished_rose_quartz';
const rq_sheet_block = 'create_ironworks:rose_quartz_block';
const rq_sheet = 'create_things_and_misc:rose_quartz_sheet';
const rq_armor = 'create_ironworks:rose_quartz_armor';
const armor_slots = ['helmet', 'chestplate', 'leggings', 'boots'];

ServerEvents.recipes(event => {
    addCreateRecipeHandler(event);   
    // Rose Quartz Sheet
    event.recipes.create.pressing(
        Item.of(rq_sheet, 1),
        prq
    );
    // Rose Quartz Block
    event.remove({ output: rq_sheet_block });
    event.replaceOutput(
        {id: 'create_ironworks:materials/rose_quartz/item_from_block'}, prq, 
        rq_sheet);
    // Rose Quartz Armor
    for (const slot of armor_slots) {
        event.remove({ output: rq_armor + '_' + slot });
    }
    event.shaped(
        Item.of(rq_sheet_block, 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: rq_sheet
        }
    );
    event.shaped(
        Item.of(rq_armor + '_helmet', 1),
        [
            'AAA',
            'A A'
        ],
        {
            A: rq_sheet
        }
    );
    event.shaped(
        Item.of(rq_armor + '_chestplate', 1),
        [
            'A A',
            'AAA',
            'AAA'
        ],
        {
            A: rq_sheet
        }
    );
    event.shaped(
        Item.of(rq_armor + '_leggings', 1),
        [
            'AAA',
            'A A',
            'A A'
        ],
        {
            A: rq_sheet
        }
    );
    event.shaped(
        Item.of(rq_armor + '_boots', 1),
        [
            'A A',
            'A A'
        ],
        {
            A: rq_sheet
        }
    );
    event.recipes.create.finalize();
});