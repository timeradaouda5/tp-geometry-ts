import { describe, it, expect } from "vitest";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test EnvelopeBuilder", () => {

    it("should build an envelope", () => {
        const builder = new EnvelopeBuilder();

        builder.insert([0, 1]);
        builder.insert([2, 0]);
        builder.insert([1, 3]);

        const result = builder.build();

        expect(result.getXMin()).to.equal(0);
        expect(result.getYMin()).to.equal(0);
        expect(result.getXMax()).to.equal(2);
        expect(result.getYMax()).to.equal(3);
    });

    it("should build an empty envelope", () => {
        const builder = new EnvelopeBuilder();

        const result = builder.build();

        expect(result.isEmpty()).to.be.true;
    });
});

describe("test Envelope", () => {

    it("should test an envelope", () => {
        const envelope = new Envelope([0, 1], [2, 3]);

        expect(envelope.isEmpty()).to.be.false;
        expect(envelope.getXMin()).to.equal(0);
        expect(envelope.getYMin()).to.equal(1);
        expect(envelope.getXMax()).to.equal(2);
        expect(envelope.getYMax()).to.equal(3);
    });

    it("should test toString()", () => {
        const envelope = new Envelope([0, 1], [2, 3]);

        expect(envelope.toString()).to.equal("[0,1,2,3]");
    });

    it("should test an empty Envelope", () => {
        const envelope = new Envelope([], []);

        expect(envelope.isEmpty()).to.be.true;
    });

    it("should handle undefined coordinates", () => {
    const envelope = new Envelope(undefined as any, undefined as any);

    expect(envelope.isEmpty()).to.be.true;
    });

});