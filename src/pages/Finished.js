import React, { useContext } from 'react';
import MatchContext from '../context/MatchContext';
import Match from '../components/Match';


function Finished() {
	const { matches, handleSelectedMatch } = useContext(MatchContext);
	const finishedMatch = matches.filter((match) => match.status === 'finished');
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
