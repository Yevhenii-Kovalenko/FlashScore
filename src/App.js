import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MatchList from './components/MatchList';
import matches from './data/matches';
import allLeagues from './data/allLeagues';
import MatchContext from './context/MatchContext';
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
	// const [selectedLeague, setSelectedLeague] = useState(undefined);
	const [selectedStatus, setSelectedStatus] = useState(undefined);
	const [leagueOpen, setLeagueOpen] = useState([]);
	const [selectedLeagues, setSelectedLeagues] = useState([]);
	const [selectedMatch, setSelectedMatch] = useState([]);
	const [openModal, setOpenModal] = useState(false);
	const [matchInfo, setMatchInfo] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const filteredLeagues = allLeagues.filter((league) =>
		league.name.toLowerCase().includes(searchValue.toLowerCase())
	);
	const filteredMatches = matches.filter(
		(match) =>
			match.home.name.toLowerCase().includes(searchValue.toLowerCase()) ||
			match.guest.name.toLowerCase().includes(searchValue.toLowerCase()) 
	);
	const onChangeSearchValue = (e) => {
		setSearchValue(e.target.value);
	};

	const handleOpenModal = (match) => {
		setMatchInfo((prevMatch) => [...prevMatch, match]);

		setOpenModal(true);
		
	};

	const handleCloseModal = (match) => {
		setOpenModal(false);
		setMatchInfo((prevMatch) =>
			prevMatch.filter((matchInfo) => matchInfo !== match)
		);
	};

	const handleLeagueChange = (e) => {
		// setSelectedLeague(e.target.value);
	};
	const handleStatusChange = (e) => {
		setSelectedStatus(e.target.value);
	};

	const handleSelectedMatch = (match) => {
		if (selectedMatch.includes(match)) {
			setSelectedMatch((prevMatch) =>
				prevMatch.filter((selectedMatch) => selectedMatch !== match)
			);
		} else {
			setSelectedMatch((prevMatch) => [...prevMatch, match]);
		}
	};

	const handleOnClick = (id) => {
		if (leagueOpen.includes(id)) {
			setLeagueOpen((prevState) => prevState.filter((i) => i !== id));
		} else {
			setLeagueOpen((prevState) => [...prevState, id]);
		}

		if (selectedLeagues.includes(id)) {
			setSelectedLeagues(
				selectedLeagues.filter((selectedId) => selectedId !== id)
			);
		} else {
			setSelectedLeagues([...selectedLeagues, id]);
		}
	};

	return (
		<BrowserRouter>
			<MatchContext.Provider
				value={{
					// selectedLeague,
					selectedStatus,
					// setSelectedLeague,
					setSelectedStatus,
					matches,
					handleLeagueChange,
					handleStatusChange,
					allLeagues,
					leagueOpen,
					setLeagueOpen,
					selectedLeagues,
					setSelectedLeagues,
					selectedMatch,
					setSelectedMatch,
					handleSelectedMatch,
					handleOnClick,
					openModal,
					handleOpenModal,
					handleCloseModal,
					matchInfo,
					searchValue,
					onChangeSearchValue,
					filteredMatches,
					filteredLeagues,
				}}
			>
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
			</MatchContext.Provider>
		</BrowserRouter>
	);
}

export default App;
