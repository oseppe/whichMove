'use strict';

const chatScreenElem = document.getElementById('chat-screen');
const votesScreenElem = document.getElementById('votes-list');

const createEntryForChat = (message, name = 'anon', picURL = 'assets/images/luxSquare.png') => {
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
};

const createEntryForVotes = (message, name = 'anon') => {
	let voteEntryDiv = document.createElement('div');
  let voteProfileName = document.createElement('span');
  let voteEntryMessage = document.createElement('span');

  voteProfileName.innerHTML = name;
  voteEntryMessage.innerHTML = ` voted for ${message}`;

  voteEntryDiv.appendChild(voteProfileName);
  voteEntryDiv.appendChild(voteEntryMessage);

  return voteEntryDiv;
};

const scrollToLatestEntry = (screenElem) => {
	screenElem.scrollTop = screenElem.scrollHeight - screenElem.clientHeight;
};

const addEntryToScreen = (screenElem, createEntry, data) => {
	screenElem.appendChild(createEntry(data['message'], data['userName'], data['userPicUrl']));

	scrollToLatestEntry(screenElem);
};

const showInChatCallback = (data) => {
	addEntryToScreen(chatScreenElem, createEntryForChat, data);
}

const showInVotesCallback = (data) => {
	if (!data.hasOwnProperty('message')) return;
	addEntryToScreen(votesScreenElem, createEntryForVotes, data);	
}