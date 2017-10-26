class Settings {
	constructor(settingsElem) {
		super();
		this.settingsElem = settingsElem;
		this.attachEventListeners();
	}

	attachEventListeners() {
		let settings = this;
		for (let radio of this.settingsElem) {
			radio.addEventListener('click', (event) => {
				let winMode = +event.srcElement.defaultValue;
				settings.winModeChanged(winMode);
			});
		}
	}

	winModeChanged(mode = 0) {
		// this.notify('winModeChanged', {'winMode': mode});
	}
}