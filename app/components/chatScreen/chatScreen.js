import React from 'react'
import ChatEntry from '../chatEntry/chatEntry'

export default function ChatScreen() {
	return (
		<div id="chatscreen" style={{"height": "300px","padding": "10px","overflowY": "hidden"}}>
			<ChatEntry />
			<ChatEntry displayName={"Joji"} message={"Will he?"} />
		</div>
	)
}