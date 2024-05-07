import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AccountLoginSignup from '../components/Accounts/AccountLoginSignup'
import Profile from '../components/Accounts/Profile'

const AllRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/account' element={<AccountLoginSignup />} />
			<Route path='/profile' element={<Profile />} />
		</Routes>
	)
}

export default AllRoutes
