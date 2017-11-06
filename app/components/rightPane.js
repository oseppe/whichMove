import React from 'react'
import ChatScreen from './chatScreen'
import ChatInputGroup from './chatInputGroup/chatInputGroup'

export default function RightPane() {
	return (
		<div className="col s12 m6 l6">
			<ChatScreen />
			<ChatInputGroup />
		</div>
	)
}