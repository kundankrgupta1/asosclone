import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import "./navbar.style.css"
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiHandbagSimpleBold } from "react-icons/pi";
import UserSection from "./Accounts/UserSection";
const Navbar = () => {

	return (
		<div className="main">
			<div className="main-child">
				<Link to={"/"}>
					<img src="https://raw.githubusercontent.com/kundankrgupta1/media/15f517bb6c49649330c29f07d9691cdd1fc9c849/assets/asos.svg"
						style={{ filter: "invert(1)" }} alt="" />
				</Link>
				<ul className="ul">
					<li><Link to="/">Women</Link></li>
					<li><Link to="/mens">Men</Link></li>
				</ul>
				<div className="search-bar">
					<input type="text" className="search-input" placeholder="Search for items and brands" />
					<button type="button" className="search-btn">
						<FiSearch />
					</button>
				</div>
				<ul className="user-section">
					<li className="user-hover"><Link to="/"><FaRegUser /></Link>
						<UserSection />
					</li>
					<li><Link to="/"><FaRegHeart /></Link></li>
					<li><Link to="/"><PiHandbagSimpleBold /></Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar