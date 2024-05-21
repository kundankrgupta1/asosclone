import { Link, useNavigate } from "react-router-dom"
import style from "./navbar.module.css"
import { FaRegUser } from "react-icons/fa"
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { AuthContext } from "../../context/ContextProviderApp";
import { useContext } from "react";
const UserSection = () => {

	const { isAuth, setIsAuth, token, setToken, name } = useContext(AuthContext)
	const navigate = useNavigate();
	
	return (
		<div className={style.userDropdown}>
			<div className={style.blank}>&nbsp;</div>
			<div className={style.userDropdownHeader}>
				{
					token && isAuth ?
						<ul>
							<li><Link to="/profile" style={{ fontWeight: "bold", textTransform: "capitalize" }}>Hi, {name && name.split(" ")[0]}</Link></li>
							<li>
								<button className={style.btn}
									onClick={() => {
										setIsAuth(false);
										setToken(null);
										(localStorage.removeItem("token"));
										(localStorage.removeItem("name"));
										setTimeout(() => {
											return navigate("/account");
										}, 2000)
									}
									}>Sign Out</button>
							</li>
						</ul>
						:
						<ul>
							<li><Link to="/account">Sign In</Link></li> |
							<li><Link to="/account">Join</Link></li>
						</ul>
				}
				<Link to="/"><IoCloseSharp /></Link>
			</div>
			<ul className={style.userDropdownList}>
				<li><Link to={token && isAuth ? "/profile" : "/account"}><FaRegUser />My Profile</Link></li>
				<li><Link to="/"><FiShoppingBag />My Orders</Link></li>
				<li><Link to="/"><IoIosHelpCircleOutline />Return Information</Link></li>
				<li><Link to="/"><IoChatboxEllipsesOutline />Contact Preferences</Link></li>
			</ul>
		</div>
	)
}

export default UserSection
