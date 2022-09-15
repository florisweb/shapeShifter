


const World = new class {
	size = new Vector(10, 10);
	shapes = [
		new Circle({
			position: new Vector(4, 4),
			radius: 2
		}),
		new Line({
			y: 2,
			slope: 10
		})
	];


	update() {
		Renderer.draw();
	}

	



}
World.update();