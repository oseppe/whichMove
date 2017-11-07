import React from 'react'
import GameScreen from '../gameScreen/gameScreen'
import VotesTally from '../votesTally/votesTally'
import VotesScreen from '../votesScreen/votesScreen'
import WinModeIndicator from '../winModeIndicator/winModeIndicator'

export default function LeftPane({winModeExplanation}) {
	return (
		<div className="col s12 m6 l6">
			<GameScreen />
			<WinModeIndicator winModeExplanation={ winModeExplanation } />
			<VotesTally />
			<VotesScreen />
		</div>
	)
}