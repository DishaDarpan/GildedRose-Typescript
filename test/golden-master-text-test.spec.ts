
import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Golden Master Test', function () {

    it('Golden Master Test', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 10),
        new Item('Sulfuras, Hand of Ragnaros', 5, 80),
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10),
        new Item('ladle', 5, 10),
        new Item('Conjured Mana Cake', 10, 25)]);


 gildedRose.updateQuality();
        const item = gildedRose.updateQuality();

        expect(item[0].name).to.equal('Aged Brie');
    })

})