class MovesGenerator {
	stringify(move) {
		let stringifiedMove = "";

		switch(move) {
			case -2:
				stringifiedMove = "Down";
				break;
			case -1:
				stringifiedMove = "Left";
				break;
			case 0:
				stringifiedMove = "Stay";
				break;
			case 1:
				stringifiedMove = "Right";
				break;
			case 2:
				stringifiedMove = "Up";
				break;
		}

		return stringifiedMove;
	}

	get move() {
		let min = -2;
		let max = 2;
		
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Returns human readable move
	get stringifiedMove() {
		
		return this.stringify(this.move);
	}
}