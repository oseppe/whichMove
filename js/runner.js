'use strict';

class Runner {
	constructor(figureHandler, 
							movesArbiter, 
							chatScreen,
              tallyBoard,
              voteBoard) {
		this.figureHandler = figureHandler;
		this.movesArbiter = movesArbiter;
		this.chatScreen = chatScreen;
    this.tallyBoard = tallyBoard;
    this.voteBoard = voteBoard;
    this.users = [];
	}

  addUser(user) {
    this.users.push(user);
  }

	run() {
    let runner = this;
		setInterval(function(){
      for (let i = 0; i < runner.users.length; i++) {
        let user = runner.users[i];
        runner.chatScreen.addEntry(user.chat(), {'name': user.name, 'picUrl': user.picUrl});
      }
    }, 5000);
	}
}