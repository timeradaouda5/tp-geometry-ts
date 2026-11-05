import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import Geometry from "./Geometry";
import EnvelopeBuilder from "./EnvelopeBuilder";


export default class Point implements Geometry {
  private coordinate: Coordinate;

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate  ? coordinate : [];
  }

  getType(): String {
    return "Point";
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.coordinate.length > 0 ? this.coordinate[0] : Number.NaN ;
  }

  y(): number {
    return this.coordinate.length > 1 ? this.coordinate[1] : Number.NaN ;
  }

  isEmpty(): boolean {
    return this.coordinate.length === 0;
 }

 translate(dx: number, dy: number): void {
    if (!this.isEmpty()) {
        this.coordinate[0] += dx;
        this.coordinate[1] += dy;
    }
  }

  clone(): Point {
    return new Point([...this.coordinate]);
  }

  getEnvelope(): Envelope {
    const builder = new EnvelopeBuilder();
    if (!this.isEmpty()) {
        builder.insert(this.coordinate);
    }
    return builder.build();
  }
  

}
