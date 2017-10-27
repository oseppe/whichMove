'use strict'

const moveSprite = (figure, canvasWidth, canvasHeight, direction) => {
	let lowerCaseDirection = direction.toLowerCase();

	switch(lowerCaseDirection) {
		case 'left':
			figure.moveX('left', canvasWidth);
			break;
		case 'right':
			figure.moveX('right', canvasWidth);
			break;
		case 'up':
			figure.moveY('up', canvasHeight);
			break;
		case 'down':
			figure.moveY('down', canvasHeight);
			break;
	}
}

// TODO: Remove the if
const moveSpriteCallback = (data) => {
	if ( !data.hasOwnProperty('winner') || data['winner'] === '') return;
	moveSprite(sprite, canvas.width, canvas.height, data['winner']);
}    