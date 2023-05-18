/* eslint-disable prettier/prettier */
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom/dist'
import AuthDataprovider  from '../context/authDataprovider.js'


// validate used login  
const PrivateRoute = () => {
	
	console.log(AuthDataprovider)
	const contextData = useContext(AuthDataprovider)
	console.log("kdchsklad==========>",  contextData)

	return (
		false
			?
			<>
				<Outlet />
			</>
			:
			<Navigate replace to='/login' />
	)
}

export default PrivateRoute