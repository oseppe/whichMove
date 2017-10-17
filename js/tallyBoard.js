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

	indicateWinner(winner) {
		
	}

	update(tally, winner) {
		for(let elem of this.boardElem.children) {
			let move = this.getAssociatedMove(elem.id);
			
			if (!tally.hasOwnProperty(move) || elem.lastElementChild === null) continue;

			console.log(`${move} = ${tally[move]}`);

			elem.lastElementChild.innerHTML = tally[move];
		}
	}	
}