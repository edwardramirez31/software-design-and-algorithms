import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("bow", baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    const durability = this.getDurability();
    const baseDurability = this.getBaseDurability();
    const durabilityModifier = this.getDurabilityModifier();

    if (durability < 100) {
      const durabilityModifierIncrease =
        durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;

      this.setDurabilityModifier(
        durabilityModifierIncrease + baseDurability < 1
          ? durabilityModifierIncrease
          : 1 - baseDurability
      );
    }
  }
}
