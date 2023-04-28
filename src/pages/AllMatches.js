import React, { useContext } from 'react';
import MatchContext from '../context/MatchContext';
import Match from '../components/Match';


function AllMatches() {
	const { filteredMatches, handleSelectedMatch } = useContext(MatchContext);

	return (
		<div>
			{filteredMatches.map((match) => (
				<Match
					{...match}
					match={match}
					key={match.id}
					handleSelectedMatch={(match) => handleSelectedMatch(match)}
				/>
			))}
		</div>
	);
}

export default AllMatches;
