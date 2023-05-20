/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import './Home.css'
import {
	CCol,
	CCard,
	CCardBody,
	CCardHeader,
	CForm,
	CFormInput,
	CFormLabel,
	CFormTextarea,
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
						<div className='cms__home__flex__containner'>
							<div className='cms__home__flex__item_left'>
								<CForm>
									<div className="mb-3">
										<CFormLabel htmlFor="homeBannerTitle">Banner Title</CFormLabel>
										<CFormInput
											type="text"
											id="homeBannerTitle"
											placeholder="Eg: Innovation"
										/>
									</div>
									<div className="mb-3">
										<CFormLabel htmlFor="homeBannerTitle">Banner Text</CFormLabel>
										<CFormTextarea id="homeBannerTitle" rows="3"></CFormTextarea>
									</div>
									<div className="mb-3">
										<CFormLabel htmlFor="formFile">Choose Banner Background</CFormLabel>
										<CFormInput type="file" id="formFile" onChange={handleFileChange}/>
									</div>

									<CButton 
										color="primary" 
										className='col-3 save_button' 
										style={{marginTop: "50px"}}
									>
										Save
									</CButton>
								</CForm>
							</div>
							<div className='cms__home__flex__item_right'>
								{
									selectedImage ?
									 <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", padding: "5px"}}/>
									 :
									 <span>
										No File Chosen
									</span>
								}
							</div>
						</div>
					</CCardBody>
				</CCard>
			</CCol>
		</div>
	)
}

export default Banner