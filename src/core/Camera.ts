import { PerspectiveCamera } from "three";

export default class Camera extends PerspectiveCamera {
    constructor() {
        super(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        this.setPosition();
    }

    private setPosition(): void {
        this.position.setZ(5);
    }
}