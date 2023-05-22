/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import './contactUs.css'
import {
	CCol,
	CCard,
	CCardBody,
	CCardHeader,
	CForm,
	CFormInput,
	CFormLabel,
	CButton,
} from '@coreui/react'

const Office = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setSelectedImage(file);
	}
	return (
		<div>
			<CCol xs={12}>
				<CCard className="mb-4">
					<CCardHeader>
						<strong>OFFICE</strong>
					</CCardHeader>
					<CCardBody>
						<CCard className="mb-4" style={{ padding: "10px", boxShadow: "0px 0px 9px 1px rgba(0,0,0,0.20)" }}>
							<div className='cms__contactus__office__flex__containner'>
								<div className='cms__contactus__office__flex__item_left'>
									<CForm>
										<div>
											<div className="mb-3">
												<CFormLabel htmlFor="officeCityName">City Name</CFormLabel>
												<CFormInput
													type="text"
													id="officeCityName"
													placeholder="Eg: Delhi"
												/>
											</div>
											<div className="mb-3">
												<CFormLabel htmlFor="officeCityName">Phone</CFormLabel>
												<CFormInput
													type="text"
													id="officePhone"
													placeholder="Eg: 9999999999"
												/>
											</div>
											<div className="mb-3">
												<CFormLabel htmlFor="officeCityName">Fax</CFormLabel>
												<CFormInput
													type="text"
													id="officeFax"
													placeholder="Eg: 9999999999"
												/>
											</div>
											
											<div className="mb-3">
												<CFormLabel htmlFor="formFile">Choose Office Image</CFormLabel>
												<CFormInput type="file" id="formFile" onChange={handleFileChange} />
											</div>
										</div>


									</CForm>
								</div>
								<div className='cms__contactus__office__flex__item_right'>
									{
										selectedImage ?
											<img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", padding: "5px" }} />
											:
											<span>
												No File Chosen
											</span>
									}
								</div>
							</div>
						</CCard>
						<div className='cms__contactus__office__button' >
							<CButton
								color="primary"
								className='cms__contactus__office__save_button'
							>
								Save
							</CButton>
							<CButton
								color="primary"
								className='cms__contactus__office__add_button'
							>
								Add New Office
							</CButton>
						</div>
					</CCardBody>
				</CCard>
			</CCol>
		</div>
	)
}


export default Office