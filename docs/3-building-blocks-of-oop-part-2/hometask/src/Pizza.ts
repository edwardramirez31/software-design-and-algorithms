import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  numberOfSlices: number;
  slicesEaten: number;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super("pizza", 1000, 300.5, spoiled);
    this.numberOfSlices = numberOfSlices;
    this.slicesEaten = 0;
  }

  public eat(): string {
    if (this.numberOfSlices === this.slicesEaten) {
      return this.use();
    }
    this.setSlicesEaten(this.slicesEaten + 1);
    if (this.numberOfSlices <= this.slicesEaten) {
      this.setConsumed(true);
    }
    return "You eat a slice of the pizza.";
  }

  public getNumberOfSlices(): number {
    return this.numberOfSlices;
  }

  public setNumberOfSlices(numberOfSlices: number): void {
    this.numberOfSlices = numberOfSlices;
  }

  public getSlicesEaten(): number {
    return this.slicesEaten;
  }

  public setSlicesEaten(slicesEaten: number): void {
    this.slicesEaten = slicesEaten;
  }
}
