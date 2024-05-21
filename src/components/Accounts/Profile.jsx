import style from "./profile.module.css"
import { Link, useNavigate } from "react-router-dom"
import { TbPackages } from "react-icons/tb";
import { MdOutlineHelpOutline } from "react-icons/md";
import { HiMiniGiftTop } from "react-icons/hi2";
import { FaRegAddressCard } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { FaRegAddressBook } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { BiLogOut } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../context/ContextProviderApp";
const Profile = () => {

	const { setIsAuth, setToken, name } = useContext(AuthContext)
	const navigate = useNavigate();

	return (
		<>
			<div className={style.profile}>
				<div className={style.profileContainer}>
					<div className={style.profileHeader}>
						<Link to="/">
							<img src="https://raw.githubusercontent.com/kundankrgupta1/media/15f517bb6c49649330c29f07d9691cdd1fc9c849/assets/asos.svg" alt="asos-logo" />
						</Link>
						<p>my account</p>
						<img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/digicert.png" alt="seal.digicert.com" />
					</div>
					<div className={style.profileBody}>
						<div className={style.profileSidebar}>
							<div className={style.profileSidebarHeader}>
								<div className={style.profileSidebarHeaderImg}>
									<p>{name && name.split(' ').map(e => e[0]).join('').toUpperCase()}</p>
								</div>
								<div className={style.profileSidebarHeaderText}>
									<p>Hi,</p>
									<p>{name}</p>
								</div>
							</div>
							<ul>
								<li><Link><TbPackages className={style.profileSidebarIcon} />Orders</Link></li>
								<li><Link><MdOutlineHelpOutline className={style.profileSidebarIcon} />need help?</Link></li>
								<li><Link><HiMiniGiftTop className={style.profileSidebarIcon} />gift cards and vouchers</Link></li>
								<li><Link><FaRegAddressCard className={style.profileSidebarIcon} />my details</Link></li>
								<li><Link><CiLock className={style.profileSidebarIcon} />chnage password</Link></li>
								<li><Link><FaRegAddressBook className={style.profileSidebarIcon} />address book</Link></li>
								<li><Link><IoCardOutline className={style.profileSidebarIcon} />payment methods</Link></li>
								<li><Link><IoChatboxEllipsesOutline className={style.profileSidebarIcon} />contact preferences</Link></li>
								<li><Link><HiOutlineUsers className={style.profileSidebarIcon} />social accounts</Link></li>
								<li onClick={() => {
									setIsAuth(false);
									setToken(null);
									(localStorage.removeItem("token"));
									(localStorage.removeItem("name"));
									setTimeout(() => {
										return navigate("/account");
									}, 2000)
								}}><Link><BiLogOut className={style.profileSidebarIcon} />sign out</Link></li>
							</ul>
						</div>
						<div className={style.profileContent}>
							<p>welcome to</p>
							<p>your account</p>
						</div>
					</div>
				</div>
			</div>
			<div className={style.profileFooter}>
				<ul>
					<li>ASOS Homepage</li>
					<li>Terms & Conditions</li>
					<li>Privacy Policy</li>
				</ul>
				<ul>
					<li>© ASOS 2024</li>
				</ul>
			</div>
		</>
	)
}

export default Profile
