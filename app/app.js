import React, { Component } from 'react'
import { render } from 'react-dom'
import LeftPane from './components/leftPane/leftPane'
import RightPane from './components/rightPane/rightPane'

class App extends Component {
	render() {
		return(
			<div className="row">
				<LeftPane />
				<RightPane />
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('app')
)