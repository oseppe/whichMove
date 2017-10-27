'use strict';

const tallyBoardElem = document.getElementById('votes-tally');

const validMoves = ['left', 'up', 'right', 'down', 'stay'];

const getAssociatedMove = (elemId) => {
	let position = elemId.search('y-');
	position = position + 2;

	let move = elemId.slice(position, elemId.length);

	return move;
};

const resetTallyBoardEntry = (elem) => {
	elem.firstElementChild.className = 'material-icons teal-darken-2';
	elem.lastElementChild.innerHTML = 0;
};

// TODO: target for compose
const indicateWinner = (boardElem, winner) => {
	for(let elem of boardElem.children) {

		if (elem.firstElementChild === null || elem.lastElementChild === null) continue;

		let move = getAssociatedMove(elem.id);

		resetTallyBoardEntry(elem);

		if (winner !== move) continue;

		elem.firstElementChild.className = 'material-icons orange-darken-4';;
	}
}

// TODO: target for compose
const updateTallyBoard = (boardElem, tally) => {
	for(let elem of boardElem.children) {
		let move = getAssociatedMove(elem.id);
		
		if (!tally.hasOwnProperty(move) || elem.lastElementChild === null) continue;

		elem.lastElementChild.innerHTML = tally[move];
	}
};

// TODO: needs validation for data['winner']
const showInTallyBoardCallback = (data) => {
	if ( !data.hasOwnProperty('winner') || data['winner'] === '') updateTallyBoard(tallyBoardElem, data['tally']) 
	else indicateWinner(tallyBoardElem, data['winner']) ;
}