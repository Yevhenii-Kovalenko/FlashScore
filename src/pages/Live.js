import React, { useContext } from 'react';
import MatchContext from '../context/MatchContext';
import Match from '../components/Match';

function Live() {
	const { matches, handleSelectedMatch } = useContext(MatchContext);
	const liveMatch = matches.filter((match) => match.status === 'live');
	return (
		<div>
			<div >
				{liveMatch.map((match) => (
					<Match
						key={match.id}
						{...match}
						handleSelectedMatch={(match)=>handleSelectedMatch(match)}
						match={match}
					/>
				))}
			</div>
		</div>
	);
}

export default Live;
