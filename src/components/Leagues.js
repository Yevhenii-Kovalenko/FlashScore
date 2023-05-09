import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import {useMatchContext} from '../context/MatchContext';
import matches from '../data/matches';
import Match from './Match';
import styles from './Leagues.module.css';


function Leagues() {

	const {
		selectedLeagues,
		handleOnClick,
		handleSelectedMatch,
		filteredLeagues,
	} = useMatchContext();
	return (
		<div className={styles.leagues}>
			{filteredLeagues.map((league) => (
				<div className={styles.leaguesContainer} key={league.id}>
					<div className={styles.leaguesTitle}>
						<div className={styles.leagueBody}>
							<img src={league.url} alt="" />
							<NavLink to={`standing/${league.country}`}>{league.name}</NavLink>
						</div>
						{selectedLeagues.includes(league.id) ? (
							<RiArrowUpSLine
								className={styles.icon}
								onClick={() => handleOnClick(league.id)}
							/>
						) : (
							<RiArrowDownSLine
								className={styles.icon}
								onClick={() => handleOnClick(league.id)}
							/>
						)}
					</div>
					{selectedLeagues.includes(league.id) && (
						<div>
							{matches
								.filter((match) => match.league.id === league.id)
								.map((match) => (
									<Match
										{...match}
										key={match.id}
										handleSelectedMatch={(match) => handleSelectedMatch(match)}
										match={match}
										isFavorites={false}
									/>
								))}
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default Leagues;
