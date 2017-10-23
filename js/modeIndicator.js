class ModeIndicator {
	constructor(modeIndicatorElem) {
		this.modeIndicatorElem = modeIndicatorElem;
	}

	settingsWinModeChangedCallback(data) {
		if(!this.isWinModeChangedCallbackDataValid(data)) return;

		if (data['winMode'] === 1) this.modeIndicatorElem.innerHTML = 'most votes in 7s';
		else this.modeIndicatorElem.innerHTML = '1st to reach 4 votes';
	}

	isWinModeChangedCallbackDataValid(data) {
		return data.hasOwnProperty('winMode');
	}
}