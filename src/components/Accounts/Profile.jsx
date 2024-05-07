import "./profile.style.css"
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
import { FaRegUserCircle } from "react-icons/fa";
const Profile = () => {

	const { setIsAuth, setToken, name } = useContext(AuthContext)
	const navigate = useNavigate();

	return (
		<>
			<div className="profile">
				<div className="profile-container">
					<div className="profile-header">
						<Link to="/">
							<img src="https://raw.githubusercontent.com/kundankrgupta1/media/15f517bb6c49649330c29f07d9691cdd1fc9c849/assets/asos.svg" alt="asos-logo" />
						</Link>
						<p>my account</p>
						<img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/digicert.png" alt="seal.digicert.com" />
					</div>
					<div className="profile-body">
						<div className="profile-sidebar">
							<div className="profile-sidebar-header">
								<div className="profile-sidebar-header-img">
									<p><FaRegUserCircle /></p>
								</div>
								<div className="profile-sidebar-header-text">
									<p>Hi,</p>
									<p>{name}</p>
								</div>
							</div>
							<ul>
								<li><Link><TbPackages className="profile-sidebar-icon" />Orders</Link></li>
								<li><Link><MdOutlineHelpOutline className="profile-sidebar-icon" />need help?</Link></li>
								<li><Link><HiMiniGiftTop className="profile-sidebar-icon" />gift cards and vouchers</Link></li>
								<li><Link><FaRegAddressCard className="profile-sidebar-icon" />my details</Link></li>
								<li><Link><CiLock className="profile-sidebar-icon" />chnage password</Link></li>
								<li><Link><FaRegAddressBook className="profile-sidebar-icon" />address book</Link></li>
								<li><Link><IoCardOutline className="profile-sidebar-icon" />payment methods</Link></li>
								<li><Link><IoChatboxEllipsesOutline className="profile-sidebar-icon" />contact preferences</Link></li>
								<li><Link><HiOutlineUsers className="profile-sidebar-icon" />social accounts</Link></li>
								<li onClick={() => {
									setIsAuth(false);
									setToken(null);
									(localStorage.removeItem("token"));
									(localStorage.removeItem("name"));
									setTimeout(() => {
										return navigate("/account");
									}, 2000)
								}}><Link><BiLogOut className="profile-sidebar-icon" />sign out</Link></li>
							</ul>
						</div>
						<div className="profile-content">
							<p>welcome to</p>
							<p>your account</p>
						</div>
					</div>
				</div>
			</div>
			<div className="profile-footer">
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
