import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  { MatchProvider } from './context/MatchContext';
import Live from './pages/Live';
import Finished from './pages/Finished';
import AllMatches from './pages/AllMatches';
import Header from './components/Header';
import Scheduled from './pages/Sheduled';
import Standings from './pages/Standings';
import Eredivise from './pages/StandingsEredivise';
import Spain from './pages/StandingsSpain';
import Italy from './pages/StandingsItaly';
import Germany from './pages/StandingsGermany';
import France from './pages/StandingsFrance';
import Brasil from './pages/StandingsBrasil';
import Portugal from './pages/StandingsPortugal';
import Favorites from './components/Favorites';
import Lineups from './pages/Lineups';
import Leagues from './components/Leagues';
import MatchNav from './components/MatchNav';

function App() {
	return (
		<BrowserRouter>
			<MatchProvider>
				<div className="App">
					<div className="AppContainer">
						<Header />
						<MatchNav />
						<Routes>
							<Route path="/" element={<Leagues />} />
							<Route path="/all" element={<AllMatches />} />
							<Route path="/live" element={<Live />} />
							<Route path="/finished" element={<Finished />} />
							<Route path="/scheduled" element={<Scheduled />} />
							<Route path="/favorites" element={<Favorites />} />
							<Route path="/standing/1" element={<Standings />} />
							<Route path="/standing/2" element={<Spain />} />
							<Route path="/standing/3" element={<Germany />} />
							<Route path="/standing/4" element={<Italy />} />
							<Route path="/standing/5" element={<France />} />
							<Route path="/standing/6" element={<Eredivise />} />
							<Route path="/standing/7" element={<Brasil />} />
							<Route path="/standing/8" element={<Portugal />} />
							<Route path="/lineups" element={<Lineups />} />
						</Routes>
					</div>
				</div>
			</MatchProvider>
		</BrowserRouter>
	);
}

export default App;
