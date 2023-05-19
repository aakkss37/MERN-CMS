/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
	CButton,
	CCard,
	CCardBody,
	CCardGroup,
	CCol,
	CContainer,
	CForm,
	CFormInput,
	CInputGroup,
	CInputGroupText,
	CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from "axios";
import { AuthContext } from 'src/context/authDataprovider'

const initialInput = {
	password: "",
	email: "",
}

const Login = () => {
	const navigate = useNavigate()  //--> to rediract to specified page
	const [userInput, setUserInput] = useState(initialInput)

	// login handling
	const { setIsUserValid } = useContext(AuthContext)
	const handleLogin = async () => {
		console.log("login ----> ")
		try {
			const resp = await axios.post('http://localhost:8000/login', {
				email: userInput.email, 
				password: userInput.password
			} )
			console.log(resp.data)
			// setIsUserValid(true)
			// navigate('/dashboard')
		} catch (error) {
			console.log(error.message)
		}
	}

	// user input handling
	const handleUserInput = (name, value) => {
		setUserInput((prevState) => ({
			...prevState,
			[name]: value
		}))
	}
	// console.log(userInput)
	return (
		<div className="bg-light min-vh-100 d-flex flex-row align-items-center">
			<CContainer>
				<CRow className="justify-content-center">
					<CCol md={8}>
						<CCardGroup>
							<CCard className="p-4">
								<CCardBody>
									<CForm>
										<h1>Login</h1>
										<p className="text-medium-emphasis">Sign In to your account</p>
										<CInputGroup className="mb-3">
											<CInputGroupText>
												<CIcon icon={cilUser} />
											</CInputGroupText>
											<CFormInput
												placeholder="Email"
												name="email"
												value={userInput.email}
												onChange={(e) => handleUserInput(e.target.name, e.target.value)}
											/>
										</CInputGroup>
										<CInputGroup className="mb-4">
											<CInputGroupText>
												<CIcon icon={cilLockLocked} />
											</CInputGroupText>
											<CFormInput
												type="password"
												placeholder="Password"
												name="password"
												value={userInput.password}
												onChange={(e) => handleUserInput(e.target.name, e.target.value)}
											/>
										</CInputGroup>
										<CRow>
											<CCol xs={6}>
												<CButton color="primary" className="px-4" onClick={handleLogin}>
													Login
												</CButton>
											</CCol>
											<CCol xs={6} className="text-right">
												<CButton color="link" className="px-0">
													Forgot password?
												</CButton>
											</CCol>
										</CRow>
									</CForm>
								</CCardBody>
							</CCard>
							<CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
								<CCardBody className="text-center">
									<div>
										<h2>Sign up</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua.
										</p>
										<Link to="/register">
											<CButton color="primary" className="mt-3" active tabIndex={-1}>
												Register Now!
											</CButton>
										</Link>
									</div>
								</CCardBody>
							</CCard>
						</CCardGroup>
					</CCol>
				</CRow>
			</CContainer>
		</div>
	)
}

export default Login
