import { Link } from "react-router-dom"
import style from "./account.module.css"
import Signup from "./Signup"
import Login from "./Login"
import { useState } from "react"
const AccountLoginSignup = () => {
	const [toggle, setToggle] = useState(false)
	return (
		<div className={style.account}>
			<div className={style.accountHeader}>
				<Link to="/">
					<img src="https://raw.githubusercontent.com/kundankrgupta1/media/15f517bb6c49649330c29f07d9691cdd1fc9c849/assets/asos.svg" alt="asos-logo" />
				</Link>
			</div>
			<div className={style.accountContainer}>
				<div className={style.accountLinks}>
					<p className={toggle ? "active" : ""}>
						<Link onClick={() => setToggle(true)}>join</Link>
					</p>
					<p>
						<Link onClick={() => setToggle(false)}>sing in</Link>
					</p>
				</div>
				{toggle ? <Signup /> : <Login />}
			</div>
			<div className={style.accountFooter}>
				<Link>Privacy Policy</Link> | <Link>Terms and Conditions</Link>
			</div>
		</div>
	)
}

export default AccountLoginSignup