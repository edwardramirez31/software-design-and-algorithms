import { Item } from "./Item";

export abstract class Weapon extends Item {
  private baseDamage: number;

  private damageModifier: number;

  private baseDurability: number;

  private durabilityModifier: number;

  static MODIFIER_CHANGE_RATE = 0.1;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.damageModifier = 0;
    this.baseDurability = baseDurability;
    this.durabilityModifier = 0;
  }

  public compare(first: Item, second: Item) {
    if (first.getWeight() === second.getWeight()) {
      return first.compareTo(second);
    }
    return first.getValue() > second.getValue() ? 1 : -1;
  }

  public getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  public getDurability(): number {
    return (this.baseDurability + this.durabilityModifier) * 100;
  }

  public toString() {
    return (
      super.toString() +
      `, Damage: ${this.getDamage().toFixed(2)}, Durability: ${
        this.getDurability().toFixed(2) + "%"
      }`
    );
  }

  public use(): string {
    const currentDurability = this.getDurability();
    if (currentDurability > 0) {
      this.baseDurability -= Weapon.MODIFIER_CHANGE_RATE;
      return `You use the ${this.getName()}, dealing ${this.getDamage().toFixed(
        2
      )} points of damage.${
        this.getDurability() <= 0 ? ` The ${this.getName()} breaks.` : ""
      }`;
    }
    return `You can't use the ${this.getName()}, it is broken.`;
  }

  public abstract polish(): void;

  public getBaseDamage(): number {
    return this.baseDamage;
  }

  public getDamageModifier(): number {
    return this.damageModifier;
  }

  public getBaseDurability(): number {
    return this.baseDurability;
  }

  public getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  public setBaseDamage(baseDamage: number): void {
    this.baseDamage = baseDamage;
  }

  public setDamageModifier(damageModifier: number): void {
    this.damageModifier = damageModifier;
  }

  public setBaseDurability(baseDurability: number): void {
    this.baseDurability = baseDurability;
  }

  public setDurabilityModifier(durabilityModifier: number): void {
    this.durabilityModifier = durabilityModifier;
  }
}
