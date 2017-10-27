'use strict';

class MovesArbiter {
	constructor() {
		this.moves = [];
		this.elemUpdaters = [];
		this.currentMode = 0;
		this.timerId = '';
	}

	get currentMode() {
		return this._currentMode;
	}

	set currentMode(value) {
		this.reset();

		if (value === 1) {
			this._currentMode = 1;
			this.declareWinnerRegularly();
		}
		else this._currentMode = 0;
	}

	addMove(move) {
		this.moves.push(move);
	}

	addElemUpdater(elemUpdater) {
		this.elemUpdaters.push(elemUpdater);
	}

	sendChatCallback(data) {
		if (!this.isSendChatCallbackDataValid(data)) return;
		this.parseChatMessage(data['message'], {'name': data['userName'], 'picUrl': data['userPicUrl']});
	}

	clearMoves() {
		this.moves = [];
	}

	declareWinner() {
		let tally = this.tallyMoves();

		let winner = '';
		let count = 0;

		// TODO: how to handle equals
		for (let move in tally) {
			
			if (tally[move] < count) continue;
			
			count = tally[move];
			winner = move;
		}

		this.clearMoves();

		return winner;
	}

	declareWinnerRegularly() {
		this.timerId = setInterval(() => {
			let winner = this.declareWinner();

			let data = {
				'winner': winner,
				'tally': {'left': 0, 'up': 0, 'right': 0, 'down': 0, 'stay': 0}
			};
			
			this.runElemUpdaters(data);
		}, 7000);
	}

	isSendChatCallbackDataValid(data) {
		return data.hasOwnProperty('message');
	}

	isFirstPastPostWinnerConditionsMet() {
		let votes = Object.values(this.tallyMoves());

		return votes.includes(4);
	}

	isMove(message) {
		let lowercaseMessage = message.toLowerCase();

		return lowercaseMessage === 'left' ||
					lowercaseMessage === 'up' ||
					lowercaseMessage === 'right' ||
					lowercaseMessage === 'down' ||
					lowercaseMessage === 'stay'
	}

	isModeFirstPastPost() {
		return this._currentMode === 0;
	}

	parseChatMessage(message, user) {
		if (!this.isMove(message)) return;

		this.vote(message.toLowerCase(), user);
	}

	reset() {
		this.clearMoves();

		if (this.timerId !== '') {
			clearInterval(this.timerId);
			this.timerId = '';
		}

		let resetData = {'tally': {'left': 0, 'up': 0, 'right': 0, 'down': 0, 'stay': 0}};
		this.runElemUpdaters(resetData);
	}

	winModeChangedCallback(data) {
		if (!this.isWinModeChangedCallbackDataValid(data)) return;
		if (this.currentMode === data['winMode']) return;

		this.currentMode = data['winMode'];
	}

	isWinModeChangedCallbackDataValid(data) {
		return data.hasOwnProperty('winMode');
	}

	showTally() {
		let tally = this.tallyMoves();

		for (let i in tally) {
			console.log(`${i}: ${tally[i]}`);
		}
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

	vote(move, user) {
		this.addMove(move);

		let data = {
			'message': move, 
			'userName': user['name'],
			'userPicUrl': user['picUrl'],
			'tally': this.tallyMoves(),
			'winner': ''
		}

		if (this.isModeFirstPastPost() && this.isFirstPastPostWinnerConditionsMet()) data['winner'] = this.declareWinner();

		this.runElemUpdaters(data);
	}

	runElemUpdaters(data) {
		this.elemUpdaters.map( (elemUpdater) => elemUpdater(data) );
	}
}