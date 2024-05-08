import Navbar from './components/Navbar'
import AllRoutes from './routes/AllRoutes'
import TopHeader from './components/TopHeader'
import Message from './components/Message'
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer';
const App = () => {
	const location = useLocation();
    const hidePaths = ['/account', '/profile'];
    const hideComponents = hidePaths.includes(location.pathname);
	return (
		<>
			{!hideComponents && <TopHeader />}
			{!hideComponents && <Navbar />}
			{!hideComponents && <Message />}
			<AllRoutes />
			{!hideComponents && <Footer />}
		</>
	)
}

export default App