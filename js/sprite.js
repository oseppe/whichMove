'use strict';

class Sprite {
	constructor(startX, startY, width, height){
		this.height = height;
		this.width = width;
		this.alpha = 1;
		this.alphaChange = 0.05;
		this.x = startX;
		this.y = startY;
		this.xChange = width;
		this.yChange = height;
	}

	draw(ctx) {
		ctx.fillStyle = `rgba(39, 174, 96, ${this.alpha})`;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    return this;
	}

	flicker() {
		if (this.alpha >= 1 || this.alpha <= 0) {
          this.alphaChange = this.alphaChange * -1;
        } 
        
    this.alpha = this.alpha + this.alphaChange;
    return this;
	}

	moveY(direction, canvasHeight) {
		// using a local variable instead of the class variable
		// cos dont want to handle the resetting of the sign
		// of change after use
		let change = this.yChange;

		if (direction === 'up') change = change * -1;

    let newY = this.y + change;

    if (direction === 'up') {
      newY = (newY < 0) ? 0 : newY;
    }        
    else if (direction === 'down') {
      let downBorder = canvasHeight - this.height;

      newY = (newY >= downBorder) ? downBorder : newY;
    }

    this.y = newY;

    return this;
	}

	moveX(direction = 'left', canvasWidth) {
		// using a local variable instead of the class variable
		// cos dont want to handle the resetting of the sign
		// of change after use
		let change = this.xChange;
        
    if (direction === 'left') change = change * -1;

    let newX = this.x + change;

    if (direction === 'left') {
      newX = (newX < 0) ? 0 : newX;
    }
    else if (direction === 'right') {
      let rightBorder = canvasWidth - this.width;

      newX = (newX >= rightBorder) ? rightBorder : newX;
    }

    this.x = newX;

    return this;
	}
}