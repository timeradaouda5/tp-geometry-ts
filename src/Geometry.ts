
export default interface Geometry {
    getType(): String;
    isEmpty(): boolean;
    translate(dx: number, dy: number): void;
}