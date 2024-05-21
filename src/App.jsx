import AllRoutes from './routes/AllRoutes'
import Navbar from './components/Navbar/Navbar';
import TopHeader from './components/Navbar/TopHeader'
import Message from './components/Indicator/Message'
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import CatNavbar from './components/Navbar/CatNavbar';
const App = () => {
	const location = useLocation();
    const hidePaths = ['/account', '/profile', '/admin'];
	const hideNav = ['/', '/account', '/profile', '/admin'];
    const hideComponents = hidePaths.includes(location.pathname);
    const hideNavComponents = hideNav.includes(location.pathname);
	return (
		<>
			{!hideComponents && <TopHeader />}
			{!hideComponents && <Navbar />}
			{!hideNavComponents && <CatNavbar />}
			{!hideComponents && <Message />}
			<AllRoutes />
			{!hideComponents && <Footer />}
		</>
	)
}

export default App