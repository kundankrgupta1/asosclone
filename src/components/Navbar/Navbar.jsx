import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import style from "./navbar.module.css"
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiHandbagSimpleBold } from "react-icons/pi";
import UserSection from "./UserSection";
const Navbar = () => {

	return (
		<div className={style.main}>
			<ul>
				<li>
					<Link to="/">
						<img src="https://raw.githubusercontent.com/kundankrgupta1/media/15f517bb6c49649330c29f07d9691cdd1fc9c849/assets/asos.svg" style={{ filter: "invert(1)" }} alt="asos logo" />
					</Link>
				</li>

				<li>
					<Link to="/womens">
						womens
					</Link>
				</li>

				<li>
					<Link to="/mens">
						mens
					</Link>
				</li>


				<li>
					<input type="text" placeholder="Search for items and brands" />
					<button type="button">
						<FiSearch />
					</button>
				</li>


				<li>
					<Link>
						<FaRegUser />
					</Link>
					<UserSection />
				</li>


				<li>
					<Link to="/"><FaRegHeart /></Link>
				</li>


				<li>
					<Link to="/"><PiHandbagSimpleBold /></Link>
				</li>

			</ul>
			{/* <div className={style.mainChild}>
				<Link to={"/"}>
					<img src="https://raw.githubusercontent.com/kundankrgupta1/media/15f517bb6c49649330c29f07d9691cdd1fc9c849/assets/asos.svg"
						style={{ filter: "invert(1)" }} alt="" />
				</Link>

				<ul>
					<li>
						<Link to="/womens">Women</Link>
						<CatNavbar />
					</li>

					<li>
						<Link to="/mens">Men</Link>
						<CatNavbar />
					</li>
				</ul>
				<div className={style.searchBar}>
					<input type="text" className={style.searchInput} placeholder="Search for items and brands" />
					<button type="button" className={style.searchBtn}>
						<FiSearch />
					</button>
				</div>
				<div className={style.userSection}>
					<ul>
						<li className={style.userHover}>
							<Link to="/"><FaRegUser /></Link>
							<UserSection />
						</li>

						<li>
							<Link to="/"><FaRegHeart /></Link>
						</li>

						<li>
							<Link to="/"><PiHandbagSimpleBold /></Link>
						</li>
					</ul>
				</div>
			</div> */}
		</div>
	)
}

export default Navbar