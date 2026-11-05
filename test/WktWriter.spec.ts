import { describe, it, expect } from "vitest";
import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test WktWriter", () => {

    const writer = new WktWriter();

    it("should write a Point", () => {
        const point = new Point([3, 4]);

        expect(writer.write(point)).to.equal("POINT(3.0 4.0)");
    });

    it("should write an empty Point", () => {
        const point = new Point();

        expect(writer.write(point)).to.equal("POINT EMPTY");
    });

    it("should write a LineString", () => {
        const line = new LineString([
            new Point([1, 2]),
            new Point([3, 4])
        ]);

        expect(writer.write(line)).to.equal("LINESTRING(1.0 2.0,3.0 4.0)");
    });

    it("should write an empty LineString", () => {
        const line = new LineString();

        expect(writer.write(line)).to.equal("LINESTRING EMPTY");
    });

    it("should reject an unsupported geometry", () => {
        expect(() => writer.write({} as any)).to.throw(TypeError);
    });

});