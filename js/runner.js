'use strict';

class Runner {
	constructor(figureHandler, 
							movesArbiter, 
							movesGenerator, 
							chatScreen,
              tallyBoard,
              voteBoard, 
							inputElem) {
		this.figureHandler = figureHandler;
		this.movesArbiter = movesArbiter;
		this.movesGenerator = movesGenerator;
		this.chatScreen = chatScreen;
    this.tallyBoard = tallyBoard;
    this.voteBoard = voteBoard;
		this.inputElem = inputElem;
    this.users = [];
	}

  addUser(user) {
    this.users.push(user);
  }

	run() {
		// TODO: add validator
		let rounds = +(this.inputElem.value);

		this.inputElem.value = "";
		// TODO: Make votesCount editable via a settings object
		this.startRounds(rounds, 30);
	}

	startRound(votesCount) {
		for (let i = 0; i < votesCount; i++) {
			let stringifiedMove = movesGenerator.stringifiedMove;

			this.movesArbiter.addMove(stringifiedMove);
      this.voteBoard.addEntry(stringifiedMove);
		}
	}

	startRounds(rounds = 1, votesCount = 10) {
		let runner = this;

		setTimeout(function (){
			runner.startRound(votesCount);

			let stringifiedMove = runner.movesArbiter.winner;

			runner.figureHandler.move(stringifiedMove);
			runner.chatScreen.addEntry(stringifiedMove);
			runner.chatScreen.addEntry(runner.movesArbiter.stringifyTally());
			runner.chatScreen.scrollToLatestEntry();

      runner.tallyBoard.update(runner.movesArbiter.tallyMoves(), stringifiedMove);

			runner.movesArbiter.clearMoves();

			rounds--;

			if (rounds > 0) runner.startRounds(rounds, votesCount);
			
		}, 500);	
	}
}