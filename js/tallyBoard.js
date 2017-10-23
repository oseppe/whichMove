'use strict';

class TallyBoard {
	constructor(boardElem) {
		this.boardElem = boardElem;
		this.moves = ['left', 'up', 'right', 'down', 'stay'];
	}

	clear() {
		for(let elem of this.boardElem.children) {
			let move = this.getAssociatedMove(elem.id);
			
			if (!this.moves.includes(move) || elem.firstElementChild === null || elem.lastElementChild === null) continue;

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

	indicateWinner(winner) {
		for(let elem of this.boardElem.children) {
			let move = this.getAssociatedMove(elem.id);
			
			if (winner !== move || elem.firstElementChild === null) continue;

			elem.firstElementChild.className = 'material-icons orange-darken-4';;			
		}
	}

	resetIcon(elem) {
		elem.className = 'material-icons teal-darken-2';
	}

	update(tally) {
		for(let elem of this.boardElem.children) {
			let move = this.getAssociatedMove(elem.id);
			
			if (!tally.hasOwnProperty(move) || elem.lastElementChild === null) continue;

			elem.lastElementChild.innerHTML = tally[move];
		}
	}

	movesArbiterVoteCallback(data) {
		if(!this.isVoteCallbackDataValid(data)) return;
		this.update(data['tally']);
	}

	isVoteCallbackDataValid(data) {
		return data.hasOwnProperty('tally');
	}

	movesArbiterDeclareWinnerCallback(data) {
		if(!this.isDeclareWinnerCallbackDataValid(data)) return;
		this.clear();
		this.indicateWinner(data['winner']);
	}

	isDeclareWinnerCallbackDataValid(data) {
		return data.hasOwnProperty('winner');
	}

	movesArbiterResetCallback(data) {
		this.clear();
	}
}