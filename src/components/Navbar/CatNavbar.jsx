import { Link } from "react-router-dom"
import styles from './navbar.module.css';
import MegaMenu from "./MegaMenu";
const CatNavbar = () => {
	return (
		<>
			<div className={styles.catNavbarMain}>
				<ul>
					<li><Link to="/mens">new in</Link>
						<MegaMenu />
					</li>

					<li><Link to="/">clothing</Link></li>

					<li><Link to="/">trending</Link></li>

					<li><Link to="/">shoes</Link></li>

					<li><Link to="/">accessories</Link>	</li>

					<li><Link to="/">brands</Link></li>

					<li><Link to="/">sportwear</Link></li>

					<li><Link to="/">topman</Link></li>

					<li><Link to="/">marketplace</Link></li>

					<li><Link to="/">sale</Link></li>
				</ul>
			</div>
		</>
	)
}

export default CatNavbar
