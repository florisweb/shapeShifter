class Color {
	value;
	constructor(r, g, b) {
		this.value = [r, g, b];
	}
	toRGB() {
		return 'rgb(' + this.value[0] + ',' + this.value[1] + ', ' + this.value[2] + ')';
	}

	merge(_colorB, _perc = .5) {
		this.value[0] = this.value[0] * _perc + _colorB.value[0] * (1 - _perc);
		this.value[1] = this.value[1] * _perc + _colorB.value[1] * (1 - _perc);
		this.value[2] = this.value[2] * _perc + _colorB.value[2] * (1 - _perc);
		return this;
	}
	copy() {
		return new Color(this.value[0], this.value[1], this.value[2]);
	}
}