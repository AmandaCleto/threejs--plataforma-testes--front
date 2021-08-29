import { BoxGeometry, Color, Mesh, MeshBasicMaterial, Scene } from "three";

export default class Cube {
    protected scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;

        this.setCube();
    }

   private setCube(): void {
       const geometry = new BoxGeometry();
       const material = new MeshBasicMaterial({
           color: new Color('#00ff00')
       });
       const cube = new Mesh(geometry, material);

       this.scene.add(cube);
   }
}