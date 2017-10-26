'use strict';

const moves = ['left', 'up', 'right', 'down', 'stay'];

const regularLines = [
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

const getRandomNumberBetween = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;	
}

const getLine = (lines) => {
	let index = getRandomNumberBetween(0, (lines.length - 1));

	return lines[index];
};

const sayMove = () => {
	return getLine(moves);
}

const sayRegularLine = () => {
	return getLine(regularLines);
}

const chat = () => {
	return (getRandomNumberBetween(1, 4) === 1) ? sayRegularLine() : sayMove();
}

const randos = [
	{'userName': 'pen', 'userPicUrl': 'assets/images/fireLuxSquare.png'},
	{'userName': 'paper', 'userPicUrl': 'assets/images/stormLuxSquare.png'},
	{'userName': 'clip',  'userPicUrl': 'assets/images/mysticLuxSquare.png'},
	{'userName': 'cord',  'userPicUrl': 'assets/images/natureLuxSquare.png'},
];

const randomChattingId = setInterval( () => {
		randos.map((user) => {
			eventBus.notify('sendChat', {'message': chat(), 'userName': user['userName'], 'userPicUrl': user['userPicUrl']});
		});
	}
	, 5000);
