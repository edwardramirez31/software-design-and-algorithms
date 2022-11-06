let storedId = 0;

export class Shipment {
  private id: number;
  private weight: number;
  private fromAddress: string;
  private _fromZipCode: string;
  private toAddress: string;
  private _toZipCode: string;

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

  getShipmentId() {
    storedId++;
    return storedId;
  }

  ship(): string {
    return `Shipment ID: ${this.id}. Sent from: ${this.fromAddress}, to: ${
      this.toAddress
    }. Cost: ${this.weight * 0.39}`;
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
