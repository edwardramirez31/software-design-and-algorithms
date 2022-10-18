import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  items: Item[];

  constructor() {
    this.items = [];
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public sort(comparator?: ItemComparator): void {
    if (!comparator) {
      this.items.sort((itemA, itemB) => {
        return itemA.compareTo(itemB);
      });
      return;
    }
    this.items.sort((itemA, itemB) => {
      return comparator.compare(itemA, itemB);
    });
  }

  public toString(): string {
    return this.items.join(", ");
  }
}
