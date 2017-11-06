import React, { Component } from 'react'

class ChatSendButton extends Component {
	render() {
		return(
			<div className="col s6 m6 l6" style={{"textAlign": "right"}}>
				<button className="btn waves-effect" type="submit" name="action">
    			chat
  			</button>
			</div>
		)
	}
}

export default ChatSendButton;