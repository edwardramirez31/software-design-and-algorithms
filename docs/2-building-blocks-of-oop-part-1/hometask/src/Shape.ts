import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (!(points.length >= 3)) {
      throw new Error("Shape should have more than three points");
    }
    if (typeof color === "string" && typeof filled === "boolean") {
      this.points = points;
      this.color = color;
      this.filled = filled;
    } else {
      this.points = points;
      this.color = "green";
      this.filled = true;
    }
  }

  public toString() {
    return `A Shape with color of ${this.color} and ${
      this.filled ? "" : "not "
    }filled. Points: ${this.points
      .map((point) => point.toString())
      .join(", ")}.`;
  }

  public getPerimeter(): number {
    return this.points.reduce((prevValue, currentValue, index, points) => {
      if (index === 0) {
        return prevValue + currentValue.distance(points[points.length - 1]);
      } else {
        return prevValue + currentValue.distance(points[index - 1]);
      }
    }, 0);
  }
}
