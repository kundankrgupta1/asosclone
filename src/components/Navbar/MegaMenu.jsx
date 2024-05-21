import { Link } from 'react-router-dom';
import styles from "./navbar.module.css"

const MegaMenu = () => {
	return (
		<div className={styles.megaMenu}>
			<div className={styles.megaMenuContainer}>
				<div className={styles.megaMenuContent}>
					<h3>men</h3>
					<ul>
						<li><Link>View all</Link></li>
						<li><Link>clothing</Link></li>
						<li><Link>shoes</Link></li>
						<li><Link>new in today</Link></li>
						<li><Link>new in: selling fast</Link></li>
						<li><Link>t-shirts & vests</Link></li>
						<li><Link>jeans & trousers</Link></li>
						<li><Link>shorts</Link></li>
						<li><Link>swimwear</Link></li>
						<li><Link>accessories</Link></li>
						<li><Link>face+body</Link></li>
						<li><Link>sportswear</Link></li>
						<li><Link>underwear</Link></li>
					</ul>
				</div>
				<div className={styles.megaMenuContent}>
					<h3>shop summer</h3>
					<ul>
						<li><Link> <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />summer outfits</Link></li>
						<li><Link> <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />holiday fits</Link></li>
						<li><Link> <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />linen</Link></li>
						<li><Link> <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />accessories</Link></li>
						<li><Link> <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />swimwear</Link></li>
						<li><Link> <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />sandals</Link></li>
					</ul>
				</div>
				<div className={styles.megaMenuContent}>
					<h3>brand drop</h3>
					<ul>
						<li><Link> <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />ASOS design</Link></li>
						<li><Link> <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />adidas</Link></li>
						<li><Link> <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />british brands</Link></li>
						<li><Link> <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />new balance</Link></li>
						<li><Link> <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />new look</Link></li>
						<li><Link> <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />the north face</Link></li>
					</ul>
				</div>
				<div className={styles.megaMenuContent}>
					<h3>new edits</h3>
					<ul>
						<li><Link>
							<img src="https://images.asos-media.com/navigation/uk_mw_hero_01_1680x876_05092024?&$n_320w$" alt="" />
							<p>retro terrace</p>
						</Link></li>
						<li><Link>
							<img src="https://images.asos-media.com/navigation/uk_mw_hero_02_1680x876_05092024?&$n_320w$" alt="" />
							<p>grandpa core</p>
						</Link></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default MegaMenu