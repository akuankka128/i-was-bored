class Vector {
	constructor(x,y) {
		this.x = x
		this.y = y
	}

	diff(vec) {
		return new Vector(
			Math.abs(this.x - vec.x),
			Math.abs(this.y - vec.y)
		)
	}
}

function solveK(p1, p2) {
	let dY = p1.diff(p2).y
	let dX = p1.diff(p2).x

	return dY / dX
}
