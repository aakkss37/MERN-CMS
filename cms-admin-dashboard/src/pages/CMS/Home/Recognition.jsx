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


const Recognition = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [quillValue, setQuillValue] = useState("<strong>Hey there</strong>")

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
						<CCard className="mb-4" style={{ padding: "10px", boxShadow: "0px 0px 9px 1px rgba(0,0,0,0.20)"}}>
							<div className='cms__home__recognition__flex__containner'>
								<div className='cms__home__recognition__flex__item_left'>
									<CForm>
										<div>
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
												value={quillValue}
											/>
											<div className="mb-3">
												<CFormLabel htmlFor="formFile">Choose Banner Background</CFormLabel>
												<CFormInput type="file" id="formFile" onChange={handleFileChange} />
											</div>
										</div>


									</CForm>
								</div>
								<div className='cms__home__recognition__flex__item_right'>
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
						<div >
							<CButton
								color="primary"
								className='cms__home__recognition__save_button'
							>
								Save
							</CButton>
							<CButton
								color="primary"
								className='cms__home__recognition__add_button'
							>
								Add New Recognition Award
							</CButton>
						</div>
					</CCardBody>
				</CCard>
			</CCol>
		</div>
	)
}

export default Recognition