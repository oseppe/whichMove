import React from 'react'
import GameScreen from './gameScreen'
import VotesTally from './votesTally'

export default function LeftPane() {
	return (
		<div className="col s12 m6 l6">
			<GameScreen />
			<VotesTally />
		</div>
	)
}