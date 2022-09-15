


class _Renderer {
	#canvas = document.getElementById('canvas');
	#ctx = this.#canvas.getContext('2d');
	#squareSize = .05; 



	draw() {
		this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
		const pxPerUnit = this.#canvas.width / World.size.value[0];

		for (let x = 0; x < World.size.value[0]; x += this.#squareSize)
		{
			for (let y = 0; y < World.size.value[1]; y += this.#squareSize)
			{
				for (let shape of World.shapes)
				{
					let distance = shape.distanceToPoint(new Vector(x, y));
					if (distance > this.#squareSize * .05) continue;
					// this.#ctx.fillStyle = 'rgba(255, 0, 0, ' + distance / 5 + ')';
					this.#ctx.fillStyle = '#000';
					this.#ctx.fillRect(x * pxPerUnit, y * pxPerUnit, pxPerUnit, pxPerUnit);
					this.#ctx.fill();
				}
			}
		}
	}
}
const Renderer = new _Renderer();
