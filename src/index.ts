import Scene from '@src/core/Scene';
import Camera from '@src/core/Camera';
import Renderer from '@src/core/Renderer';

import Listeners from '@src/app/listeners';
import Objects from '@src/app/objects';
class Core {
    protected scene: Scene;
    protected camera: Camera;
    protected renderer: Renderer;

    protected listeners: Listeners;
    protected objects: Objects;

    constructor() {
        /* core */
        this.scene = new Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();

        /* app */
        this.listeners = new Listeners(this.camera, this.renderer);
        this.objects = new Objects(this.scene);

        this.setAnimate();
    }

    private setAnimate(): void {
        const animate = () => {
            requestAnimationFrame(animate);

            /* animation */
            this.objects.cube.setAnimate();

            this.renderer.render(this.scene, this.camera);
        };
        animate();
    }
};

new Core;