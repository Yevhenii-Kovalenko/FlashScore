import styles from './ModalNavMenu.module.css';
import { NavLink } from 'react-router-dom';


function ModalNavMenu() {
	return (
		<div className={styles.modalNav}>
			<ul>
				{}
				<li>
					<NavLink to="/lineups">Lineups</NavLink>
				</li>
				<li>
					<NavLink to="/standing/2">Standings</NavLink>
				</li>
				<li>
					<NavLink>News</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default ModalNavMenu;
