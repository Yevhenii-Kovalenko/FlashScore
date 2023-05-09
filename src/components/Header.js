import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxStarFilled } from 'react-icons/rx';
import styles from './Header.module.css';
import allLeagues from '../data/allLeagues';

function Header() {
	const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

	const toggleSubMenu = () => {
		setIsSubMenuVisible(!isSubMenuVisible);
	};

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu}>
						Standings
						{isSubMenuVisible && (
							<ul>
								{allLeagues.map((league) => (
									<li key={league.id}>
										<NavLink to={`standing/${league.country}`}>
											{league.name}
										</NavLink>
									</li>
								))}
							</ul>
						)}
					</li>
					<li>Results</li>
					<li>Info</li>
					<li>
						<NavLink to="favorites">
							<RxStarFilled className={styles.icon} title="Favorites" />
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
