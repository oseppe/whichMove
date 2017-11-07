import React, { Component } from 'react'

class WinSettingsToggle extends Component {
	constructor(props) {
		super(props);

		this.state = {
            choice: 'Selected: '
        };

        this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.setState({choice: 'Selected: ' + event.target.value});
		this.props.handleWinModeChange(event);
	}

	render() {
		return(
			<div className="col s12">
				<p>
					<input name="winMode" type="radio" id="firstPastPost" value="0" defaultChecked onChange={this.handleClick} />
					<label htmlFor="firstPastPost">1st to reach 4 votes</label>
				</p>
				<p>
					<input name="winMode" type="radio" id="mostVotesAfterSetTime" value="1" onChange={this.handleClick} />
					<label htmlFor="mostVotesAfterSetTime">Most votes in 7s</label>
				</p>
			</div>
		)
	}
}

export default WinSettingsToggle;