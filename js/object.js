


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
}


class Circle extends Shape {
	constructor({position, radius}) {
		super(function (_pos) {
			return Math.abs(_pos.getLength() - radius);
		}, position);
	}
}


class Line extends Shape {
	constructor({y, slope}) {
		super(function (_pos) {
			return Math.sqrt(_pos.value[0] * _pos.value[0], Math.pow(_pos.value[1] - y, 2))
		}, new Vector(0, y));
	}
}