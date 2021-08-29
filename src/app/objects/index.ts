import { Scene } from "three";
import Cube from "./Cube";

export default class Objects {
    public cube: Cube;

    constructor(scene: Scene) {
        this.cube = new Cube(scene);
    }
}