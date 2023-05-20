/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import './Home.css'
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
		["bold", "italic", "underline", "strike", "blockquote"],
		[{ color: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'] }],   // dropdown with defaults from theme
		[{ background: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'] }]     // dropdown with defaults from theme
		['clean']                                         // remove formatting button
	]
};


const Recognition = () => {
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
						<strong>RECOGNITION & AWARDS</strong>
					</CCardHeader>
					<CCardBody>
						<div className='cms__home__flex__containner'>
							<div className='cms__home__flex__item_left'>
								<CForm>
									<div className="mb-3">
										<CFormLabel htmlFor="homeBannerTitle">Title</CFormLabel>
										<CFormInput
											type="text"
											id="homeBannerTitle"
											placeholder="Eg: Innovation"
										/>
									</div>
									{/* QUILL */}
									<QuillEditor
										modules={modules}
										// value={"hello world"}
									/>
									<div className="mb-3">
										<CFormLabel htmlFor="formFile">Choose Banner Background</CFormLabel>
										<CFormInput type="file" id="formFile" onChange={handleFileChange} />
									</div>

									<CButton
										color="primary"
										className='col-3 save_button'
										style={{ marginTop: "50px" }}
									>
										Save
									</CButton>
								</CForm>
							</div>
							<div className='cms__home__flex__item_right'>
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
					</CCardBody>
				</CCard>
			</CCol>
		</div>
	)
}

export default Recognition