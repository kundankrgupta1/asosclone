import { Link } from "react-router-dom"
import style from "./hero.module.css"
const Hero = () => {
	return (
		<>
			<div className={style.hero}>
				<div className={style.heroText}>
					<h1>ASOS</h1>
					<p>ASOS DESIGN and 850+ brands</p>
				</div>
				<div className={style.heroBtn}>
					<Link to="/womens">
					<button>shop womens</button>
					</Link>
					<Link to="/mens"><button>shop mens</button></Link>
				</div>
				<div className={style.heroText2}>
					<p>EASY WORLDWIDE DELIVERY <br /> <span>*minimum spends apply</span></p>
					<p>ASOS DESIGN and 850+ brands</p>
				</div>
			</div>
		</>
	)
}

export default Hero