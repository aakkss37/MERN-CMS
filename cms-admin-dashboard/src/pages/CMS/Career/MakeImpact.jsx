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

const dummyArray = [{}, {}, {}]

const MakeImpact = () => {
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
						<strong>MAKE IMPACT</strong>
					</CCardHeader>
					<CCardBody>
						<CForm >
							<div className="mb-3">
								<CFormLabel htmlFor="makeImpactHead">Make Impact Head</CFormLabel>
								<CFormInput
									type="text"
									id="makeImpactHead"
									placeholder="Eg: Ready to make impact?"
								/>
								<QuillEditor
									modules={modules}
									value={"<p> Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Pellentesque semper vestibulum fermentum. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Pellentesque semper vestibulum fermentum.</p>"}
									className='career__make__impact career__make__impact__head'
									text='Text'
								/>
							</div>
						</CForm>
						<div className='cms__career__make__impact'>
							<CForm className='cms__career__make__impact__form__conatiner'>
								{
									dummyArray.map((item, index) => (
										<div className="mb-3" key={index}>
											<CFormLabel htmlFor="careerImpact">Impact {index+1}</CFormLabel>
											<CFormInput
												type="text"
												id="careerImpact"
												placeholder="Eg: Ready to make impact?"
											/>
											{/* QUILL */}
											<QuillEditor
												modules={modules}
												value={"<p> Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Pellentesque semper vestibulum fermentum."}
												className='career__make__impact'
												text='Text'
											/>
										</div>
									))
								}

							</CForm>
							<div className='cms__career__make__impact__img__container'>
								<div>
									<div className='cms__career__make__impact__img'>
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
										<CFormLabel htmlFor="formFile">Choose Headquater Dispaly Image</CFormLabel>
										<CFormInput type="file" id="formFile" onChange={handleFileChange} />
									</div>
								</div>
								<CButton
									color="primary"
									className='cms__career__make__impact__save_button'
								>
									Save
								</CButton>
							</div>
						</div>
					</CCardBody>
				</CCard>
			</CCol>
		</div>
	)
}

export default MakeImpact