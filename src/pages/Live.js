import React, { useContext } from 'react';
import Match from '../components/match/Match';
import { useMatchContext } from '../context/MatchContext';

function Live() {
	const { filteredMatches, handleSelectedMatch } = useMatchContext();

	const liveMatch = filteredMatches.filter((match) => match.status === 'live');
	return (
		<div>
			<div>
				{liveMatch.map((match) => (
					<Match
						key={match.id}
						{...match}
						handleSelectedMatch={(match) => handleSelectedMatch(match)}
						match={match}
					/>
				))}
			</div>
		</div>
	);
}

export default Live;
