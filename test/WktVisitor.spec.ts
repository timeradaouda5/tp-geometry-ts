import { describe, it, expect } from "vitest";
import WktVisitor from "../src/WktVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test WktVisitor", () => {

    it("should visit a Point", () => {
        const visitor = new WktVisitor();
        const point = new Point([3, 4]);

        point.accept(visitor);

        expect(visitor.getResult()).to.equal("POINT(3.0 4.0)");
    });

    it("should visit an empty Point", () => {
        const visitor = new WktVisitor();
        const point = new Point();

        point.accept(visitor);

        expect(visitor.getResult()).to.equal("POINT EMPTY");
    });

    it("should visit a LineString", () => {
        const visitor = new WktVisitor();

        const line = new LineString([
            new Point([1, 2]),
            new Point([3, 4])
        ]);

        line.accept(visitor);

        expect(visitor.getResult()).to.equal(
            "LINESTRING(1.0 2.0,3.0 4.0)"
        );
    });

    it("should visit an empty LineString", () => {
        const visitor = new WktVisitor();
        const line = new LineString();

        line.accept(visitor);

        expect(visitor.getResult()).to.equal("LINESTRING EMPTY");
    });

});