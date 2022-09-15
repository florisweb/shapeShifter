


class Shape {
	position = new Vector(0, 0);
	#shapeFunction;
	constructor(_shapeFunction, _position = Vector(0, 0)) {
		this.#shapeFunction = _shapeFunction;
		this.position = _position;
	}


	distanceToPoint(_pos) {
		let relativePos = _pos.difference(this.position);
		return this.#shapeFunction(relativePos);
	}
	
	colDisSetAtPoint(_pos) {
		let relativePos = _pos.difference(this.position);
		return this.#shapeFunction(relativePos);
	}
}


class Circle extends Shape {
	constructor({position, radius, filled, color}) {
		super(function (_pos) {
			let dist = _pos.getLength() - radius;
			if (filled && dist < 0) dist = 0;
			return {
				dist: Math.abs(dist),
				color: color ? color : new Color(255, 0, 0),
			}
		}, position);
	}
}


// class Line extends Shape {
// 	constructor({y = 0, slope = 1}) {
// 		let slopeInv = 1 / slope;
// 		let dev = 1 / (slope + slopeInv);
// 		super(function (_pos) {
// 			let x = ((_pos.value[1] + slopeInv * _pos.value[0]) - y) * dev;
// 			let intPos = new Vector(
// 				x,
// 				slope * x + y
// 			);
		
// 			return _pos.difference(intPos).getLength();
// 		}, new Vector(0, y));
// 	}
// }

// class LineSegment extends Shape {
// 	constructor({position, slope = 1, length}) {
// 		let slopeInv = 1 / slope;
// 		let dev = 1 / (slope + slopeInv);
// 		super(function (_relPos) {
// 			let x = ((_pos.value[1] + slopeInv * _pos.value[0]) - y) * dev;
// 			let intPos = new Vector(
// 				x,
// 				slope * x + y
// 			);
		
// 			return {
// 				dist: _pos.difference(intPos).getLength(),
// 				color: new Color(255, 0, 0),
// 			}
// 		}, new Vector(0, y));
// 	}
// }


// class TestShape extends Shape {
// 	constructor({position}) {
// 		super(function (_relPos) {
		
// 			return {
// 				dist: new Vector(_relPos.value[1], _relPos.value[0]).getLength(),
// 				color: new Color(255, 0, 0),
// 			}
// 		}, position);
// 	}
// }


class ShapeMerger {
	shapeA;
	shapeB;
	#colorOperator;
	#distOperator;

	constructor({shapeA, shapeB, distOperator, colorOperator}) {
		this.shapeA = shapeA;
		this.shapeB = shapeB;
		this.#distOperator = distOperator;
		this.#colorOperator = colorOperator;
	}

	colDisSetAtPoint(_pos) {
		let colDisA = this.shapeA.colDisSetAtPoint(_pos);
		let colDisB = this.shapeB.colDisSetAtPoint(_pos);
		let dist = this.#distOperator(colDisA.dist, colDisB.dist, colDisA.dist < Renderer.maxDistance, colDisA.dist < Renderer.maxDistance); 
		return {
			dist: dist,
			color: dist === true || dist < Renderer.maxDistance ? this.#colorOperator(colDisA.dist, colDisB.dist, colDisA.dist < Renderer.maxDistance, colDisA.dist < Renderer.maxDistance, colDisA.color, colDisB.color) : new Color(0, 0, 0)
		}
	}

}




// class Rect extends Shape {
// 	constructor({position, size}) {
// 		let lines = [
			
// 		];
// 		super(function (_pos) {

// 			let closest = 

// 			let dx;
// 			let dy;



		
// 			return _pos.difference(intPos).getLength();
// 		}, position);
// 	}

// }