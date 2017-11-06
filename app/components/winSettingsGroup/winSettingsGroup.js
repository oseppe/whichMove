import React, { Component } from 'react'
import WinSettingsToggle from '../winSettingsToggle/winSettingsToggle'

class WinSettingsGroup extends Component {
	render() {
		return(
			<div className="row">
				<h5>Win Condition</h5>
				<WinSettingsToggle />
			</div>
		)
	}
}

export default WinSettingsGroup;