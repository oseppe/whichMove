'use strict';

class MovesArbiter extends Observable {
	constructor() {
		super();
		this.moves = [];
		this.subscribableEvents = {};
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

	isMove(message) {
		let lowercaseMessage = message.toLowerCase();

		return lowercaseMessage === 'left' ||
					lowercaseMessage === 'up' ||
					lowercaseMessage === 'right' ||
					lowercaseMessage === 'down' ||
					lowercaseMessage === 'stay'
	}

	chatCallback(data) {
		if (!this.isCallbackDataValid(data)) return;
		this.parseChatMessage(data['message'], data['user']);
	}

	isCallbackDataValid(data) {
		return data.hasOwnProperty('message') && data.hasOwnProperty('message');
	}

	parseChatMessage(message, user) {
		if (!this.isMove(message)) return;

		this.addMove(message.toLowerCase());

		this.notify('parseChatMessage', { 'message': message, 'user': user });
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