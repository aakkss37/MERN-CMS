/* eslint-disable prettier/prettier */
import React,  { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext(null);



const AuthDataprovider = (props) => {
	// USER ACCCUNT
	const [isUserValid, setIsUserValid] = useState(true);
	console.log("loged  ----> ", isUserValid)



	return (
		<AuthContext.Provider value={{ isUserValid, setIsUserValid }}>
			{props.children}
		</AuthContext.Provider>
	)
}

AuthDataprovider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthDataprovider;