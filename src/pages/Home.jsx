import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Message from "../components/Message"
import Navbar from "../components/Navbar"
import TopHeader from "../components/TopHeader"

const Home = () => {
	const data = [
		{ id: 1, "icon": "facebook.png" },
		{ id: 2, "icon": "instagram.png" },
		{ id: 3, "icon": "snapchat.png"	},
		{ id: 4, "icon": "|" },
		{ id: 5, "icon": "visa.png"	},
		{ id: 6, "icon": "paypal.png" },
		{ id: 7, "icon": "mastercard.png" },
		{ id: 8, "icon": "american_express.png"	},
		{ id: 9, "icon": "discover.png" }
	]
	return (
		<div>
			<TopHeader />
			<Navbar />
			<Message data={data} />
			<Hero />
			<Footer data={data} />
		</div>
	)
}

export default Home