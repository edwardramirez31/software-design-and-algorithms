export interface Shipper {
  getLetterCost(weight: number): number;
  getPackageCost(weight: number): number;
  getOversizeCost(weight: number): number;
}

export class AirEast implements Shipper {
  getLetterCost(weight: number): number {
    return weight * 0.39;
  }
  getPackageCost(weight: number): number {
    return weight * 0.25;
  }
  getOversizeCost(weight: number): number {
    return 10 + this.getPackageCost(weight);
  }
}

export class ChicagoSprint implements Shipper {
  getLetterCost(weight: number): number {
    return weight * 0.42;
  }
  getPackageCost(weight: number): number {
    return weight * 0.2;
  }
  getOversizeCost(weight: number): number {
    return this.getPackageCost(weight);
  }
}

export class PacificParcel implements Shipper {
  getLetterCost(weight: number): number {
    return weight * 0.51;
  }
  getPackageCost(weight: number): number {
    return weight * 0.19;
  }
  getOversizeCost(weight: number): number {
    return 0.02 * (weight - 160) + this.getPackageCost(160);
  }
}
