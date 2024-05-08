import PropTypes from 'prop-types';
import { AuthContext } from './ContextProviderApp';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
	const { isAuth } = useContext(AuthContext);
	return (
		isAuth ? children : <Navigate to="/account" />
	);
};

PrivateRoutes.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PrivateRoutes;