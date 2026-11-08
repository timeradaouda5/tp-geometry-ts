import { describe, it, expect, vi } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";

describe("test LogGeometryVisitor", () => {

    it("should visit a Point", () => {
        const visitor = new LogGeometryVisitor();
        const consoleSpy = vi.spyOn(console, "log");

        const point = new Point([3, 4]);
        point.accept(visitor);

        expect(consoleSpy).toHaveBeenCalledWith(
            "Je suis un point avec x=3.0 et y=4.0."
        );

        consoleSpy.mockRestore();
    });

    it("should visit an empty Point", () => {
        const visitor = new LogGeometryVisitor();
        const consoleSpy = vi.spyOn(console, "log");

        const point = new Point();
        point.accept(visitor);

        expect(consoleSpy).toHaveBeenCalledWith(
            "Je suis un point vide."
        );

        consoleSpy.mockRestore();
    });

    it("should visit a LineString", () => {
        const visitor = new LogGeometryVisitor();
        const consoleSpy = vi.spyOn(console, "log");

        const line = new LineString([
            new Point([1, 2]),
            new Point([3, 4])
        ]);

        line.accept(visitor);

        expect(consoleSpy).toHaveBeenCalledWith(
            "Je suis une polyligne définie par 2 point(s)."
        );

        consoleSpy.mockRestore();
    });

    it("should visit an empty LineString", () => {
        const visitor = new LogGeometryVisitor();
        const consoleSpy = vi.spyOn(console, "log");

        const line = new LineString();
        line.accept(visitor);

        expect(consoleSpy).toHaveBeenCalledWith(
            "Je suis une polyligne vide."
        );

        consoleSpy.mockRestore();
    });

});