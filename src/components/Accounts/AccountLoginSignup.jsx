import { Link } from "react-router-dom"
import "./accountLoginSignup.style.css"
import Signup from "./Signup"
import Login from "./Login"
import { useState } from "react"
const AccountLoginSignup = () => {
	const [toggle, setToggle] = useState(false)
	return (
		<div className="account">
			<div className="account-header">
				<Link to="/">
					<img src="https://raw.githubusercontent.com/kundankrgupta1/media/15f517bb6c49649330c29f07d9691cdd1fc9c849/assets/asos.svg" alt="asos-logo" />
				</Link>
			</div>
			<div className="account-container">
				<div className="account-links">
					<p className={toggle ? "active" : ""}>
						<Link onClick={() => setToggle(true)}>join</Link>
					</p>
					<p>
						<Link onClick={() => setToggle(false)}>sing in</Link>
					</p>
				</div>
				{toggle ? <Signup /> : <Login />}
			</div>
			<div className="account-footer">
				<Link>Privacy Policy</Link> | <Link>Terms and Conditions</Link>
			</div>
		</div>
	)
}

export default AccountLoginSignup