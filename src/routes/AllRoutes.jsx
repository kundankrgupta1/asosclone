import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Account from '../components/Accounts/Account'
import Profile from '../components/Accounts/Profile'
import Mens from '../pages/Mens'
import PrivateRoutes from '../context/PrivateRoutes'
import Womens from '../pages/Womens'
import Dashboard from '../components/Admins/Dashboard'

const AllRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/account' element={<Account />} />
			<Route path='/profile' element={
				<PrivateRoutes>
					<Profile />
				</PrivateRoutes>
			} />
			<Route path="/mens" element={<Mens />} />
			<Route path="/womens" element={<Womens />} />
			<Route path="/admin" element={<Dashboard />} />
		</Routes>
	)
}

export default AllRoutes
