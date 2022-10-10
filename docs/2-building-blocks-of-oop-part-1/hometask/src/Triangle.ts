import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(point1: Point, point2: Point, point3: Point);
  constructor(
    point1: Point,
    point2: Point,
    point3: Point,
    color: string,
    filled: boolean
  );
  constructor(
    point1: Point,
    point2: Point,
    point3: Point,
    color?: string,
    filled?: boolean
  ) {
    if (typeof color === "string" && typeof filled === "boolean") {
      super([point1, point2, point3], color, filled);
    } else {
      super([point1, point2, point3]);
    }
  }

  public toString() {
    return `Triangle[${this.points
      .map((point, index) => `v${index + 1}=${point.toString()}`)
      .join(",")}]`;
  }

  public getType(): string {
    const distances = this.points.map((value, index, points) => {
      if (index === 0) {
        return value.distance(points[points.length - 1]);
      } else {
        return value.distance(points[index - 1]);
      }
    });

    const tolerance = 0.001;

    const equalSides = distances.filter(
      (value) => Math.abs(value - distances[0]) <= tolerance
    ).length;

    if (equalSides === 3) {
      return "equilateral triangle";
    } else if (equalSides === 2) {
      return "isosceles triangle";
    } else {
      return "scalene triangle";
    }
  }
}
