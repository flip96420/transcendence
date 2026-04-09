import HavokPhysics from "@babylonjs/havok";

// import createGui from "./createGui";
// import setupSocket from "./setupSocket";
import { numPlayers, colors } from "./gameData";
import { points, spawnAreas } from "./vectorData";
import { Ground } from "./Ground";
import { spawnWorms } from "./Worm";
import { createCamera } from "./Camera";


class Playground
{
    export async function createScene()
    {
        const engine = new BABYLON.Engine(canvas, true);

        const scene = new BABYLON.Scene(engine);
        scene.actionManager = new BABYLON.ActionManager(scene);

        try 
        {
            const havokInstance = await HavokPhysics();
            const hk = new BABYLON.HavokPlugin(true, havokInstance);
            scene.enablePhysics(new BABYLON.Vector3(0, -9.8, 0), hk);
        }
        catch (error)
        {
            console.warn("Babylon physics plugin failed to initialize. Physics features will be disabled.", error);
        }

        var camera = createCamera(scene, canvas, 0, 0, 62);

        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        const ground = new Ground(scene, points);
        spawnWorms(scene, spawnAreas, numPlayers, colors);

        return (scene);
    };
}
export { Playground };