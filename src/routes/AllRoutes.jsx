import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AccountLoginSignup from '../components/Accounts/AccountLoginSignup'
import Profile from '../components/Accounts/Profile'
import Mens from '../pages/Mens'
import PrivateRoutes from '../context/PrivateRoutes'

const AllRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/account' element={<AccountLoginSignup />} />
			<Route path='/profile' element={
				<PrivateRoutes>
					<Profile />
				</PrivateRoutes>

			} />
			<Route path="/mens" element={<Mens />} />
		</Routes>
	)
}

export default AllRoutes
