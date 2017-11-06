import React from 'react'
import GameScreen from '../gameScreen/gameScreen'
import VotesTally from '../votesTally/votesTally'
import VotesScreen from '../votesScreen/votesScreen'
import WinModeIndicator from '../winModeIndicator/winModeIndicator'

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