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
            new Point([0.0,0.0]),
            new Point([3.0,4.0])
        ]);
        expect(g.getNumPoints()).to.equal(2);   
    });


      it("should return expected points whith getPointN", () => {
        const g = new LineString([
            new Point([0.0,0.0]),
            new Point([3.0,4.0])
        ]);
        expect(g.getPointN(0).x()).to.equal(0.0);
        expect(g.getPointN(0).y()).to.equal(0.0);  

        expect(g.getPointN(1).x()).to.equal(3.0);
        expect(g.getPointN(1).y()).to.equal(4.0);  

        expect(g.getPointN(2)).to.equal(undefined);  

        
    });

    it ("should return 'LineString' for getType()", () => {
        const g= new LineString();
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

});

