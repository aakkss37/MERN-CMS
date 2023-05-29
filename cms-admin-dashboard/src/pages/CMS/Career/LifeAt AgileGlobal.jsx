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
	CCardImage,
	CCardTitle,
	CCardText,
} from '@coreui/react'
import QuillEditor from 'src/components/quill/Quill';
import CIcon from '@coreui/icons-react';
import { cilPen, cilTrash } from '@coreui/icons';
import Modal from './Modal';

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

const cardDummyData = [
	{
		id: 1,
		title: "Card Title 1",
		text: 'Some quick example text to build on the card content.',
		img: 'https://picsum.photos/500/400'
	},
	{
		id: 2,
		title: "Card Title 2",
		text: 'Some quick example text to build on the card content.',
		img: 'https://picsum.photos/500/400'
	},
	{
		id: 3,
		title: "Card Title 3",
		text: 'Some quick example text to build on the card content.',
		img: 'https://picsum.photos/500/400'
	},
	{
		id: 4,
		title: "Card Title 4",
		text: 'Some quick example text to build on the card content.',
		img: 'https://picsum.photos/500/400'
	},
]


const LifeAtAgileGlobal = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [modalVisible, setModalVisible] = useState(false)
	const [modalData, setModalData] = useState({})

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setSelectedImage(file);
	};

	const handleModalData = (data) => {
		setModalData(data)
		setModalVisible(true)
	}


	return (
		<div>
			<CCol xs={12}>
				<CCard className="mb-4">
					<CCardHeader>
						<strong>LIFE AT AGILE GLOBAL</strong>
					</CCardHeader>
					<div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
						{
							cardDummyData?.map((item, index) => (
								<CCard className='cms__career__life__cards' key={index}>
									<CCardImage orientation="top" src={item.img} />
									<CCardBody>
										<CCardTitle>{item.title}</CCardTitle>
										<CCardText>
											{item.text}
										</CCardText>
										<div style={{ display: "flex", justifyContent: "space-between" }}>
											<CButton color='none' onClick={() => handleModalData(item)}>
												<CIcon icon={cilPen} style={{ fontWeight: 800 }} />
											</CButton>
											<CButton color='none' >
												<CIcon icon={cilTrash} style={{ fontWeight: 800 }} />
											</CButton>
										</div>
									</CCardBody>
								</CCard>
							))
						}
					</div>
					<CCardBody>
						<CCard className="mb-4" style={{ padding: "10px", boxShadow: "0px 0px 9px 1px rgba(0,0,0,0.20)" }}>
							<div className='cms__career__life__flex__containner'>
								<div className='cms__career__life__flex__item_left'>
									<CForm>
										<div>
											<div className="mb-3">
												<CFormLabel htmlFor="careerLifeAtAgileTitle">Title</CFormLabel>
												<CFormInput
													type="text"
													id="careerLifeAtAgileTitle"
													placeholder="Eg: Innovation"
												/>
											</div>
											{/* QUILL */}
											<QuillEditor
												modules={modules}
												value={"<strong>Hey there</strong>"}
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
								<div className='cms__career__life__flex__item_right'>
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
						<CButton
							color="primary"
							className='cms__career__life__add_button'
						>
							Add New Card
						</CButton>
					</CCardBody>
				</CCard>
			</CCol>


			{/* MODAL  */}
			{/* MODAL  */}
			<Modal
				modalVisible={modalVisible}
				data={modalData}
				setModalVisible={setModalVisible}
			/>

		</div>
	)
}

export default LifeAtAgileGlobal