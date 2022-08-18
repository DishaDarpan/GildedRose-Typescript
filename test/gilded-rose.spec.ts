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

    it('Test3- Sulfuras, Quality value (80) never decreases', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        const item = gildedRose.updateQuality();

        expect(item[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(item[0].quality).to.equal(80);
    })

    it('Test4- Sulfuras, Sell In Value never decreases', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 5, 80) ]);
        const item = gildedRose.updateQuality();

        expect(item[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(item[0].sellIn).to.equal(5);
    })

    it('Test5- Backstage Passes Quality Value increases by 2 when SellIn <= 10', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 8, 15) ]);
        const item = gildedRose.updateQuality();

        expect(item[0].sellIn).to.equal(7);
        expect(item[0].quality).to.equal(17);
    })

    it('Test6- Backstage Passes Quality Value increases by 3 when SellIn <= 5', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 3, 15) ]);
        const item = gildedRose.updateQuality();

        expect(item[0].sellIn).to.equal(2);
        expect(item[0].quality).to.equal(18);
    })

    it('Test7- Backstage Passes Quality Value falls to 0 when sellIn falls below 0', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20) ]);
        const item = gildedRose.updateQuality();

        expect(item[0]).to.deep.equal(new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0))
    })

    
    // guality goes down by 1 each day
    it('Test8- Quality Value falls by 1 each day', function() {
        const gildedRose = new GildedRose([ new Item('ladle', 5, 20) ]);
        const item = gildedRose.updateQuality();

        expect(item[0].sellIn).to.equal(4);
        expect(item[0].quality).to.equal(19);
    })
    // quality degrades x2 after sellIn goes negative
    it('Test9- Quality Value falls by 2 after expiry date', function() {
        const gildedRose = new GildedRose([ new Item('ladle', 0, 20) ]);
        const item = gildedRose.updateQuality();

        expect(item[0].sellIn).to.equal(-1);
        expect(item[0].quality).to.equal(18);
    })
});
