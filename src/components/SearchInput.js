import { FaSearch } from 'react-icons/fa';
import { useContext, useState } from 'react';
import MatchContext from '../context/MatchContext';
import styles from './SearchInput.module.css'

function SearchInput() {
	const { searchValue, onChangeSearchValue } = useContext(MatchContext);

	const [showInput,setShowInput] = useState(false)

	const handleMouseEnter = () =>{
		setShowInput(true)
	}
	const handleMouseLeave = () =>{
		setShowInput(false)
	}

	return (
		<div
			className={styles.inputContainer}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className={styles.inputContainer}>
				<FaSearch title='Search' className={styles.searchIcon}/>
				{showInput && (
					<div>
						<input
						type="text"
						placeholder="Search match or league"
						value={searchValue}
						onChange={onChangeSearchValue}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export default SearchInput;
