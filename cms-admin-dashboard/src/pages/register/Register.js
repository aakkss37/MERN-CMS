/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import axios from 'axios'
import {
	CButton,
	CCard,
	CCardBody,
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
import { useNavigate } from 'react-router-dom'

const Register = () => {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		email: '',
		username: '',
		password: '',
		confirmPassword: ''
	});

	// Handle form input
	const handleChange = (name, value) => {
		console.log(name, value)
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value
		}));
	};
	// Handle submit
	const [errors, setErrors] = useState({});
	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length === 0) {
			// Registration logic 
			try {
				const resp = await axios.post("http://localhost:8000/registration", {
					email: formData.email,
					username: formData.username,
					password: formData.password,
				});
				console.log("====> ===> ", resp)
				// Reset form data
				setFormData({
					email: '',
					username: '',
					password: '',
					confirmPassword: ''
				});
				navigate('/login')
			} catch (error) {
				console.log(error.message)
			}

		} else {
			setErrors(validationErrors);
		}
	};

	// Form Validation 
	const validateForm = () => {
		let validationErrors = {};
		const { email, username, password, confirmPassword } = formData;

		// Validate username
		if (!username) {
			validationErrors.username = 'Username is required.';
		}

		// Validate email
		else if (!email) {
			validationErrors.email = 'Email is required.';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			validationErrors.email = 'Invalid email address.';
		}


		// Validate password
		else if (!password) {
			validationErrors.password = 'Password is required.';
		} else if (password.length <= 8) {
			validationErrors.password = 'Password should be at least 6 characters long.';
		}

		// Validate confirm password
		else if (!confirmPassword) {
			validationErrors.confirmPassword = 'Confirm Password is required.';
		} else if (password !== confirmPassword) {
			validationErrors.confirmPassword = 'Passwords do not match.';
		}

		return validationErrors;
	};


	return (
		<div className="bg-light min-vh-100 d-flex flex-row align-items-center">
			<CContainer>
				<CRow className="justify-content-center">
					<CCol md={9} lg={7} xl={6}>
						<CCard className="mx-4">
							<CCardBody className="p-4">
								<CForm>
									<h1>Register</h1>
									<p className="text-medium-emphasis">Create your account</p>
									{errors.email && <span className="error" style={{ color: "red" }}>{errors.email}</span>}
									{errors.username && <span className="error" style={{ color: "red" }}>{errors.username}</span>}
									{errors.password && <span className="error" style={{ color: "red" }}>{errors.password}</span>}
									{errors.confirmPassword && <span className="error" style={{ color: "red" }}>{errors.confirmPassword}</span>}
									<CInputGroup className="mb-3">
										<CInputGroupText>
											<CIcon icon={cilUser} />
										</CInputGroupText>
										<CFormInput
											placeholder="Username"
											autoComplete="username"
											name='username'
											value={formData.username}
											onChange={(e) => handleChange(e.target.name, e.target.value)}
										/>
									</CInputGroup>
									<CInputGroup className="mb-3">
										<CInputGroupText>@</CInputGroupText>
										<CFormInput
											placeholder="Email"
											autoComplete="email"
											name="email"
											value={formData.email}
											onChange={(e) => handleChange(e.target.name, e.target.value)}
										/>
									</CInputGroup>
									<CInputGroup className="mb-3">
										<CInputGroupText>
											<CIcon icon={cilLockLocked} />
										</CInputGroupText>
										<CFormInput
											type="password"
											placeholder="Password"
											autoComplete="new-password"
											name="password"
											value={formData.password}
											onChange={(e) => handleChange(e.target.name, e.target.value)}
										/>
									</CInputGroup>
									<CInputGroup className="mb-4">
										<CInputGroupText>
											<CIcon icon={cilLockLocked} />
										</CInputGroupText>
										<CFormInput
											type="password"
											placeholder="Repeat password"
											autoComplete="new-password"
											name="confirmPassword"
											value={formData.confirmPassword}
											onChange={(e) => handleChange(e.target.name, e.target.value)}
										/>
									</CInputGroup>
									<div className="d-grid">
										<CButton color="success" onClick={handleSubmit}>Create Account</CButton>
									</div>
								</CForm>
							</CCardBody>
						</CCard>
					</CCol>
				</CRow>
			</CContainer>
		</div>
	)
}

export default Register
