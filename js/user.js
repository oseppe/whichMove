class User {
	constructor(name, picUrl) {
		this.name = name;
		this.picUrl = picUrl;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get picUrl() {
		return this.picUrl;
	}

	// name colour
}