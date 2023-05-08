import { RxStar, RxStarFilled } from 'react-icons/rx';
import { useState } from 'react';
import { useMatchContext } from '../context/MatchContext';
import styles from './Match.module.css';
import ModalMatchDetalis from './ModalMatchDetalis';

function Match({
	home,
	guest,
	goals,
	status,
	handleSelectedMatch,
	match,
	isFavorites,
	score,
	id
}) {
	const {  handleOpenModal, matchInfo } = useMatchContext();

	const [toggleFavorite, setToggleFavorite] = useState(isFavorites);
	
	const onClickFavorite = (match) => {
		setToggleFavorite(!toggleFavorite);
		handleSelectedMatch(match);
	};
	return (
		<>
			<div className={styles.match}>
				<div className={styles.favoriteStatusConteiner}>
					<div className={styles.icon}>
						{toggleFavorite ? (
							<RxStarFilled
								style={{ color: 'yellow' }}
								onClick={() => onClickFavorite(match)}
							/>
						) : (
							<RxStar onClick={() => onClickFavorite(match)} title="Favorite" />
						)}
					</div>
					<div className={styles.status}>{status}</div>
				</div>
				<div className={styles.matchInfo}>
					<div
						title="Match details"
						onClick={() => handleOpenModal(match)}
						className={styles.team}
					>
						<div>
							<img src={home.img} alt="" />
							<p>{home.name}</p>
						</div>
						<div>
							<img src={guest.img} alt="" />
							<p>{guest.name}</p>
						</div>
					</div>
					<div className={styles.score}>
						<p>{goals.filter((goal) => goal.team === home.id).length} </p>
						<p>{goals.filter((goal) => goal.team === guest.id).length}</p>
					</div>
				</div>
				<p className={styles.showMore} onClick={() => handleOpenModal(match)}>
					Show more
				</p>
				{matchInfo.map((match) => match.id)[0] === id ? (
					<ModalMatchDetalis score={score} />
				) : (
					''
				)}
			</div>
		</>
	);
}

export default Match;
