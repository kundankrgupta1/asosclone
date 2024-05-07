import PropTypes from 'prop-types';
import { createContext, useState } from "react";

export const AuthContext = createContext();
const ContextProviderApp = ({ children }) => {

	const [isAuth, setIsAuth] = useState(!localStorage.getItem("token") ? false : true);
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [name, setName] = useState(localStorage.getItem("name"));

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
