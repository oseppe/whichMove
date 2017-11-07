import React from 'react'
import ChatScreen from '../chatScreen/chatScreen'
import ChatInputGroup from '../chatInputGroup/chatInputGroup'
import WinSettingsGroup from '../winSettingsGroup/winSettingsGroup'

export default function RightPane({handleWinModeChange, handleSendChat}) {
	return (
		<div className="col s12 m6 l6">
			<ChatScreen />
			<ChatInputGroup handleSendChat={handleSendChat} />
			<WinSettingsGroup handleWinModeChange={handleWinModeChange}/>
		</div>
	)
}