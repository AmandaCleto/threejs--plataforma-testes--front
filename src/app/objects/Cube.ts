import { BoxGeometry, Color, Mesh, MeshBasicMaterial, Scene } from "three";

export default class Cube {
    protected scene: Scene;
    protected cube: Mesh;

    constructor(scene: Scene) {
        this.scene = scene;

        this.setCube();
    }

    private setCube(): void {
        const geometry = new BoxGeometry();
        const material = new MeshBasicMaterial({
            color: new Color('#00ff00')
        });
        this.cube = new Mesh(geometry, material);

        this.scene.add(this.cube);
    }

    public setAnimate(): void {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    }
}