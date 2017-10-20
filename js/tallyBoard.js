'use strict';

class TallyBoard {
	constructor(boardElem) {
		this.boardElem = boardElem;
		this.moves = ['left', 'up', 'right', 'down', 'stay'];
	}

	clear() {
		for(let elem of this.boardElem.children) {
			let move = this.getAssociatedMove(elem.id);
			
			if (!moves.includes(move) || elem.lastElementChild === null) continue;

			elem.lastElementChild.innerHTML = 0;

			this.resetIcon(elem.firstElementChild);
		}
	}

	getAssociatedMove(elemId) {
		let position = elemId.search('y-');
		position = position + 2;

		let move = elemId.slice(position, elemId.length);

		return move;
	}

	indicateWinner(elem) {
		elem.className = 'material-icons orange-darken-4';
	}

	resetIcon(elem) {
		elem.className = 'material-icons teal-darken-2';
	}

	update(tally, winner = '') {
		for(let elem of this.boardElem.children) {
			let move = this.getAssociatedMove(elem.id);
			
			if (!tally.hasOwnProperty(move) || elem.lastElementChild === null) continue;

			elem.lastElementChild.innerHTML = tally[move];

			if (!this.hasWinner) return;

			if (move === winner) this.indicateWinner(elem.firstElementChild);
			else this.resetIcon(elem.firstElementChild);
		}
	}

	hasWinner(winner) {
		return winner !== '' && winner !== null && winner !== undefined;
	}

	movesArbiterVoteCallback(data) {
		if(!this.isVoteCallbackDataValid(data)) return;
		this.update(data['tally']);
	}

	isVoteCallbackDataValid(data) {
		return data.hasOwnProperty('tally');
	}
}