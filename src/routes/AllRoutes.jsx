import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AccountLoginSignup from '../components/Accounts/AccountLoginSignup'

const AllRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/account' element={<AccountLoginSignup />} />
		</Routes>
	)
}

export default AllRoutes
