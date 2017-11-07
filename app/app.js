import React, { Component } from 'react'
import { render } from 'react-dom'
import LeftPane from './components/leftPane/leftPane'
import RightPane from './components/rightPane/rightPane'

class App extends Component {

	handleWinModeChange(event) {
		const target = event.target;
    const value = target.value;
    
    console.log(`${target.name}: ${value}`);
	}

	changeWinMode() {

	}

	render() {
		return(
			<div className="row">
				<LeftPane />
				<RightPane handleWinModeChange={ this.handleWinModeChange }/>
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('app')
)

// handleWinModeChange={ this.handleWinModeChange }