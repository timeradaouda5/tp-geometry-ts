import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LineString", () => {
    it("test default constructor", () => {
        const g = new LineString();
        expect(g.getNumPoints()).to.equal(0);
    });

    it("test constructor with coordinates", () => {
        const g = new LineString([
            new Point([0.0, 0.0]),
            new Point([3.0, 4.0])
        ]);
        expect(g.getNumPoints()).to.equal(2);
    });


    it("should return expected points whith getPointN", () => {
        const g = new LineString([
            new Point([0.0, 0.0]),
            new Point([3.0, 4.0])
        ]);
        expect(g.getPointN(0).x()).to.equal(0.0);
        expect(g.getPointN(0).y()).to.equal(0.0);

        expect(g.getPointN(1).x()).to.equal(3.0);
        expect(g.getPointN(1).y()).to.equal(4.0);

        expect(g.getPointN(2)).to.equal(undefined);


    });

    it("should return 'LineString' for getType()", () => {
        const g = new LineString();
        expect(g.getType()).to.equal("LineString");
    });

    it("should test isEmpty()", () => {
        const line1 = new LineString();
        expect(line1.isEmpty()).to.be.true;

        const line2 = new LineString([new Point([3, 4])]);
        expect(line2.isEmpty()).to.be.false;
    });

    it("should translate a LineString", () => {
        const line = new LineString([
            new Point([1, 2]),
            new Point([3, 4])
        ]);

        line.translate(2, 5);

        expect(line.getPointN(0).getCoordinate()).to.deep.equal([3, 7]);
        expect(line.getPointN(1).getCoordinate()).to.deep.equal([5, 9]);
    });


    it("should clone a LineString", () => {
        const line1 = new LineString([
            new Point([1, 2]),
            new Point([3, 4])
        ]);

        const line2 = line1.clone();

        line2.translate(10, 10);

        expect(line1.getPointN(0).getCoordinate()).to.deep.equal([1, 2]);
        expect(line2.getPointN(0).getCoordinate()).to.deep.equal([11, 12]);
    });

    it("should get the envelope of a LineString", () => {
        const line = new LineString([
            new Point([0, 1]),
            new Point([2, 0]),
            new Point([1, 3])
        ]);

        const envelope = line.getEnvelope();

        expect(envelope.getXMin()).to.equal(0);
        expect(envelope.getYMin()).to.equal(0);
        expect(envelope.getXMax()).to.equal(2);
        expect(envelope.getYMax()).to.equal(3);
    });

    it("should get the envelope of an empty LineString", () => {
    const line = new LineString();
    const envelope = line.getEnvelope();

    expect(envelope.isEmpty()).to.be.true;
});

it("should ignore empty points when getting the envelope", () => {
    const line = new LineString([
        new Point(),
        new Point([2, 3]),
        new Point([5, 7])
    ]);

    const envelope = line.getEnvelope();

    expect(envelope.getXMin()).to.equal(2);
    expect(envelope.getYMin()).to.equal(3);
    expect(envelope.getXMax()).to.equal(5);
    expect(envelope.getYMax()).to.equal(7);
    });

});

