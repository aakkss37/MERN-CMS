/* eslint-disable prettier/prettier */
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom/dist'
import {AuthContext}  from '../context/authDataprovider.js'


// validate used login  
const PrivateRoute = () => {
	
	const { isUserValid } = useContext(AuthContext)

	return (
		isUserValid
			?
			<>
				<Outlet />
			</>
			:
			<Navigate replace to='/login' />
	)
}

export default PrivateRoute