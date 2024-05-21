import { Link } from "react-router-dom"
import AddProduct from "./AddProduct"
import style from "./style.module.css"
import Loading from "../Indicator/Loading"
const Dashboard = () => {
	return (
		<div className={style.dashboard}>
			<Link to="/">
				<img src="https://raw.githubusercontent.com/kundankrgupta1/media/15f517bb6c49649330c29f07d9691cdd1fc9c849/assets/asos.svg" alt="asos-logo" />
			</Link>
			<h1>Admin Dashboard</h1>
			<div className={style.dashboardContainer}>
				<div className={style.dashboardLinks}>
					<p>add new products</p>
					<AddProduct />
				</div>
				<div className={style.dashboardLinks}>
					<p>dashboard summary</p>
					<Loading />
				</div>
			</div>
		</div>
	)
}

export default Dashboard