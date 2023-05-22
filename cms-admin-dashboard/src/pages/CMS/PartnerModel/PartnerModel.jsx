/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
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
import './partnerModel.css'


import QuillEditor from 'src/components/quill/Quill';
// QUILL MODULES/TOOLBAR
const modules = {
	toolbar: [
		["bold", "italic", "underline", "strike",],
		[{
			color: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'magenta', 'teal', 'navy', 'olive', 'silver', 'maroon', 'lime', 'aqua', 'indigo', 'coral', 'white',]
		}],   // dropdown with defaults from theme
		[{ background: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'] }]     // dropdown with defaults from theme
		['clean']                                         // remove formatting button
	]
};


const PartnerModel = () => {
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
						<strong>PARTNERS MODEL</strong>
					</CCardHeader>
					<CCardBody>
						<CForm>
							<div className="mb-3">
								<CFormLabel htmlFor="officeCityName">City Name</CFormLabel>
								<CFormInput
									type="text"
									id="officeCityName"
									placeholder="Eg: Delhi"
								/>
							</div>
							{/* QUILL */}
							<QuillEditor
								modules={modules}
								value={"<strong>Hey there</strong>"}
								className='partner__model'
								text='Text'
							/>


						</CForm>
						<CCard className="mb-4" >
							<div className='partners__logos_container'>
								<div className='partners__logos'>
									<div className='partner__logo__display'>
										{
											selectedImage ?
												<img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", padding: "5px" }} />
												:
												<span>
													No File Chosen
												</span>

										}
									</div>
									<div className="mb-3 partner__logo__choose__input">
										<CFormInput type="file" size="sm" id="formFile" onChange={handleFileChange} />
									</div>
								</div>
							</div>
							<br/>
							<CButton
								color="primary"
								className=''
							>
								Add New Company
							</CButton>
						</CCard>

						{/* QUILL */}
						<QuillEditor
							modules={modules}
							value={"<strong>Hey there</strong>"}
							className='partner__model'
							text='Text'
						/>
						<div className='cms__contactus__office__button' >
							<CButton
								color="primary"
								className='cms__contactus__office__save_button'
							>
								Save
							</CButton>
						</div>

					</CCardBody>
				</CCard>
			</CCol>
		</div>
	)
}

export default PartnerModel