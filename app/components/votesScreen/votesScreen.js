import React, { Component } from 'react'
import VotesScreenEntry from '../votesScreenEntry/votesScreenEntry'

class VotesScreen extends Component {
	render() {
		return(
			<div className="hide-on-small-only" 
				style={{"height": "200px", "padding": "10px", "overflowY": "hidden", "fontFamily": "PressStart2P"}}>
				<VotesScreenEntry displayName={ "Joji" } message={ "left" }/>
				<VotesScreenEntry displayName={ "yaeji" } message={ "right" }/>
			</div>
		)
	}
}

export default VotesScreen;