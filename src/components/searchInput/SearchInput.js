import { useMatchContext } from '../../context/MatchContext';
import { FaSearch } from 'react-icons/fa';
import styles from '../searchInput/SearchInput.module.css'

function SearchInput() {
	const { searchValue, onChangeSearchValue } = useMatchContext();

	return (
		<div className={styles.inputContainer}>
			<div className={styles.inputContainer}>
				<FaSearch title="Search" className={styles.searchIcon} />

				<div>
					<input
						type="text"
						placeholder="Search match or league"
						value={searchValue}
						onChange={onChangeSearchValue}
					/>
				</div>
			</div>
		</div>
	);
}

export default SearchInput;
