import franceStandings from '../data/standings/france.json';
import styles from './Standings.module.css';

function StandingsFrance() {
	return (
		<div className={styles.table}>
			<table>
				<thead>
					<tr>
						<th title="Rank">#</th>
						<th>Team</th>
						<th title="Played Games">MP</th>
						<th title="Wins">W</th>
						<th title="Draws">D</th>
						<th title="Losses">L</th>
						<th title="Goals">G</th>
						<th title="Points">PTS</th>
						<th title="Form">Form</th>
					</tr>
				</thead>
				<tbody>
					{franceStandings.standings[0].table.map((team) => (
						<tr key={team.team.id}>
							<td>{team.position}</td>
							<td>
								<img className={styles.tableImg} src={team.team.crest} alt="" />
								{team.team.name}
							</td>
							<td>{team.playedGames}</td>
							<td>{team.won}</td>
							<td>{team.draw}</td>
							<td>{team.lost}</td>
							<td>
								{team.goalsFor}:{team.goalsAgainst}
							</td>
							<td>{team.points}</td>
							<td>{team.form}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default StandingsFrance;
