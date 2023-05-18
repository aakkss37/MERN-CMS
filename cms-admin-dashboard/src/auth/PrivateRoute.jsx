/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { Navigate, Outlet } from 'react-router-dom/dist'


// validate used login  
const PrivateRoute = () => {
	const [isLogin, setIsLosin] = useState(true)

	return (
		isLogin
			?
			<>
				<Outlet />
			</>
			:
			<Navigate replace to='/login' />
	)
}

export default PrivateRoute