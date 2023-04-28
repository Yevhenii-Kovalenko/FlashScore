import { useContext } from 'react';
import styles from './FilteredMatch.module.css';
import MatchContext from '../context/MatchContext';

function FilteredMatch() {
	const {
		matches,
		selectedLeague,
		selectedStatus,
		handleLeagueChange,
		handleStatusChange,
	} = useContext(MatchContext);

	const leagues = [...new Set(matches.map((match) => match.league.name))];
	
	return (
		<div className={styles.header}>
			<div className={styles.headerFilters}>
				<div>
					<label htmlFor="league-select">League:</label>
					<select
						id="league-select"
						value={selectedLeague}
						onChange={handleLeagueChange}
					>
						<option value="">All</option>
						{leagues.map((league) => (
							<option key={league} value={league}>
								{league}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor="status-select">Status:</label>
					<select
						id="status-select"
						value={selectedStatus}
						onChange={handleStatusChange}
					>
						<option value="">All</option>
						<option value="live">Live</option>
						<option value="finished">Finished</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default FilteredMatch;
