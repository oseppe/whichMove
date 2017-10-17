'use strict';

class MovesArbiter {
	constructor() {
		this.moves = [];
	}

	clearMoves() {
		this.moves = [];
	}

	addMove(move) {
		this.moves.push(move);
	}

	get winner() {
		let tally = this.tallyMoves();

		let winner = '';
		let count = 0;

		// TODO: how to handle equals
		for (let move in tally) {
			
			if (tally[move] < count) continue;
			
			count = tally[move];
			winner = move;
		}

		return winner;
	}

	showTally() {
		let tally = this.tallyMoves();

		for (let i in tally) {
			console.log(`${i}: ${tally[i]}`);
		}
	}

	stringifyTally() {
		let tally = this.tallyMoves();
		let stringifiedTally = '';

		for (let i in tally) {
			if (tally[i] > 1) stringifiedTally = stringifiedTally + `${i}: ${tally[i]} votes | `;
			else stringifiedTally = stringifiedTally + `${i}: ${tally[i]} vote | `;
		}				

		return stringifiedTally;
	}

	tallyMoves() {
		// TODO: Change to map
		let tally = {};

		for (let move of this.moves) {
			move = move.toLowerCase();

			if (tally.hasOwnProperty(move)) {
				tally[move]++; 
			}

			else{
				Object.defineProperty(tally, move, { value: 1, writable: true, enumerable: true });
			}
		}

		return tally;
	}
}