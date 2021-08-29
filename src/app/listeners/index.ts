import { PerspectiveCamera, WebGLRenderer } from "three";
import Resize from "./Resize";

export default class Listeners {
    constructor(camera: PerspectiveCamera, renderer: WebGLRenderer) {
        new Resize(camera, renderer);
    }
}