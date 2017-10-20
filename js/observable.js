class Observable {
	constructor() {
		this.subscribableEvents = {};
	}

	notify(event, data) {
		if (this.subscribableEvents.hasOwnProperty(event)) {
			for(let callback of this.subscribableEvents[event]) {
				callback(data);
				// listener['callback'](listener['caller'], data);
			}
		}
	}

	subscribe(event, callback, context) {
		if (this.subscribableEvents.hasOwnProperty(event)) this.subscribableEvents[event].push(callback.bind(context));
		else {
			// this.subscribableEvents[event] = [{'caller': caller, 'callback': callback}];
			this.subscribableEvents[event] = [callback.bind(context)];
		}
	}
}