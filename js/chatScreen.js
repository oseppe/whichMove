'use strict';

class ChatScreen extends Observable {
	constructor(chatScreenElem) {
		super();
		this.screenElem = chatScreenElem;
	}

	addEntry(message, user) {
		this.screenElem.appendChild(this.createEntry(message));

		this.notify('addEntry', {'message': message, 'user': user});
	}

	createEntry(message, name = 'anon', picURL = 'assets/images/luxSquare.png') {
		let chatEntryDiv = document.createElement('div');
		let chatProfilePicContainer = document.createElement('div');
		let chatProfilePic = document.createElement('img');
		let chatProfileName = document.createElement('span');
		let chatEntryMessage = document.createElement('span');

		chatEntryDiv.setAttribute('class', 'chat-entry row valign-wrapper');
		chatProfilePicContainer.setAttribute('class', 'chat-profile-pic-container');
		chatProfilePic.setAttribute('class', 'chat-profile-pic');
		chatProfileName.setAttribute('class', 'chat-profile-name');
		chatEntryMessage.setAttribute('class', 'chat-entry-message');
		chatProfilePic.setAttribute('src', picURL);

		chatProfileName.innerHTML = name;
		chatProfilePicContainer.appendChild(chatProfilePic);
		chatEntryMessage.innerHTML = message;

		chatEntryDiv.appendChild(chatProfilePicContainer);
		chatEntryDiv.appendChild(chatProfileName);
		chatEntryDiv.appendChild(chatEntryMessage);

		return chatEntryDiv;
	}

	scrollToLatestEntry() {
		this.screenElem.scrollTop = this.screenElem.scrollHeight - this.screenElem.clientHeight;
	}
}