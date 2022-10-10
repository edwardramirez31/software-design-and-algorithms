export class Point {
  x: number;
  y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    if (typeof x === "number" && typeof y === "number") {
      this.x = x;
      this.y = y;
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  public toString() {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number;
  public distance(point: Point): number;
  public distance(x: number, y: number): number;
  public distance(pointOrCoordinateX?: number | Point, y?: number): number {
    if (pointOrCoordinateX instanceof Point) {
      const point = pointOrCoordinateX;
      const distance = Math.sqrt(
        Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2)
      );
      return distance;
    }

    if (!pointOrCoordinateX || !y) {
      const distance = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
      return distance;
    }

    const x = pointOrCoordinateX;
    const distance = Math.sqrt(
      Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2)
    );
    return distance;
  }
}
