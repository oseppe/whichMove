import React, { Component } from 'react'

class VotesTally extends Component {
	render() {
		return(
			<div className="row center-align">
				<div className="col s1" style={{"color": "white"}}>a</div>
				<div className="col s2">
					<i className="material-icons teal-darken-2">arrow_back</i>
					<div className="votes-count">0</div>
				</div>
				<div className="col s2">
					<i className="material-icons teal-darken-2">arrow_upward</i>
					<div className="votes-count">0</div>
				</div>
				<div className="col s2">
					<i className="material-icons teal-darken-2">arrow_forward</i>
					<div className="votes-count">0</div>
				</div>
				<div className="col s2">
					<i className="material-icons teal-darken-2">arrow_downward</i>
					<div className="votes-count">0</div>
				</div>
				<div className="col s2">
					<i className="material-icons teal-darken-2">stop</i>
					<div className="votes-count">0</div>
				</div>
				<div className="col s1" style={{"color": "white"}}>a</div>
			</div>
		)
	}
}

export default VotesTally;