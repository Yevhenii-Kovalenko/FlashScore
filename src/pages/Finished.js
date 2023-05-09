import React, { useContext } from 'react';
import Match from '../components/Match';
import { useMatchContext } from '../context/MatchContext';


function Finished() {
	const { filteredMatches, handleSelectedMatch } = useMatchContext();
	const finishedMatch = filteredMatches.filter(
		(match) => match.status === 'finished'
	);
	return (
		<div>
			<div >
				{finishedMatch.map((match) => (
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

export default Finished;
