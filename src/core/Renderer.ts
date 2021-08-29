import { WebGLRenderer } from "three";

export default class Renderer extends WebGLRenderer {
    constructor() {
        super({
            antialias: true
        });

        this.setVisualization();
        this.setRender();
    }

    private setVisualization(): void {
        this.setSize(window.innerWidth, window.innerHeight);
        this.setPixelRatio(window.devicePixelRatio);
    }

    private setRender(): void {
        document.body.appendChild(this.domElement);
    }
}