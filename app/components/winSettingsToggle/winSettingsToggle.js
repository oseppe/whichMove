import React, { Component } from 'react'

class WinSettingsToggle extends Component {
	render() {
		return(
			<div className="col s12">
				<p>
					<input name="winMode" type="radio" id="firstPastPost" value="0" checked />
					<label for="firstPastPost">1st to reach 4 votes</label>
				</p>
				<p>
					<input name="winMode" type="radio" id="mostVotesAfterSetTime" value="1" />
					<label for="mostVotesAfterSetTime">Most votes in 7s</label>
				</p>
			</div>
		)
	}
}

export default WinSettingsToggle;