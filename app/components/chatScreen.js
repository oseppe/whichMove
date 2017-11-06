import React from 'react'
import ChatEntry from './chatEntry'

export default function ChatScreen() {
	return (
		<div id="chatscreen" style={{"height": "300px",
		"padding": "10px",
		"overflowY": "hidden",
		"borderColor": "black",
		"borderStyle": "solid"}}>
			<ChatEntry />
			<ChatEntry displayName={"Joji"} message={"Will he?"} />
		</div>
	)
}