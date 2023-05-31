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
	CCardImage,
	CCardTitle,
	CCardText,
} from '@coreui/react'
import QuillEditor from 'src/components/quill/Quill';
import CIcon from '@coreui/icons-react';
import { cilPen, cilTrash } from '@coreui/icons';
import Modal from 'src/components/Modal/Modal';

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



const Recognition = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [modalVisible, setModalVisible] = useState(false)
	const [modalData, setModalData] = useState({})

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		console.log(file)
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
						<strong>RECOGNITION & AWARDS</strong>
					</CCardHeader>

					{/* CARDS */}
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


					{/* BODY */}
					<CCardBody>
						<CCard className="mb-4" style={{ padding: "10px", boxShadow: "0px 0px 9px 1px rgba(0,0,0,0.20)" }}>
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
												value={"<strong>Hey there</strong>"}
												className='home_recognition'
												text='Text'
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

export default Recognition