class SpeechGenerator {
	constructor() {
		this.lines = [
			"The sun is shining - we should too",
			"Any excuse to twirl my wand!",
			"Burn away the shadows!",
			"Take courage in the light!",
			"Home is where the spark is",
			"Ooh, I've never been here before",
			"I don't have dark secrets - I have bright ones",
			"The superior tactic is to never give up",
			"Double rainbow... what does it mean?",
			"Well, a double rainbow is a phenomenon of optics that displays a spectrum of light due to the sun shining on droplets of moisture in the atmosphere. Does that explain it?",
			"We should try being friends first, no?",
			"You don't like me? Well, I'd rather talk to a statue",
			"Being a hero kind of runs in the family",
			"Does this make me a lightweaver?",
			"By the light!",
			"Losing is just an opportunity to shine even brighter",
			"All these elements available and you choose to be salty!",
			"Gold becomes goods. Basic economic alchemy!",
			"Mistakes only prove you're trying",
			"You should really lighten up",
			"What you don't see can hurt you",
			"No gust, no glory",
			"Inhale - magic, exhale - purpose",
			"Baffled, bewildered, bewitched!",
			"To be fluid is to adapt"
		];
	}

	get line() {
		let min = 0;
		let max = this.lines.length - 1;
		
		let index = Math.floor(Math.random() * (max - min + 1)) + min;

		return this.lines[index];
	}
}