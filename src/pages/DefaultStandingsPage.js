import { useParams } from 'react-router-dom';
import englandStandings from '../data/standings/england.json';
import spainStandings from '../data/standings/spain.json';
import brasilStandings from '../data/standings/brasil.json';
import netherlands from '../data/standings/netherlands.json';
import franceStandings from '../data/standings/france.json';
import germanyStandings from '../data/standings/germany.json';
import italyStandings from '../data/standings/italy.json';
import portugalStandings from '../data/standings/portugal.json';
import styles from './Standings.module.css';
import NotFound from './NotFound';


function DefaultStandingsPage() {
const {league} = useParams()

let standings;
switch(league){
	case 'england':
		standings = englandStandings;
		break;
	case 'spain':
		standings = spainStandings;
		break;
	case 'brasil':
		standings = brasilStandings;
		break;
	case 'germany':
		standings = germanyStandings;
		break;
	case 'italy':
		standings = italyStandings;
		break;
	case 'france':
		standings = franceStandings;
		break;
	case 'portugal':
		standings = portugalStandings;
		break;
	case 'netherlands':
		standings = netherlands;
		break;
	default: 
}

if(!standings){
	return <NotFound/>
}

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
					{standings.standings[0].table.map((team) => (
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

export default DefaultStandingsPage;
