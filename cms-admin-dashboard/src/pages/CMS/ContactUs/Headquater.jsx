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

const Office = () => {
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
						<strong>OUR HEADQUEATER</strong>
					</CCardHeader>
					<CCardBody>
						<div className='cms__contactus__hq'>
							<CForm className='cms__contactus__hq__form'>
								<div className="mb-3">
									<CFormLabel htmlFor="formFile">Choose Headquater Dispaly Image</CFormLabel>
									<CFormInput type="file" id="formFile" onChange={handleFileChange} />
								</div>
								{/* QUILL */}
								<QuillEditor
									modules={modules}
									value={"<strong>Hey there</strong>"}
									className='contactus__headquater'
									text='Headquater Address'
								/>
							</CForm>
							<div className='cms__contactus__hq__img'>
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
						<CButton
							color="primary"
							className='cms__contactus__hq__save_button'
						>
							Save
						</CButton>
					</CCardBody>
				</CCard>
			</CCol>
		</div>
	)
}

export default Office