'use strict';

class VoteBoard {
  constructor(voteBoardElem) {
    this.voteBoardElem = voteBoardElem;
  }

  addEntry(vote) {
    this.voteBoardElem.appendChild(this.createEntry(` voted for ${vote}`));
    this.scrollToLatestEntry();
  }

  createEntry(message, name = 'anon') {
    let voteEntryDiv = document.createElement('div');
    let voteProfileName = document.createElement('span');
    let voteEntryMessage = document.createElement('span');

    voteProfileName.innerHTML = name;
    voteEntryMessage.innerHTML = message;

    voteEntryDiv.appendChild(voteProfileName);
    voteEntryDiv.appendChild(voteEntryMessage);

    return voteEntryDiv;
  }

  scrollToLatestEntry() {
    this.voteBoardElem.scrollTop = this.voteBoardElem.scrollHeight - this.voteBoardElem.clientHeight;
  }
}