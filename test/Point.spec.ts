import { describe, it, expect } from "vitest";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x())).to.be.true;
        expect(Number.isNaN(p.y())).to.be.true;
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0, 4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });

    it("should return 'Point' for getType()", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
    });

    it("should test isEmpty()", () => {
        const p1 = new Point();
        expect(p1.isEmpty()).to.be.true;

        const p2 = new Point([3, 4]);
        expect(p2.isEmpty()).to.be.false;
    });

    it("should translate a Point", () => {
        const p = new Point([3, 4]);

        p.translate(2, 5);

        expect(p.getCoordinate()).to.deep.equal([5, 9]);
    });

    it("should not translate an empty Point", () => {
        const p = new Point();

        p.translate(2, 5);

        expect(p.isEmpty()).to.be.true;
        expect(p.getCoordinate()).to.deep.equal([]);
    });

    it("should clone a Point", () => {
        const p1 = new Point([3, 4]);
        const p2 = p1.clone();

        p2.translate(10, 10);

        expect(p1.getCoordinate()).to.deep.equal([3, 4]);
        expect(p2.getCoordinate()).to.deep.equal([13, 14]);
    });

    it("should get the envelope of a Point", () => {
        const p = new Point([3, 4]);
        const envelope = p.getEnvelope();

        expect(envelope.getXMin()).to.equal(3);
        expect(envelope.getYMin()).to.equal(4);
        expect(envelope.getXMax()).to.equal(3);
        expect(envelope.getYMax()).to.equal(4);
    });

    it("should get the envelope of an empty Point", () => {
    const p = new Point();
    const envelope = p.getEnvelope();

    expect(envelope.isEmpty()).to.be.true;
    });


});

