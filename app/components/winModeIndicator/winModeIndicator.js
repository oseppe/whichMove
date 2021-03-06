import React from 'react'

export default function winModeIndicator({explanation = ""}) {
	return (
		<div className="row" style={{"paddingTop": "5px"}}>
			<div className="col s12 center-align">
				<i className="material-icons orange-darken-4">stars</i>
				<span style={{"fontFamily": "PressStart2P", "fontSize": "10px"}}>{ explanation }</span>
			</div>
		</div>
	)
}