import { useMatchContext } from '../context/MatchContext';
import { TfiClose } from 'react-icons/tfi';
import { IoFootball } from 'react-icons/io5';
import styles from './ModalMatchDetalis.module.css';
import ModalNavMenu from './ModalNavMenu';

function ModalMatchDetalis({ score }) {
	const { handleCloseModal, matchInfo } = useMatchContext();

	return (
		<div className={styles.modal}>
			{matchInfo.map((match) => (
				<div key={match.id} className={styles.modalContainer}>
					<div className={styles.modalTitle}>
						<h2>{match.league.name}</h2>
						<button
							className={styles.modalClose}
							onClick={() => handleCloseModal(match)}
						>
							<TfiClose />
						</button>
					</div>
					{/* <div className={styles.matchTime}>20.04.2023</div> */}
					<div className={styles.matchInfo}>
						<ModalNavMenu />
						<div className={styles.teamInfo}>
							<div className={styles.teamInfoBody}>
								<div>
									<img src={match.home.img} alt="" />
									<p>{match.home.name}</p>
								</div>
								<ul>
									{score
										.filter((score) => score.team === match.home.id)
										.map((el, index) => (
											<div key={index} className={styles.teamInfoScore}>
												<IoFootball />
												<li>
													{el.name} {el.time}
												</li>
											</div>
										))}
								</ul>
							</div>
							<div>
								<div className={styles.matchScore}>
									<p>
										{
											match.goals.filter((goal) => goal.team === match.home.id)
												.length
										}
									</p>
									{'—'}
									<p>
										{
											match.goals.filter((goal) => goal.team === match.guest.id)
												.length
										}
									</p>
								</div>
								<div className={styles.status}>{match.status}</div>
							</div>
							<div className={styles.teamInfoBody}>
								<div>
									<img src={match.guest.img} alt="" />
									<p>{match.guest.name}</p>
								</div>
								<ul>
									{score
										.filter((score) => score.team === match.guest.id)
										.map((el, index) => (
											<div key={index} className={styles.teamInfoScore}>
												<IoFootball />
												<li>
													{el.name} {el.time}
												</li>
											</div>
										))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default ModalMatchDetalis;
