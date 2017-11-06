import React from 'react'
import { render } from 'react-dom'
import ChatScreen from './components/chatScreen'
import GameScreen from './components/gameScreen'
import VotesTally from './components/votesTally'

class App extends React.Component {
	render() {
		return(
			<div>
				<GameScreen />
				<VotesTally />
				<ChatScreen />
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('app')
)