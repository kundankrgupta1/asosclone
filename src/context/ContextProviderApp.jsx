import PropTypes from 'prop-types';
import { createContext, useState } from "react";

export const AuthContext = createContext();
const ContextProviderApp = ({ children }) => {

	const [isAuth, setIsAuth] = useState(false);
	const [token, setToken] = useState(null);
	const [name, setName] = useState("");

	return (
		<AuthContext.Provider value={{ name, setName, isAuth, setIsAuth, token, setToken }}>
			{children}
		</AuthContext.Provider>
	)
}

ContextProviderApp.propTypes = {
	children: PropTypes.node
};

export default ContextProviderApp
