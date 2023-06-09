import { useMatchContext } from '../../context/MatchContext';
import Match from '../match/Match';

function Favorites() {
	const { selectedMatch, handleSelectedMatch } = useMatchContext();
	return (
		<div>
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
