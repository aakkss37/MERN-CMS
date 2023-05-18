/* eslint-disable prettier/prettier */
import React,  { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const DataContext = createContext(null);



const AuthDataprovider = (props) => {
	// USER ACCCUNT
	const [isUserValid, setIsUserValid] = useState(false);
	// console.log("loged in account ----> ", userAccount)



	return (
		<DataContext.Provider value={{ isUserValid, setIsUserValid }}>
			{props.children}
		</DataContext.Provider>
	)
}

AuthDataprovider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthDataprovider;