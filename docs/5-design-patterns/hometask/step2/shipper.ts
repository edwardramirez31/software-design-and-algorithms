export interface Shipper {
  getCost(): number;
}

export class AirEast implements Shipper {
  getCost(): number {
    return 0.39;
  }
}

export class ChicagoSprint implements Shipper {
  getCost(): number {
    return 0.42;
  }
}
export class PacificParcel implements Shipper {
  getCost(): number {
    return 0.51;
  }
}
