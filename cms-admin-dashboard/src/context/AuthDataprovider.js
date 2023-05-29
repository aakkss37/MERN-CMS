/* eslint-disable prettier/prettier */
import React,  { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext(null);



const AuthDataprovider = (props) => {
	// USER ACCCUNT
	const [user, setUser] = useState({
		success: false,
		token: '',
		userDetails: {
			email: '',
			role: '',
			username: '',
			userId: '',
		}
	})
	// console.log("login  ----> ", isUserValid)

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{props.children}
		</AuthContext.Provider>
	)
}

AuthDataprovider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthDataprovider;