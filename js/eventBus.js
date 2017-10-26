class EventBus {
	constructor() {
		this.subscribableEvents = {};
	}

	notify(event, data) {
		if (!this.subscribableEvents.hasOwnProperty(event)) return;
		
		for(let callback of this.subscribableEvents[event]) {
			callback(data);
		}
	}

	subscribe(event, callback, context) {
		if (this.subscribableEvents.hasOwnProperty(event)) this.subscribableEvents[event].push(callback.bind(context));
		else {
			this.subscribableEvents[event] = [callback.bind(context)];
		}
	}
}