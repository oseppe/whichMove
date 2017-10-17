'use strict';

class MovesGenerator {
	stringify(move) {
		let stringifiedMove = "";

		switch(move) {
			case -2:
				stringifiedMove = "down";
				break;
			case -1:
				stringifiedMove = "left";
				break;
			case 0:
				stringifiedMove = "stay";
				break;
			case 1:
				stringifiedMove = "right";
				break;
			case 2:
				stringifiedMove = "up";
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