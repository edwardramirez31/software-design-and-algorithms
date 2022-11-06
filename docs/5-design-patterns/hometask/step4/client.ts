import { Letter, Oversize, Package, Shipment, IShipment } from "./shipment";
import {
  DoNotLeaveShipment,
  FragileShipment,
  ReturnRequestedShipment,
} from "./shipmentDecorator";
import { AirEast, ChicagoSprint, PacificParcel } from "./shipper";

class Client {
  private _shipment: IShipment;

  constructor(shipment: IShipment) {
    this.shipment = shipment;
  }

  shipItem() {
    console.log(this.shipment.ship());
  }

  public get shipment(): IShipment {
    return this._shipment;
  }
  public set shipment(value: IShipment) {
    this._shipment = value;
  }
}

function checkShipper(shipment: Shipment) {
  if (
    shipment.fromZipCode.startsWith("4") ||
    shipment.fromZipCode.startsWith("5") ||
    shipment.fromZipCode.startsWith("6")
  ) {
    shipment.shipper = new ChicagoSprint();
  } else if (
    shipment.fromZipCode.startsWith("7") ||
    shipment.fromZipCode.startsWith("8") ||
    shipment.fromZipCode.startsWith("9")
  ) {
    shipment.shipper = new PacificParcel();
  } else {
    shipment.shipper = new AirEast();
  }
}

const dallasShipment = new Letter(0, 10, "MIAMI", "12345", "DALLAS", "78910");
checkShipper(dallasShipment);

const chicagoShipment = new Package(
  0,
  150,
  "OAKLAND",
  "78910",
  "CHICAGO",
  "45678"
);
checkShipper(chicagoShipment);
const chicagoFragileShipment = new FragileShipment(chicagoShipment);

const newYorkShipment = new Oversize(
  0,
  300,
  "CHICAGO",
  "45678",
  "NEW YORK",
  "78910"
);
checkShipper(newYorkShipment);
const newYorkShipmentFragileShipment = new FragileShipment(newYorkShipment);
const newYorkDoNotLeaveShipment = new DoNotLeaveShipment(
  newYorkShipmentFragileShipment
);
const newYorkReturnRequestedShipment = new ReturnRequestedShipment(
  newYorkDoNotLeaveShipment
);

const client = new Client(dallasShipment);
client.shipItem();
console.log();

client.shipment = chicagoShipment;
client.shipItem();
console.log();

client.shipment = chicagoFragileShipment;
client.shipItem();
console.log();

client.shipment = newYorkShipment;
client.shipItem();
console.log();

client.shipment = newYorkReturnRequestedShipment;
client.shipItem();
