import { Vector3, MeshBuilder, PhysicsAggregate, PhysicsShapeType } from "@babylonjs/core";

export class Ground
{
	private scene: BABYLON.Scene;
	private points: BABYLON.Vector3[];
	private depth: number;
	private name: string;
	private groundMesh: BABYLON.Mesh | null;
	private physicsAggregate: BABYLON.PhysicsAggregate | null = null;

	constructor(scene: BABYLON.Scene, pointsArray: BABYLON.Vector3[])
    {
		this.scene = scene;
		this.points = pointsArray;
		this.depth = 1;
		this.name = "ground";
		if (this.points.length > 0) {
			this.groundMesh = MeshBuilder.ExtrudePolygon(
                this.name,
                {
                    shape: this.points,
                    depth: this.depth,
                },
                this.scene
            );
			this.groundMesh.rotation.x = -Math.PI / 2;
			this.groundMesh.position = new Vector3(-62, 0, -this.depth / 2);
			if (this.scene.isPhysicsEnabled()) {
				this.physicsAggregate = new PhysicsAggregate(this.groundMesh, PhysicsShapeType.MESH, { mass: 0 }, this.scene);
			} else {
				console.warn("Physics engine is not enabled on the scene. Ground physics aggregate skipped.");
			}
		}
		else
			this.groundMesh = null;
	}
}