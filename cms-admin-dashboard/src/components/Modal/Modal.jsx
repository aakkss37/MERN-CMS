/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
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
	CSpinner,
} from '@coreui/react'
import QuillEditor from 'src/components/quill/Quill';
import Warning from '../Popups/Warning/Warning';

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

const Modal = ({ modalVisible, setModalVisible, data, APIcallHandle, setShowModalLoader, showModalLoader }) => {
	const [modalData, setModalData] = useState({})
	const [newImage, setNewImage] = useState(null);
	// feedback state
	const [fieldEmptyWarning, setFieldEmptyWarning] = useState(false)


	useEffect(()=> {
		// console.log("in useEffect----------->",data)
		setModalData(() => ({
			id: data?._id,
			title: data?.title,
			text: data?.text,
			img: data?.img
		}))
	}, [data])

	// console.log("modalData ====> ",modalData)

	const handleImgChange = (e) => {
		const file = e.target.files[0];
		setNewImage(file);
	};
	const handleTitleChange = (e)=> {
		const newValue = e.target.value;
		setModalData((prev) => ({ ...prev, title: newValue }))
	}
	const handleTextChange = (newValue)=> {
		setModalData((prev)=> ({...prev, text: newValue}))
	}

	const submitHandler = async ()=> {
		console.log("data to be submited ===> ",modalData)
		if (modalData.title && modalData.text) {
			setShowModalLoader(true)
			let data = new FormData()
			data.append("id", modalData.id)
			data.append("title", modalData.title)
			data.append("text", modalData.text)
			newImage ? data.append("file", newImage) : data.append("img", modalData.img)

			// api call
			APIcallHandle(data)
			setModalVisible(false)
		} else {
			setShowModalLoader(false)
			setFieldEmptyWarning(true)
			setTimeout(() => {
				setFieldEmptyWarning(false)
			}, 5000)
		}
	}

	// console.log(modalData)
	// console.log(noChangeWarning)

	return (
		<div>
			{/* EVENT FEEDBACKS */}
			{
				fieldEmptyWarning && <Warning warningText="Field can not be empty!" />
			}
			

			<CModal alignment="center" size="xl" scrollable visible={modalVisible} onClose={() => setModalVisible(false)}>
				<CModalHeader>
					<CModalTitle>Edit: {data.title}</CModalTitle>
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
											value={modalData?.title}
											onChange={handleTitleChange}
										/>
									</div>
									{/* QUILL */}
									<QuillEditor
										modules={modules}
										value={modalData?.text}
										className='career__life__at__agile'
										text='Text'
										onChange={(changedValue) => handleTextChange(changedValue)}
									/>
									<div className="mb-3">
										<CFormLabel htmlFor="formFile">Choose Banner Background</CFormLabel>
										<CFormInput type="file" id="formFile" onChange={handleImgChange} />
									</div>
								</div>
							</CForm>
						</div>
						<div className='modal__flex__item_right'>
							<img src={newImage ? URL.createObjectURL(newImage) : data.img} alt="Selected" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", padding: "5px" }} />
						</div>
					</div>
				</CModalBody>
				<CModalFooter>
					<CButton color="secondary" onClick={() => setModalVisible(false)}>
						Close
					</CButton>
					{
						showModalLoader ?
							<CButton color="primary" className="px-4"  style={{width: '8rem'}}>
								<CSpinner color="light" size="sm" />
							</CButton>
							:
							<CButton color="primary" style={{ width: '8rem' }} onClick={submitHandler}>Save changes</CButton>
					}
				</CModalFooter>
			</CModal>
		</div>
	)
}

Modal.propTypes = {
	modalVisible: PropTypes.bool.isRequired,
	data: PropTypes.object.isRequired,
	setModalVisible: PropTypes.func.isRequired,
	APIcallHandle: PropTypes.func.isRequired,
	showModalLoader: PropTypes.bool.isRequired,
	setShowModalLoader: PropTypes.func.isRequired,
};

export default Modal