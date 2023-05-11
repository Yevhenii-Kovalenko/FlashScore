import styles from '../modalMatchDetalis/ModalNavMenu.module.css';
import { NavLink } from 'react-router-dom';
import { useMatchContext } from '../../context/MatchContext';

function ModalNavMenu() {
	const { matchInfo } = useMatchContext();

	return (
		<div className={styles.modalNav}>
			<ul>
				<li>
					<NavLink to="/lineups">Lineups</NavLink>
				</li>
				<li>
					{matchInfo.map((match) => (
						<NavLink key={match.id} to={`/${match.league.country}`}>
							Standings
						</NavLink>
					))}
				</li>
				<li>
					<NavLink>News</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default ModalNavMenu;
