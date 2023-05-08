import { createContext, useContext } from 'react';
import { useState } from 'react';
import matches from '../data/matches';
import allLeagues from '../data/allLeagues';


const MatchContext = createContext();

export const useMatchContext = () => useContext(MatchContext);

export const MatchProvider = ({ children }) => {

	const [selectedStatus, setSelectedStatus] = useState(undefined);
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
		if (selectedLeagues.includes(id)) {
			setSelectedLeagues(
				selectedLeagues.filter((selectedId) => selectedId !== id)
			);
		} else {
			setSelectedLeagues([...selectedLeagues, id]);
		}
	};
	return (
		<MatchContext.Provider
			value={{
				selectedStatus,
				setSelectedStatus,
				matches,
				handleStatusChange,
				allLeagues,
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
			{children}
		</MatchContext.Provider>
	);
};


export default MatchContext;
