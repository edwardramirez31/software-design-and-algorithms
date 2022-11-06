import { Shipment } from "./shipment";
import { AirEast, ChicagoSprint, PacificParcel } from "./shipper";

class Client {
  private _shipment: Shipment;

  constructor(shipment: Shipment) {
    this.shipment = shipment;
  }

  shipItem() {
    console.log(this.shipment.ship());
  }

  public get shipment(): Shipment {
    return this._shipment;
  }
  public set shipment(value: Shipment) {
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

const dallasShipment = new Shipment(1, 10, "MIAMI", "12345", "DALLAS", "78910");
checkShipper(dallasShipment);
const chicagoShipment = new Shipment(
  1,
  10,
  "OAKLAND",
  "78910",
  "CHICAGO",
  "45678"
);
checkShipper(chicagoShipment);
const newYorkShipment = new Shipment(
  1,
  10,
  "CHICAGO",
  "45678",
  "NEW YORK",
  "78910"
);
checkShipper(newYorkShipment);

const client = new Client(dallasShipment);
client.shipItem();

client.shipment = chicagoShipment;
client.shipItem();

client.shipment = newYorkShipment;
client.shipItem();
