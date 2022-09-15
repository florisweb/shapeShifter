


class _Renderer {
	#canvas = document.getElementById('canvas');
	#ctx = this.#canvas.getContext('2d');
	#squareSize = .05; 

	maxDistance = this.#squareSize * .5;



	draw() {
		this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
		const pxPerUnit = this.#canvas.width / World.size.value[0];

		// this.#ctx.strokeStyle = '#aaa';
		// this.#ctx.lineWidth = this.#squareSize * 2;
		// for (let x = 0; x < World.size.value[0]; x += this.#squareSize)
		// {
		// 	this.#ctx.moveTo(x * pxPerUnit, 0);
		// 	this.#ctx.lineTo(x * pxPerUnit, this.#canvas.height);

		// }
		// for (let y = 0; y < World.size.value[1]; y += this.#squareSize)
		// {
		// 	this.#ctx.moveTo(0, y * pxPerUnit);
		// 	this.#ctx.lineTo(this.#canvas.width, y * pxPerUnit);
		// }
		// this.#ctx.stroke();


		for (let x = 0; x < World.size.value[0]; x += this.#squareSize)
		{
			for (let y = 0; y < World.size.value[1]; y += this.#squareSize)
			{
				for (let shape of World.shapes)
				{
					let colDist = shape.colDisSetAtPoint(new Vector(x, y));
					if (colDist.dist === false) continue;
					if (colDist.dist > this.maxDistance && colDist.dist !== true) continue;

					// this.#ctx.fillStyle = 'rgba(255, 0, 0, ' + distance / 5 + ')';
					this.#ctx.fillStyle = colDist.color.toRGB();
					this.#ctx.fillRect(x * pxPerUnit, y * pxPerUnit, pxPerUnit * this.#squareSize, pxPerUnit * this.#squareSize);
					this.#ctx.fill();
				}
			}
		}
	}
}
const Renderer = new _Renderer();
