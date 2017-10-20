'use strict';

class MovesArbiter extends Observable {
	constructor() {
		super();
		this.moves = [];
	}

	clearMoves() {
		this.moves = [];
	}

	vote(move, user) {
		this.addMove(move);
		
		// TODO: should i store state in tallyBoard so that don't need keep calling tallyMoves?
		this.notify('vote', { 'vote': move, 'user': user, 'tally': this.tallyMoves() });

		if (!this.hasWinner()) return;

		this.notify('winnerChosen', { 'winner': this.winner});
	}

	addMove(move) {
		this.moves.push(move);
	}

	get winner() {
		if (!this.hasWinner()) return 'no winner yet';

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

	hasWinner() {
		let votes = Object.values(this.tallyMoves());

		let winningCriterion = votes.find( (count) => {return count === 2;});

		return winningCriterion !== undefined;
	}

	isCallbackDataValid(data) {
		return data.hasOwnProperty('message') && data.hasOwnProperty('user');
	}

	parseChatMessage(message, user) {
		if (!this.isMove(message)) return;

		this.vote(message.toLowerCase(), user);
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