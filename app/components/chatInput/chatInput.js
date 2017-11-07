import React, { Component } from 'react'

class ChatInput extends Component {
	constructor(props) {
		super(props);

		this.handleSendChat = this.handleSendChat.bind(this);
	}

	handleSendChat(event) {
		if (!(event.keyCode === 13)) return; 
		
		this.props.handleSendChat(event.target.value);
		event.target.value = "";
	}

	render() {
		return(
			<div className="col s12 m12 l12">
				<input type="text" name="" placeholder="type in command" onKeyDown={this.handleSendChat} />
			</div>
		)
	}
}

export default ChatInput;