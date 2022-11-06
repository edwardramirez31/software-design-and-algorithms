import { Shipper } from "./shipper";

let storedId = 0;

export interface IShipment {
  ship(): string;
}

export abstract class Shipment implements IShipment {
  protected _shipper: Shipper;

  protected id: number;
  protected weight: number;
  protected fromAddress: string;
  protected _fromZipCode: string;
  protected toAddress: string;
  protected _toZipCode: string;

  constructor(
    id: number,
    weight: number,
    fromAddress: string,
    fromZipCode: string,
    toAddress: string,
    toZipCode: string
  ) {
    if (!id) {
      this.id = this.getShipmentId();
    } else {
      this.id = id;
    }
    this.weight = weight;
    this.fromAddress = fromAddress;
    this.fromZipCode = fromZipCode;
    this.toAddress = toAddress;
    this.toZipCode = toZipCode;
  }

  public get shipper(): Shipper {
    return this._shipper;
  }
  public set shipper(value: Shipper) {
    this._shipper = value;
  }

  getShipmentId() {
    storedId++;
    return storedId;
  }

  ship(): string {
    return `Shipment with the ID ${this.id} will be picked up from ${this.fromAddress} ${this.fromZipCode} and shipped to ${this.toAddress} ${this.toZipCode}`;
  }

  public get fromZipCode(): string {
    return this._fromZipCode;
  }
  public set fromZipCode(value: string) {
    this._fromZipCode = value;
  }

  public get toZipCode(): string {
    return this._toZipCode;
  }
  public set toZipCode(value: string) {
    this._toZipCode = value;
  }
}

export class Letter extends Shipment {
  ship(): string {
    return `${super.ship()}\nCost = ${this._shipper.getLetterCost(
      this.weight
    )}`;
  }
}

export class Package extends Shipment {
  ship(): string {
    return `${super.ship()}\nCost = ${this._shipper.getPackageCost(
      this.weight
    )}`;
  }
}

export class Oversize extends Shipment {
  ship(): string {
    return `${super.ship()}\nCost = ${this._shipper.getOversizeCost(
      this.weight
    )}`;
  }
}
