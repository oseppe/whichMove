import React, { Component } from 'react'
import { render } from 'react-dom'
import LeftPane from './components/leftPane/leftPane'
import RightPane from './components/rightPane/rightPane'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			winModeExplanation: '1st to reach 4 votes'
		}

		this.handleWinModeChange = this.handleWinModeChange.bind(this);
	}

	handleWinModeChange(event) {
		const target = event.target;
    const value = target.value;
    const winModeExplanations = ['1st to reach 4 votes', 'most votes in 7s'];

    if(+value < winModeExplanations.length) this.setState({winModeExplanation: winModeExplanations[+value]})
	}

	handleSendChat(text) {
		console.log(text);
	}

	render() {
		return(
			<div className="row">
				<LeftPane winModeExplanation={ this.state.winModeExplanation }/>
				<RightPane handleWinModeChange={ this.handleWinModeChange } handleSendChat={ this.handleSendChat } />
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('app')
)

// handleWinModeChange={ this.handleWinModeChange }