import { Comparable } from "./Comparable";

let id = 0;

export abstract class Item implements Comparable<Item> {
  id: number;
  private name: string;
  private value: number;
  private weight: number;

  constructor(name: string, value: number, weight: number) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.weight = weight;
    id++;
  }

  public compareTo(other: Item): number {
    if (this.value === other.value) {
      return this.name > other.name ? 1 : -1;
    }
    return this.value > other.value ? 1 : -1;
  }

  public toString() {
    return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`;
  }

  public abstract use(): void;

  public getId(): number {
    return this.id;
  }

  public getValue(): number {
    return this.value;
  }

  public getWeight(): number {
    return this.weight;
  }

  public getName(): string {
    return this.name;
  }

  public setValue(value: number): void {
    this.value = value;
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }

  public setName(name: string): void {
    this.name = name;
  }

  static numberOfItems(): number {
    return id;
  }

  static reset(): void {
    id = 0;
  }
}
