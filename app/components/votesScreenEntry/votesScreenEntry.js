import React from 'react'

export default function VotesScreenEntry({displayName = "anon", message = "sample message"}) {
	return (
		<div style={{"marginBottom": 0}}>
			<span>{ displayName }</span>
			<span> voted { message }</span>
		</div>
	)
}