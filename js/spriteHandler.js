'use strict';

class SpriteHandler {
	constructor(sprite, canvasWidth, canvasHeight) {
		this.figure = sprite;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
	}

	move(direction) {
		let lowerCaseDirection = direction.toLowerCase();

		switch(lowerCaseDirection) {
			case 'left':
				this.figure.moveX('left', this.canvasWidth);
				break;
			case 'right':
				this.figure.moveX('right', this.canvasWidth);
				break;
			case 'up':
				this.figure.moveY('up', this.canvasHeight);
				break;
			case 'down':
				this.figure.moveY('down', this.canvasHeight);
				break;
		}
	}
}