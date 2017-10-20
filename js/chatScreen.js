'use strict';

class ChatScreen {
	constructor(chatScreenElem) {
		this.screenElem = chatScreenElem;
		this.subscribableEvents = {};
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

	notify(event, data) {
		if (this.subscribableEvents.hasOwnProperty(event)) {
			for(let callback of this.subscribableEvents[event]) {
				callback(data);
				// listener['callback'](listener['caller'], data);
			}
		}
	}

	scrollToLatestEntry() {
		this.screenElem.scrollTop = this.screenElem.scrollHeight - this.screenElem.clientHeight;
	}

	subscribe(event, callback, context) {
		if (this.subscribableEvents.hasOwnProperty(event)) this.subscribableEvents[event].push(callback.bind(context));
		else {
			// this.subscribableEvents[event] = [{'caller': caller, 'callback': callback}];
			this.subscribableEvents[event] = [callback.bind(context)];
		}
	}
}