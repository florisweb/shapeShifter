const Infinite = 10000000000;


const World = new class {
	size = new Vector(10, 10);
	shapes = [
		// new Circle({
		// 	position: new Vector(4, 4),
		// 	radius: 2,
		// 	filled: true,
		// }),
		// new Circle({
		// 	position: new Vector(7, 4),
		// 	radius: 2,
		// 	filled: true,
		// }),

		// new ShapeMerger({
		// 	shapeA: new Circle({
		// 		position: new Vector(0, 2),
		// 		radius: 1.5,
		// 		filled: true,
		// 	}),
		// 	shapeB: new Circle({
		// 		position: new Vector(7, 2),
		// 		radius: 2,
		// 		filled: true
		// 	}),
		// 	operator: (a, b, Ba, Bb) => (Ba || Bb) && !(Ba && Bb)
		// }),
		new ShapeMerger({
			shapeA: new Circle({
				position: new Vector(2, 4),
				radius: 1,
				filled: true,
				color: new Color(0, 0, 255),
			}),
			shapeB: new Circle({
				position: new Vector(5, 5),
				radius: 1,
				filled: true
			}),
			distOperator: (a, b, Ba, Bb) => Ba || Bb || 5 - Math.abs(Math.pow(a, 2) - Math.pow(b, 2)),
			colorOperator: (a, b, Ba, Bb, colA, colB) => colA.copy().merge(colB, a / b),
		})

		// new Line({
		// 	y: 2,
		// 	slope: Infinite
		// }),
		// new TestShape({
		// 	position: new Vector(7, 6)
		// })
	];


	update() {
		let start = new Date();
		Renderer.draw();
		World.shapes[0].shapeA.position.value[0] += .01;
		// World.shapes[1].shapeA.position.value[0] += .01;
		// console.warn(new Date() - start + 'ms');

		requestAnimationFrame(World.update);
	}

	



}
World.update();