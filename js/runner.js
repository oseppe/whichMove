'use strict';

class Runner {
	constructor(chatScreen) {
		this.chatScreen = chatScreen;
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