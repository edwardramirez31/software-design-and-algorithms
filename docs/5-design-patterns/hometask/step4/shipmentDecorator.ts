import { IShipment } from "./shipment";

export abstract class ShipmentDecorator implements IShipment {
  protected component: IShipment;

  constructor(component: IShipment) {
    this.component = component;
  }

  public ship(): string {
    return this.component.ship();
  }
}

export class FragileShipment extends ShipmentDecorator {
  public ship(): string {
    return `${super.ship()}\n**MARK FRAGILE**`;
  }
}

export class DoNotLeaveShipment extends ShipmentDecorator {
  public ship(): string {
    return `${super.ship()}\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**`;
  }
}

export class ReturnRequestedShipment extends ShipmentDecorator {
  public ship(): string {
    return `${super.ship()}\n**MARK RETURN RECEIPT REQUESTED**`;
  }
}
