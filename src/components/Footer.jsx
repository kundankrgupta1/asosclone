import style from "./footer.module.css"
import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<div className={style.mainFooter}>
			<div className={style.footerSocialPaymentMain}>
				<div className={style.footerSocialPayment}>
					<ul>
						<li><Link><img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/icons8-facebook-96.png" alt="facebook" /></Link></li>
						<li><Link><img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/icons8-instagram-96.png" alt="instagram" /></Link></li>
						<li><Link><img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/icons8-snapchat-96.png" alt="snapchat" /></Link></li>
					</ul>
					<ul>
						<li><Link><img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/american-express-png.webp" alt="american-express" /></Link></li>
						<li><Link><img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/mastercard-png.webp" alt="mastercard" /></Link></li>
						<li><Link><img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/pay-pal-png.webp" alt="pay-pal" /></Link></li>
						<li><Link><img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/visa-electron-png.webp" alt="visa-electron" /></Link></li>
						<li><Link><img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/visa-png.webp" alt="visa" /></Link></li>
					</ul>
				</div>
			</div>
			<div className={style.footer}>
				<div className={style.footerLinks}>
					<p>help & Information</p>
					<ul>
						<li><Link>Help</Link></li>
						<li><Link>Track order</Link></li>
						<li><Link>Delivery & returns</Link></li>
						<li><Link>Sitemap</Link></li>
					</ul>
				</div>
				<div className={style.footerLinks}>
					<p>about asos</p>
					<ul>
						<li><Link>About us</Link></li>
						<li><Link>Careers at ASOS</Link></li>
						<li><Link>Corporate responsibility</Link></li>
						<li><Link>Investor&#39;s site</Link></li>
						<li><Link>Store Locator</Link></li>
					</ul>
				</div>
				<div className={style.footerLinks}>
					<p>more from asos</p>
					<ul>
						<li><Link>Mobile and ASOS apps</Link></li>
						<li><Link>ASOS Marketplace</Link></li>
						<li><Link>Gift vouchers</Link></li>
						<li><Link>Black Friday</Link></li>
						<li><Link>ASOS x Thrift+</Link></li>
						<li><Link>Discover the ASOS Credit Card</Link></li>
						<li><Link>Help Improves the ASOS Website</Link></li>
					</ul>
				</div>
				<div className={style.footerLinks}>
					<p>shopping from:</p>
					<p>You&#39;re in <img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/india-circle.png" height={"15px"} alt="india" /> | <Link>CHANGE</Link></p>
					<p>Some of our international sites:</p>
					<div className={style.footerSites}>
						<img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/india-circle.png" alt="india" height={"18px"} />
						<img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/brazil.png" alt="brazil" height={"18px"} />
						<img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/finland.png" alt="finland" height={"18px"} />
						<img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/france.png" alt="france" height={"18px"} />
						<img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/germany.png" alt="germany" height={"18px"} />
						<img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/uk.png" alt="uk" height={"18px"} />
						<img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/usa.png" alt="usa" height={"18px"} />
						<img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/italy.png" alt="italy" height={"18px"} />
						<img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/switzerland.png" alt="switzerland" height={"18px"} />
						<img src="https://raw.githubusercontent.com/kundankrgupta1/media/main/assets/singapore.png" alt="singapore" height={"18px"} />

					</div>
				</div>
			</div>
			<div className={style.subFooter}>
				<div className={style.subFooterText}>
					<p>© 2024 ASOS</p>
					<p>Privacy & Cookies | Ts&Cs | Accessibility</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
