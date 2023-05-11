import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MatchProvider } from './context/MatchContext';
import './App.css';
import Live from './pages/Live';
import Finished from './pages/Finished';
import AllMatches from './pages/AllMatches';
import Header from './components/header/Header';
import Scheduled from './pages/Sheduled';
import DefaultStandingsPage from './pages/DefaultStandingsPage';
import Favorites from './components/favorites/Favorites';
import Leagues from './components/leagues/Leagues';
import MatchNav from './components/match/MatchNav';

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
							<Route
								path="/standing/:league"
								element={<DefaultStandingsPage />}
							/>
						</Routes>
					</div>
				</div>
			</MatchProvider>
		</BrowserRouter>
	);
}

export default App;
