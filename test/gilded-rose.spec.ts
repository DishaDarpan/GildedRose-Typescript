import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    // it('should foo', function() {
    //     const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].name).to.equal('fixme');
    // });
    it('Test1- Aged Brie should increase in quality', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 10) ]); 
        // const item1 = gildedRose.updateQuality();
        // const item2 = gildedRose.updateQuality();
        const item3 = gildedRose.updateQuality();

        expect(item3[0].name).to.equal('Aged Brie');
        expect(item3[0].sellIn).to.equal(4);
        expect(item3[0].quality).to.equal(11);
         
    })

    it('Test2- the quality of an item is never greater than 50', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 50) ]); 
        // const item1 = gildedRose.updateQuality();
        // const item2 = gildedRose.updateQuality();
        const item3 = gildedRose.updateQuality();

        expect(item3[0].name).to.equal('Aged Brie');
        expect(item3[0].sellIn).to.equal(4);
        expect(item3[0].quality).to.equal(50);
         
    })
});
