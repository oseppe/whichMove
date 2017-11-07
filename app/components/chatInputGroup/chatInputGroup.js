import React, { Component } from 'react'
import ChatInput from '../chatInput/chatInput'
import ChatSettings from '../chatSettings/chatSettings'
import ChatSendButton from '../chatSendButton/chatSendButton'

class ChatInputGroup extends Component {
	render() {
		return(
			<div className="row">
				<ChatInput handleSendChat={this.props.handleSendChat} />
				<ChatSettings />
				<ChatSendButton />
			</div>
		)
	}
}

export default ChatInputGroup;