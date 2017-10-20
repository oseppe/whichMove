'use strict';

class MovesArbiter {
	constructor() {
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

		let valid = lowercaseMessage === 'left' ||
					lowercaseMessage === 'up' ||
					lowercaseMessage === 'right' ||
					lowercaseMessage === 'down' ||
					lowercaseMessage === 'stay'

		if (valid) console.log('message is a move!');
		else console.log('not a move boo');

		return valid;

		// return lowercaseMessage === 'left' ||
		// 			lowercaseMessage === 'up' ||
		// 			lowercaseMessage === 'right' ||
		// 			lowercaseMessage === 'down' ||
		// 			lowercaseMessage === 'stay'
	}

	chatCallback(data) {
		if (!this.isCallbackDataValid(data)) return;
		this.parseChatMessage(data['message'], data['user']);
	}

	isCallbackDataValid(data) {
		return data.hasOwnProperty('message') && data.hasOwnProperty('message');
	}

	// notify(event, data) {
	// 	if (this.subscribableEvents.hasOwnProperty(event)) {
	// 		for(let callback of this.subscribableEvents[event]) {
	// 			callback(data);
	// 		}
	// 	}
	// }

	parseChatMessage(message, user) {
		if (!this.isMove(message)) return;

		this.addMove(message.toLowerCase());

		// this.notify('parseChatMessage', { 'message': message, 'user': user });
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

	// subscribe(event, callback) {
	// 	if (this.subscribableEvents.hasOwnProperty(event)) this.subscribableEvents[event].push(callback);
	// 	else {
	// 		this.subscribableEvents[event] = [callback];
	// 	}
	// }

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