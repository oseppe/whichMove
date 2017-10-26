'use strict';

const tallyBoardElem = document.getElementById('votes-tally');

const validMoves = ['left', 'up', 'right', 'down', 'stay'];

const getAssociatedMove = (elemId) => {
	let position = elemId.search('y-');
	position = position + 2;

	let move = elemId.slice(position, elemId.length);

	return move;
};

// TODO: target for compose
const updateTallyBoard = (boardElem, tally) => {
		for(let elem of boardElem.children) {
			let move = getAssociatedMove(elem.id);
			
			if (!tally.hasOwnProperty(move) || elem.lastElementChild === null) continue;

			elem.lastElementChild.innerHTML = tally[move];
		}
};

const showInTallyBoardCallback = (data) => {
	updateTallyBoard(tallyBoardElem, data['tally']);
}