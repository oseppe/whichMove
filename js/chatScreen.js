'use strict';

class ChatScreen {
	constructor(chatScreenElem) {
		this.screenElem = chatScreenElem;
		this.subscribableEvents = {};
	}

	addEntry(message) {
		this.screenElem.appendChild(this.createEntry(message));

		if (this.subscribableEvents.hasOwnProperty('addEntry')) {
			for(let callback of this.subscribableEvents['addEntry']) {
				callback(message);
			}
		}
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

	subscribe(event, callback) {
		if (this.subscribableEvents.hasOwnProperty(event)) this.subscribableEvents[event].push(callback);
		else {
			this.subscribableEvents[event] = [callback];
		}
	}
}