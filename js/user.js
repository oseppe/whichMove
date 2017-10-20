class User {
	constructor(name, picUrl) {
		this.name = name;
		this._picUrl = picUrl;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get picUrl() {
		return this._picUrl;
	}
	// name colour
}