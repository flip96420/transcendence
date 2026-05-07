import HavokPhysics from "@babylonjs/havok";

function wrapper(scene)
{
    let start = Date.now();

    const action = new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnEveryFrameTrigger }, () => 
    {
        if (Date.now() > start + 5000)
        {
            console.log("5 Seconds have passed");
            start = Date.now();
        }
    });

    scene.actionManager.registerAction(action);
    // scene.actionManager.unregisterAction(action);
}

class Playground
{
    static async CreateScene()
    {
        // Setting up scene + engine
        const engine = new BABYLON.Engine(canvas, true);
        const scene = new BABYLON.Scene(engine);
        scene.actionManager = new BABYLON.ActionManager(scene);
        // wrapper(scene);

        // Setting up physics
        try
        {
            const havokInstance = await HavokPhysics();
            const hk = new BABYLON.HavokPlugin(true, havokInstance);
            scene.enablePhysics(new BABYLON.Vector3(0, -12, 0), hk);
        }
        catch (error)
        {
            console.warn("Babylon physics plugin failed to initialize. Physics features will be disabled.", error);
        }

        const physicsEngine = scene.getPhysicsEngine();

        // Lighting
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        // Camera
        const camera = new BABYLON.ArcRotateCamera("camera", 0, 1, 10, new BABYLON.Vector3(0, 0, 0), scene);
        camera.attachControl(canvas, true);

        // Render loop
        engine.runRenderLoop(() =>
        {
            scene.render();
        });

        let array =
        [
            new BABYLON.Vector3(93.06, 0, -27.74),
            new BABYLON.Vector3(93.02, 0, -25.4),
            new BABYLON.Vector3(89.12, 0, -24.2),
            new BABYLON.Vector3(89.22, 0, -21.54),
            new BABYLON.Vector3(99.42, 0, -20.64),
            new BABYLON.Vector3(97.88, 0, -15.8),
            new BABYLON.Vector3(91.28, 0, -14.6),
            new BABYLON.Vector3(91.04, 0, -12.06),
            new BABYLON.Vector3(96.48, 0, -8.9),
            new BABYLON.Vector3(99.54, 0, -6.26),
            new BABYLON.Vector3(99.14, 0, -2.56),
            new BABYLON.Vector3(97.28, 0, -1.2),
            new BABYLON.Vector3(89.98, 0, -2.1),
            new BABYLON.Vector3(88.68, 0, -0.2),
            new BABYLON.Vector3(92.14, 0, 5.44),
            new BABYLON.Vector3(95.04, 0, 8.24),
            new BABYLON.Vector3(99.84, 0, 9.54),
            new BABYLON.Vector3(100.44, 0, 13.04),
            new BABYLON.Vector3(90.3, 0, 11.74),
            new BABYLON.Vector3(90.1, 0, 14.24),
            new BABYLON.Vector3(93.1, 0, 17.54),
            new BABYLON.Vector3(97.2, 0, 18.24),
            new BABYLON.Vector3(98.7, 0, 19.94),
            new BABYLON.Vector3(97.9, 0, 24.24),
            new BABYLON.Vector3(94.7, 0, 27.44),
            new BABYLON.Vector3(84.0, 0, 27.84),
            new BABYLON.Vector3(81.16, 0, 26.24),
            new BABYLON.Vector3(85.26, 0, 25.54),
            new BABYLON.Vector3(87.76, 0, 24.04),
            new BABYLON.Vector3(84.16, 0, 22.84),
            new BABYLON.Vector3(73.86, 0, 23.24),
            new BABYLON.Vector3(74.16, 0, 19.74),
            new BABYLON.Vector3(80.36, 0, 17.24),
            new BABYLON.Vector3(80.46, 0, 5.8),
            new BABYLON.Vector3(79.06, 0, 1.8),
            new BABYLON.Vector3(75.52, 0, 1.24),
            new BABYLON.Vector3(71.82, 0, 3.54),
            new BABYLON.Vector3(70.32, 0, 9.14),
            new BABYLON.Vector3(59.82, 0, 5.64),
            new BABYLON.Vector3(60.22, 0, 2.64),
            new BABYLON.Vector3(62.72, 0, 2.44),
            new BABYLON.Vector3(63.92, 0, -0.36),
            new BABYLON.Vector3(75.72, 0, -2.86),
            new BABYLON.Vector3(77.82, 0, -7.22),
            new BABYLON.Vector3(75.42, 0, -14.72),
            new BABYLON.Vector3(78.22, 0, -20.92),
            new BABYLON.Vector3(76.42, 0, -25.22),
            new BABYLON.Vector3(71.02, 0, -21.72),
            new BABYLON.Vector3(68.02, 0, -23.52),
            new BABYLON.Vector3(63.92, 0, -22.92),
            new BABYLON.Vector3(63.12, 0, -19.42),
            new BABYLON.Vector3(58.92, 0, -16.82),
            new BABYLON.Vector3(55.62, 0, -15.32),
            new BABYLON.Vector3(49.32, 0, -14.92),
            new BABYLON.Vector3(45.52, 0, -16.92),
            new BABYLON.Vector3(44.52, 0, -25.02),
            new BABYLON.Vector3(42.72, 0, -24.82),
            new BABYLON.Vector3(42.02, 0, -17.62),
            new BABYLON.Vector3(39.42, 0, -16.52),
            new BABYLON.Vector3(38.12, 0, -13.02),
            new BABYLON.Vector3(41.92, 0, -9.36),
            new BABYLON.Vector3(50.68, 0, -5.32),
            new BABYLON.Vector3(51.88, 0, -2.52),
            new BABYLON.Vector3(48.18, 0, -1.02),
            new BABYLON.Vector3(43.68, 0, 0.22),
            new BABYLON.Vector3(37.88, 0, 0.42),
            new BABYLON.Vector3(37.28, 0, -3.38),
            new BABYLON.Vector3(33.98, 0, -3.72),
            new BABYLON.Vector3(33.04, 0, -2.18),
            new BABYLON.Vector3(38.24, 0, 3.52),
            new BABYLON.Vector3(46.44, 0, 4.72),
            new BABYLON.Vector3(46.64, 0, 7.22),
            new BABYLON.Vector3(39.84, 0, 6.92),
            new BABYLON.Vector3(36.84, 0, 8.52),
            new BABYLON.Vector3(36.64, 0, 11.92),
            new BABYLON.Vector3(40.54, 0, 15.26),
            new BABYLON.Vector3(40.84, 0, 19.66),
            new BABYLON.Vector3(34.88, 0, 21.52),
            new BABYLON.Vector3(32.24, 0, 16.76),
            new BABYLON.Vector3(30.24, 0, 15.86),
            new BABYLON.Vector3(29.24, 0, 12.86),
            new BABYLON.Vector3(27.14, 0, 12.66),
            new BABYLON.Vector3(26.64, 0, 10.86),
            new BABYLON.Vector3(30.68, 0, 7.12),
            new BABYLON.Vector3(32.14, 0, 2.06),
            new BABYLON.Vector3(26.04, 0, 2.06),
            new BABYLON.Vector3(23.74, 0, -1.04),
            new BABYLON.Vector3(26.5, 0, -9.8),
            new BABYLON.Vector3(29.74, 0, -10.54),
            new BABYLON.Vector3(31.6, 0, -13.6),
            new BABYLON.Vector3(29.4, 0, -16.6),
            new BABYLON.Vector3(24.9, 0, -16.7),
            new BABYLON.Vector3(23.4, 0, -20.0),
            new BABYLON.Vector3(25.0, 0, -22.4),
            new BABYLON.Vector3(26.6, 0, -23.3),
            new BABYLON.Vector3(25.9, 0, -26.3),
            new BABYLON.Vector3(32.44, 0, -26.34)
        ]
        const ground = BABYLON.MeshBuilder.ExtrudePolygon( "ground", { shape: array, depth: 5 }, scene );
        ground.rotation.x = -Math.PI / 2;
        ground.position = new BABYLON.Vector3(-62, 0, -5 / 2);
        const groundAggregate = new BABYLON.PhysicsAggregate( ground, BABYLON.PhysicsShapeType.MESH, { mass: 1, friction: 0.8, restitution: 0 }, scene );
        groundAggregate.body.setMotionType(BABYLON.PhysicsMotionType.STATIC);

        let     canJump = true;
        let     secUntilNextJump = 2;
        let     start = Date.now();

        const timer = new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnEveryFrameTrigger }, () => 
        {
            if (Date.now() > start + (secUntilNextJump * 1000))
            {
                console.log("5 Seconds have passed");
                start = Date.now();
                canJump = true;
            }
        });

        const loadModel = async () =>
        {
            BABYLON.ImportMeshAsync("https://assets.babylonjs.com/meshes/HVGirl.glb", scene).then(function (model)
            {
                // Setting player model and lock on camera to the player/target
                var player = model.meshes[0];
                const playerRoot = new BABYLON.TransformNode("playerRoot", scene);
                player.parent = playerRoot;
                playerRoot.position = new BABYLON.Vector3(0, 20, 0);
                player.scaling.setAll(0.1);
                camera.setTarget(player);

                const playerAgg = new BABYLON.PhysicsAggregate
                (
                    playerRoot,
                    BABYLON.PhysicsShapeType.CAPSULE,
                    { mass: 1, friction: 0.8, restitution: 0, radius: 0.25 },
                    scene
                );
                playerAgg.body.setMassProperties({ inertia: new BABYLON.Vector3(0, 0, 0) });
                playerAgg.body.setMotionType(BABYLON.PhysicsMotionType.DYNAMIC);

                // Set animations
                const idleAnim = scene.getAnimationGroupByName("Idle");
                const walkAnim = scene.getAnimationGroupByName("Walking");
                const jumpAnim = scene.getAnimationGroupByName("Samba");

                // attributes
                const   playerSpeed = 0.65;
                let     moving = false;
                let     inAir = true;

                // Set input keys for left, right and jump
                let keyStatus =
                {
                    'a': false,
                    'd': false,
                    'w': false,
                    ' ': false
                };

                // Listen to Inputs from keyboard and change keystatus
                scene.onKeyboardObservable.add((keyInfo) =>
                {
                    let toggle;
                    if (keyInfo.type == BABYLON.KeyboardEventTypes.KEYDOWN)
                        toggle = true;
                    else
                        toggle = false;

                    let key = keyInfo.event.key;
                    if (key in keyStatus)
                        keyStatus[key] = toggle;
                });

                scene.onBeforeRenderObservable.add(() =>
                {
                    var rayStart = playerRoot.position;
                    var rayEnd = new BABYLON.Vector3
                    (
                        playerRoot.position.x,
                        playerRoot.position.y - 0.5,
                        playerRoot.position.z
                    );
                    var rayRes = physicsEngine.raycast(rayStart, rayEnd);

                    if (rayRes.hasHit)
                    {
                        //console.log("Collision at: ", rayRes.hitPointWorld);
                        //console.log("Player position at: ", playerRoot.position);
                        inAir = false;
                        jumpAnim.stop();
                        scene.actionManager.registerAction(timer);
                    }
                    else
                    {
                        inAir = true;
                        canJump = false;
                        jumpAnim.start(true, 1, jumpAnim.from, jumpAnim.to, false);
                    }
                    if (canJump)
                        scene.actionManager.unregisterAction(timer);


                    if (keyStatus['a'] || keyStatus['d'] || keyStatus['w'] || keyStatus[' '])
                    {
                        moving = true;
                        if ((keyStatus['a'] || keyStatus['d']) && !inAir)
                        {
                            walkAnim.start(true, 1, walkAnim.from, walkAnim.to, false);
                            if (keyStatus['a'])
                                player.rotationQuaternion = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, (3 * Math.PI) / 2);
                            if (keyStatus['d'])
                                player.rotationQuaternion = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, Math.PI / 2);

                            const currentVel = playerAgg.body.getLinearVelocity();
                            playerAgg.body.setLinearVelocity( new BABYLON.Vector3(player.forward.x * playerSpeed, currentVel.y, player.forward.z * playerSpeed));
                        }
                        if (canJump && !inAir && (keyStatus['w'] || keyStatus[' ']))
                        {
                            if (keyStatus['w'])
                                playerAgg.body.applyImpulse(new BABYLON.Vector3(player.forward.x * -50, 460, 0), player.getAbsolutePosition());
                            else if (keyStatus[' '])
                                playerAgg.body.applyImpulse(new BABYLON.Vector3(player.forward.x * 70, 100, 0), player.getAbsolutePosition());
                        }
                    }
                    else
                    {
                        moving = false;
                        idleAnim.start(true, 1, idleAnim.from, idleAnim.to, false);
                        walkAnim.stop();

                        const currentVel = playerAgg.body.getLinearVelocity();
                        playerAgg.body.setLinearVelocity(new BABYLON.Vector3(0, currentVel.y, 0));
                    }
                });
            });
        }
        loadModel();

        return (scene);
    };
}
export { Playground };