export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateAgedBrie (item: Item) {
        if (item.quality < 50) {
            item.quality++;
        }
        item.sellIn--;
    }

    updateSulfuras (item: Item) {
        item.quality = 80;
    }

    updateBackStagePass (item: Item) {

        item.sellIn--;
         if (item.quality > 50) {
            item.quality = 50;
        }
        item.sellIn < 0 ? item.quality = 0 : item.sellIn <= 5 ? item.quality = item.quality + 3 
        : item.sellIn <=10 ? item.quality = item.quality + 2 : item.quality++;
    }
    updateNormalItems (item: Item) {
        item.sellIn-- ;
        (item.sellIn > 0) ? item.quality-- : item.quality = item.quality - 2;
    }

    updateConjuredItem (item: Item) {
        item.sellIn-- ;
        (item.sellIn > 0) ? item.quality = item.quality - 2 : item.quality<=2 ? item.quality = 0 :item.quality = item.quality - 4;
    }

    updateQuality() {

        for (let i = 0; i < this.items.length; i++) {

            switch(this.items[i].name) {

                case "Aged Brie" :
                    this.updateAgedBrie (this.items[i]);
                    break;
                case "Sulfuras, Hand of Ragnaros" :
                     this.updateSulfuras (this.items[i]);
                    break;
                case "Backstage passes to a TAFKAL80ETC concert" :
                    this.updateBackStagePass (this.items[i]);
                    break;
                case "Conjured Mana Cake" :
                    this.updateConjuredItem (this.items[i]);
                    break;
                    
                default :
                    this.updateNormalItems (this.items[i]);
                    
            }
        }
        return this.items;
    }
}

