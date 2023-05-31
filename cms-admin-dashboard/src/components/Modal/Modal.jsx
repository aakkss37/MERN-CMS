/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './modal.css'
import {
	CForm,
	CFormInput,
	CFormLabel,
	CButton,
	CModal,
	CModalHeader,
	CModalTitle,
	CModalFooter,
	CModalBody,
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

const Modal = ({ modalVisible, setModalVisible, data, }) => {

	const [selectedImage, setSelectedImage] = useState(null);
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setSelectedImage(URL.createObjectURL(file));
	};

	return (
		<div>
			<CModal alignment="center" size="xl" scrollable visible={modalVisible} onClose={() => setModalVisible(false)}>
				<CModalHeader>
					<CModalTitle>{data.title}</CModalTitle>
				</CModalHeader>

				<CModalBody>
					<div className='modal__flex__containner'>
						<div className='modal__flex__item_left'>
							<CForm>
								<div>
									<div className="mb-3">
										<CFormLabel htmlFor="Title">Title</CFormLabel>
										<CFormInput
											type="text"
											id="Title"
											placeholder="Eg: Innovation"
											value={data.title}
										/>
									</div>
									{/* QUILL */}
									<QuillEditor
										modules={modules}
										value={data.text}
										className='career__life__at__agile'
										text='Text'
									/>
									<div className="mb-3">
										<CFormLabel htmlFor="formFile">Choose Banner Background</CFormLabel>
										<CFormInput type="file" id="formFile" onChange={handleFileChange} />
									</div>
								</div>
							</CForm>
						</div>
						<div className='modal__flex__item_right'>
							<img src={selectedImage ? selectedImage : data.img} alt="Selected" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", padding: "5px" }} />
						</div>
					</div>
				</CModalBody>
				<CModalFooter>
					<CButton color="secondary" onClick={() => setModalVisible(false)}>
						Close
					</CButton>
					<CButton color="primary">Save changes</CButton>
				</CModalFooter>
			</CModal>
		</div>
	)
}

Modal.propTypes = {
	modalVisible: PropTypes.bool.isRequired,
	data: PropTypes.object.isRequired,
	setModalVisible: PropTypes.func.isRequired,
	updateAPI: PropTypes.string.isRequired
};

export default Modal