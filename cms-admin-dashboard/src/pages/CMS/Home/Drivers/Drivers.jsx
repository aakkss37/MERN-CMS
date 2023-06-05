/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import './drivers.css'
import {
	CCol,
	CCard,
	CCardBody,
	CCardHeader,
	CForm,
	CFormInput,
	CFormLabel,
	CButton,
	CFormTextarea,
} from '@coreui/react'
import QuillEditor from 'src/components/quill/Quill';

// QUILL MODULES/TOOLBAR
const modules = {
	toolbar: [
		["bold", "italic", "underline", "strike",],
		[{ size: ['small', 'large', 'huge'] }],
		[{ 'header': 1 }, { 'header': 2 }],
		[{
			color: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'magenta', 'teal', 'navy', 'olive', 'silver', 'maroon', 'lime', 'aqua', 'indigo', 'coral', 'white',]
		}],   // dropdown with defaults from theme
		[{ background: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'] }]     // dropdown with defaults from theme
		['clean']                                         // remove formatting button
	]
};


const Drivers = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [quillData, setQuillData] = useState("");


	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setSelectedImage(file);
	};

	return (
		<div>
			<CCol xs={12}>
				<CCard className="mb-4">
					<CCardHeader>
						<strong>DRIVERS MAIN</strong>
					</CCardHeader>
					<CCardBody>
						<div className='cms__home__driver__flex__containner'>
							<div className='cms__home__driver__flex__item_left'>
								<CForm  >
									<div className="mb-3">
										<QuillEditor
											modules={modules}
											value={quillData}
											className='career__make__impact career__make__impact__head'
											onChange={(e) => setQuillData((prev) => ({ ...prev, title: e.target.value }))}
										/>
										<div className="mb-3">
											<CFormLabel htmlFor="formFile">Choose Image</CFormLabel>
											<CFormInput type="file" id="formFile" onChange={handleFileChange} />
										</div>
									</div>
								</CForm>
							</div>
							<div className='cms__home__driver__flex__item_right'>
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
							className='cms__home__driver__save_button'
						>
							Save
						</CButton>
					</CCardBody>
				</CCard>
			</CCol >
			<CCol xs={12}>
				<CCard className="mb-4">
					<CCardHeader>
						<strong>OTHER CONTENTS</strong>
					</CCardHeader>
					<CCardBody>
						<div className='cms__home__drivers__other__flex__containner'>
							<div className='cms__home__drivers__other__flex__item'>
								<CForm  >
									<div className="mb-3">
										<div className="mb-3">
											<CFormLabel htmlFor="homeTitle"> Text</CFormLabel>
											<CFormTextarea id="homeTitle" rows="3"></CFormTextarea>
										</div>
										<div className="mb-3">
											<CFormLabel htmlFor="formFile">Choose  Background</CFormLabel>
											<CFormInput type="file" id="formFile" onChange={handleFileChange} />
										</div>
										<div className='cms__home__driver__others__flex__img__container'>
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
								</CForm>
							</div>
							<div className='cms__home__drivers__other__flex__item'>
								<CForm  >
									<div className="mb-3">
										<div className="mb-3">
											<CFormLabel htmlFor="homeTitle"> Text</CFormLabel>
											<CFormTextarea id="homeTitle" rows="3"></CFormTextarea>
										</div>
										<div className="mb-3">
											<CFormLabel htmlFor="formFile">Choose  Background</CFormLabel>
											<CFormInput type="file" id="formFile" onChange={handleFileChange} />
										</div>
										<div className='cms__home__driver__others__flex__img__container'>
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
								</CForm>
							</div>
							<div className='cms__home__drivers__other__flex__item'>
								<CForm  >
									<div className="mb-3">
										<div className="mb-3">
											<CFormLabel htmlFor="homeTitle"> Text</CFormLabel>
											<CFormTextarea id="homeTitle" rows="3"></CFormTextarea>
										</div>
										<div className="mb-3">
											<CFormLabel htmlFor="formFile">Choose  Background</CFormLabel>
											<CFormInput type="file" id="formFile" onChange={handleFileChange} />
										</div>
										<div className='cms__home__driver__others__flex__img__container'>
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
								</CForm>
							</div>
						</div>

						<CButton
							color="primary"
							className='cms__home__driver__save_button'
						>
							Save
						</CButton>
					</CCardBody>
				</CCard>
			</CCol >
		</div >
	)
}

export default Drivers