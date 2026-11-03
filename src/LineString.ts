import Geometry from "./Geometry";
import Point  from "./Point";



export default class LineString implements Geometry {

    private points: Point[];
    constructor(points?: Point[]){
        this.points= points ? points:[];
    }
    getType(): String{
        return "LineString";
    }

    isEmpty(): boolean {
    return this.points.length === 0;
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n:number){
        return this.points[n];
    }

}