import "./topheader.style.css"
import "../index.css"
import { Link } from "react-router-dom"
const TopHeader = () => {
	
	return (
		<div className="top-header">
			<ul>
				<li><Link>marketplace</Link></li>
				<li><Link>help & faqs</Link></li>
				<li><Link><img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/india-circle.png" alt="india-flag" height="18px" /></Link></li>
			</ul>
		</div>
	)
}

export default TopHeader