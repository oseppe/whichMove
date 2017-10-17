'use strict';

class TallyBoard {
	constructor(boardElem) {
		this.boardElem = boardElem
	}

	clear() {

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

	update(tally, winner) {
		for(let elem of this.boardElem.children) {
			let move = this.getAssociatedMove(elem.id);
			
			if (!tally.hasOwnProperty(move) || elem.lastElementChild === null) continue;

			elem.lastElementChild.innerHTML = tally[move];

			if (move === winner) this.indicateWinner(elem.firstElementChild);
			else this.resetIcon(elem.firstElementChild);
		}
	}	
}