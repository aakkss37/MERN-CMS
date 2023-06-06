/* eslint-disable prettier/prettier */
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom/dist'
import {AuthContext}  from '../context/AuthDataprovider.js'


// validate used login  
const PrivateRoute = () => {
	
	const { user } = useContext(AuthContext)
	

	return (
		user.success
			?
			<>
				<Outlet />
			</>
			:
			<Navigate replace to='/login' />
	)
}

export default PrivateRoute