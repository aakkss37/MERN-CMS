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

const Banner = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setSelectedImage(file);
	};
	return (
		<div>
			<CCol xs={12}>
				<CCard className="mb-4">
					<CCardHeader>
						<strong>CONTACT-US BANNER</strong>
					</CCardHeader>
					<CCardBody>
						<CForm>
							<div className='cms__contactus__banner'>
								{
									selectedImage ?
										<img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", padding: "5px" }} />
										:
										<span>
											No File Chosen
										</span>
								}
							</div>
							<div className="mb-3">
								<CFormLabel htmlFor="formFile">Choose Banner Background</CFormLabel>
								<CFormInput type="file" id="formFile" onChange={handleFileChange} />
							</div>
							<br />
							<div className="mb-3">
								<CFormLabel htmlFor="contactusBannerTitle">Banner Title</CFormLabel>
								<CFormInput
									type="text"
									id="contactusBannerTitle"
									placeholder="Eg: CONTACT US"
								/>
							</div>
						</CForm>
						<CButton
							color="primary"
							className='cms__contactus__banner__save_button'
						>
							Save
						</CButton>
					</CCardBody>
				</CCard>
			</CCol>
		</div>
	)
}

export default Banner