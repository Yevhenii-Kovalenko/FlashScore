import { useContext } from 'react';
import MatchContext from '../context/MatchContext';
import Match from './Match';

function Favorites() {
	const { selectedMatch, handleSelectedMatch } = useContext(MatchContext);
	return (
		<div >
			<h1>Favorite matches!</h1>
			{selectedMatch.length === 0 ? (
				<p>Favorites list is empty!</p>
			) : (
				<div>
					{selectedMatch.map((match) => (
						<Match
							key={match.id}
							{...match}
							match={match}
							isFavorites
							handleSelectedMatch={() => handleSelectedMatch(match)}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Favorites;
