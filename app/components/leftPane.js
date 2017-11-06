import React from 'react'
import GameScreen from './gameScreen'
import VotesTally from './votesTally'
import VotesScreen from './votesScreen'
import WinModeIndicator from './winModeIndicator'

export default function LeftPane() {
	return (
		<div className="col s12 m6 l6">
			<GameScreen />
			<WinModeIndicator explanation={"1st to reach 4 votes"} />
			<VotesTally />
			<VotesScreen />
		</div>
	)
}