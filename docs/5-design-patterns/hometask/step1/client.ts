import { Shipment } from "./shipment";

export class Client {
  shipment: Shipment;

  constructor(shipment: Shipment) {
    this.shipment = shipment;
  }

  shipItem() {
    console.log(this.shipment.ship());
  }
}
