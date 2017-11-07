import React, { Component } from 'react'

class GameScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {alpha: 1, alphaChange: 0.05}
	}

	componentDidMount() {
		const canvas = this.refs.canvas;
		
		this.draw(canvas);
	}

	draw(canvas) {
		let alpha = this.state.alpha;
		let alphaChange = this.state.alphaChange;

		// make it flicker
		if (alpha >= 1 || alpha <= 0) alphaChange = alphaChange * -1;
		
  	alpha = alpha + alphaChange;

		if (canvas.getContext) {
	    let context = canvas.getContext('2d');

	    let figureWidth = 20;
	    let figureHeight = 20;

	    let x = (canvas.width / 2) - (figureWidth / 2);
	    let y = (canvas.height / 2) - (figureHeight / 2);

			context.clearRect(0,0, canvas.width, canvas.height);

			context.fillStyle = `rgba(39, 174, 96, ${alpha})`;
  		context.fillRect(x, y, figureWidth, figureHeight);
	  }

	  this.setState({alpha, alphaChange});

  	requestAnimationFrame(() => this.draw(canvas));
	}

	render() {
		return (
			<div className="s12 m6 l6 center-align">
				<canvas id="canvas" height="300" style={{"border": "1px solid black"}} ref="canvas">
					Please update your browser or download the <a href="https://www.google.com/chrome/browser/desktop/index.html">latest Google Chrome browser</a>
				</canvas>	
			</div>
		)
	}
	
}

export default GameScreen;