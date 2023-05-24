/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import './career.css'
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
						<strong>BANNER</strong>
					</CCardHeader>
					<CCardBody>
						<CForm>
							<div className="mb-3">
								<CFormLabel htmlFor="careerBannerTitle">Banner Title</CFormLabel>
								<CFormInput
									type="text"
									id="careerBannerTitle"
									placeholder="Eg: Achieve Highest with us"
								/>
							</div>
							<br />
							<div className="mb-3">
								<CFormLabel htmlFor="formFile">Choose Banner Background</CFormLabel>
								<CFormInput type="file" id="formFile" onChange={handleFileChange} />
							</div>
							<div className='cms__career__banner__flex__item_right'>
								{
									selectedImage ?
										<img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", padding: "5px" }} />
										:
										<span>
											No File Chosen
										</span>
								}
							</div>
						</CForm>
						<CButton
							color="primary"
							className='cms__career__banner__save_button'
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