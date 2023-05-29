/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import './services.css'
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
		[{ size: ['small', 'large', 'huge'] }],
		[{ 'header': 1 }, { 'header': 2 }],
		[{
			color: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'magenta', 'teal', 'navy', 'olive', 'silver', 'maroon', 'lime', 'aqua', 'indigo', 'coral', 'white',]
		}],   // dropdown with defaults from theme
		[{ background: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'] }]     // dropdown with defaults from theme
		['clean']                                         // remove formatting button
	]
};


const Services = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [activeButton, setActiveButton] = useState({
		talk: true,
		connect: false,
		social: false
	})

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setSelectedImage(file);
	};
	return (
		<div>
			<div className='cms_home_services_button_group_container'>
				<button
					className={`
						cms_home_services_button_group 
						cms_home_services_button_group_left
						${activeButton.talk && "button_activate"}
					`}
					onClick={() => setActiveButton({ talk: true, connect: false, social: false })}
				>
					AGILE GLOBAL Talk
				</button>
				<button
					className={`
						cms_home_services_button_group 
						cms_home_services_button_group_mid
						${activeButton.connect && "button_activate"}
					`}
					onClick={() => setActiveButton({ talk: false, connect: true, social: false })}
				>
					AGILE GLOBAL Connect
				</button>
				<button
					className={`
						cms_home_services_button_group 
						cms_home_services_button_group_right
						${activeButton.social && "button_activate"}
					`}
					onClick={() => setActiveButton({ talk: false, connect: false, social: true })}
				>
					AGILE GLOBAL Social
				</button>
			</div>
			<CCol xs={12}>
				<CCard className="mb-4">
					<CCardHeader>
						<strong>BANNER</strong>
					</CCardHeader>
					<CCardBody>
						<CForm>
							<div className='cms__home__services__flex__img_container'>
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

							<div className='cms__home__services__body__flex__containner'>
								<div className='cms__home__services__body__flex__item_left'>
									<CForm>
										<QuillEditor
											modules={modules}
											value={"<p> Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Pellentesque semper vestibulum fermentum. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Pellentesque semper vestibulum fermentum.</p>"}
											className='career__make__impact career__make__impact__head'
											text='Services Body'
										/>
										<div className="mb-3">
											<CFormLabel htmlFor="formFile">Choose Banner Background</CFormLabel>
											<CFormInput type="file" id="formFile" onChange={handleFileChange} />
										</div>
									</CForm>
								</div>
								<div className='cms__home__services__body__flex__item_right'>
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
						<CButton
							color="primary"
							className='cms__home__services__save_button'
						>
							Save
						</CButton>
					</CCardBody>
				</CCard>
			</CCol>
		</div>
	)
}

export default Services