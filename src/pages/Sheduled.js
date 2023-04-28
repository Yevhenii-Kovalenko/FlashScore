import { useContext } from 'react';
import MatchContext from '../context/MatchContext';
import Match from '../components/Match';

function Scheduled() {
	const { matches, handleSelectedMatch } = useContext(MatchContext);

	const sheduledMatch = matches.filter(
		(match) => {
			if (match.status === 'live') {
				return false;
			}
			if (match.status !== 'finished') {
				return true;
			}
			return false;
		}

		//match.status !== 'live' && 'finished'
	);

	return (
		<div >
			{sheduledMatch.map((match) => (
				<Match
					key={match.id}
					{...match}
					handleSelectedMatch={(match) => handleSelectedMatch(match)}
					match={match}
				/>
			))}
		</div>
	);
}

export default Scheduled;
