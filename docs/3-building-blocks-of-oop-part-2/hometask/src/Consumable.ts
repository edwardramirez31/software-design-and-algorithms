import { Item } from "./Item";

export abstract class Consumable extends Item {
  private consumed: boolean;

  private spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.consumed = false;
    this.spoiled = spoiled;
  }

  public use(): string {
    if (!this.consumed && !this.spoiled) {
      return this.eat();
    }

    return `There is nothing left of the ${this.getName()} to consume.`;
  }

  public eat(): string {
    this.consumed = true;
    return `You eat the ${this.getName()}.${
      this.spoiled ? "\nYou feel sick." : ""
    }`;
  }

  public isConsumed(): boolean {
    return this.consumed;
  }

  public getSpoiled(): boolean {
    return this.spoiled;
  }

  public setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  public setSpoiled(spoiled: boolean): void {
    this.spoiled = spoiled;
  }

  public toString() {
    return super.toString();
  }
}
