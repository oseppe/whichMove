import React from 'react'

export default function ChatEntry({displayName = "anon", message = "sample message"}) {
	return (
		<div style={{"marginBottom": 0}}>
			<div></div>
			<span style={{ "fontWeight": "bold", "paddingLeft": "5px" }}>{ displayName }</span>
			<span style={{ "paddingLeft": "8px", "wordBreak": "break-all" }}>{ message }</span>
		</div>
	)
}