
import MatchNav from './MatchNav';

function MatchList() {

	// const filteredMatches = matches.filter((match) => {
	// 	if (selectedLeague && match.league.name !== selectedLeague) {
	// 		return false;
	// 	}
	// 	if (selectedStatus && match.status !== selectedStatus) {
	// 		return false;
	// 	}
	// 	return true;
	// });
	return (
		<div >
			<MatchNav />
		{/* <FilteredMatch /> */}
			
			{/* {filteredMatches.map((match) => (
				<Match key={match.id} {...match} />
			))} */}
			
		</div>
	);
}

export default MatchList;
