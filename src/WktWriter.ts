import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";

export default class WktWriter {

    write(geometry: Geometry): string {

        if (geometry instanceof Point) {

            if (geometry.isEmpty()) {
                return "POINT EMPTY";
            }

            return "POINT(" + geometry.x().toFixed(1) + " " + geometry.y().toFixed(1) + ")";
        }

        if (geometry instanceof LineString) {

            if (geometry.isEmpty()) {
                return "LINESTRING EMPTY";
            }

            let coordinates = "";

            for (let i = 0; i < geometry.getNumPoints(); i++) {

                const point = geometry.getPointN(i);

                if (i > 0) {
                    coordinates += ",";
                }

                coordinates += point.x().toFixed(1) + " " + point.y().toFixed(1);
            }

            return "LINESTRING(" + coordinates + ")";
        }

        throw new TypeError("geometry type not supported");
    }
}