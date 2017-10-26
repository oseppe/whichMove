'use strict'

const changeWinModeText = (text) => {
	const modeIndicatorElem = document.getElementById('mode-indicator-text');
	modeIndicatorElem.innerHTML = text;
};

const indicateWinModeCallback = (data) => {
	(data['winMode'] === 1) ? changeWinModeText('most votes in 7s') : changeWinModeText('1st to reach 4 votes')
}