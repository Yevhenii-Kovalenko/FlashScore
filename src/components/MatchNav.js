import { NavLink } from 'react-router-dom';
import styles from './MatchNav.module.css';
import SearchInput from '../components/SearchInput';

function MatchNav() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<NavLink
						to="/"
						style={({ isActive, isPending }) => {
							return {
								backgroundColor: isActive ? '#FF0046' : '',
								color: isPending ? '#FFF2CE' : 'black',
							};
						}}
					>
						Leagues
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/all"
						style={({ isActive, isPending }) => {
							return {
								backgroundColor: isActive ? '#FF0046' : '',
								color: isPending ? '#FFF2CE' : 'black',
							};
						}}
					>
						All matches
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/live"
						style={({ isActive, isPending }) => {
							return {
								backgroundColor: isActive ? '#FF0046' : '',
								color: isPending ? '#FFF2CE' : 'black',
							};
						}}
					>
						Live
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/finished"
						style={({ isActive, isPending }) => {
							return {
								backgroundColor: isActive ? '#FF0046' : '',
								color: isPending ? '#FFF2CE' : 'black',
							};
						}}
					>
						Finished
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/scheduled"
						style={({ isActive, isPending }) => {
							return {
								backgroundColor: isActive ? '#FF0046' : '',
								color: isPending ? '#FFF2CE' : 'black',
							};
						}}
					>
						Scheduled
					</NavLink>
				</li>
				<li>
					<SearchInput/>
				</li>
			</ul>
			
		</nav>
	);
}

export default MatchNav;
