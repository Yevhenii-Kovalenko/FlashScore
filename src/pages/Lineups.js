import React from 'react';
import styles from './Lineups.module.css';
import ModalNavMenu from '../components/ModalNavMenu';


function Lineups() {
	return (
		<div className={styles.modal}>
			<div className={styles.modalContainer}>
				<ModalNavMenu />

				<img className={styles.image} src="../lineups.png" alt="" />
			</div>
		</div>
	);
}

export default Lineups;
