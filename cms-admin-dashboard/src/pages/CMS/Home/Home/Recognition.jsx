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
	CSpinner,
} from '@coreui/react'
import QuillEditor from 'src/components/quill/Quill';
import CIcon from '@coreui/icons-react';
import { cilPen, cilTrash } from '@coreui/icons';
import Modal from 'src/components/Modal/Modal';
import { API } from 'src/services/interceptor';
import Warning from 'src/components/Popups/Warning/Warning';
import Success from 'src/components/Popups/Sucess/Success';
import Error from 'src/components/Popups/Error/Error';

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


const initialNewAwardData = {
	title: "",
	text: "",
	img: "",
}

const Recognition = () => {
	const [existingAwards, setExistingAwards] = useState(cardDummyData)
	const [newAward, setNewAward] = useState(initialNewAwardData)
	const [modalVisible, setModalVisible] = useState(false)
	const [modalData, setModalData] = useState({})
	const [showLoader, setShowLoader] = useState(false)
	const [warning, setWarning] = useState(false)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)


	const handleFileChange = (e) => {
		const file = e.target.files[0];
		console.log(file)
		setNewAward((prev) => ({ ...prev, img: file }));
	};

	const handleSubmit = async () => {
		console.log("new recognition and award ==> ", newAward)
		setShowLoader(true)
		let data = new FormData();
		console.log("img data ==> ", data)
		// data.append("filename", file.name);
		data.append("file", newAward.img);
		data.append("title", newAward.title);
		data.append("text", newAward.text);
		if (newAward?.img && newAward?.text && newAward?.title) {
			try {
				const resp = await API.setRecognitionAndAward(data, { 'Content-Type': 'multipart/form-data' })
				console.log(resp)
				setShowLoader(false)
				setSuccess(true)
				setTimeout(() => {
					setSuccess(false)
				}, 5000)
			} catch (error) {
				setShowLoader(false)
				setError(true)
				setTimeout(() => {
					setError(false)
				}, 5000)
				console.log(error)
			}
		} else {
			setShowLoader(false)
			setWarning(true)
			setTimeout(() => {
				setWarning(false)
			}, 5000)
		}
	}


	// MODAL
	const handleModalData = (data) => {
		setModalData(data)
		setModalVisible(true)
	}


	console.log(newAward)
	return (
		<div>
			{/* EVENT FEEDBACKS */}
			{
				warning && <Warning warningText="Fiels should not be empty!" />
			}

			{
				success && <Success successText='Banner update sucessfully' />
			}
			{
				error && <Error errorText='Something went wrong, please try again with a valid file.' />
			}

			<CCol xs={12}>
				<CCard className="mb-4">
					<CCardHeader>
						<strong>RECOGNITION & AWARDS</strong>
					</CCardHeader>

					{/* CARDS */}
					<div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
						{
							existingAwards?.map((item, index) => (
								<CCard className='cms__home__recognition__cards' key={index}>
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
													name='title'
													value={newAward?.title}
													onChange={(e) => setNewAward((prev) => ({ ...prev, title: e.target.value }))}
												/>
											</div>
											{/* QUILL */}
											<QuillEditor
												modules={modules}
												value={newAward.text}
												className='home_recognition'
												text='Text'
												onChange={(quillValue) => setNewAward((prev) => ({ ...prev, text: quillValue }))}
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
										newAward?.img ?
											<img src={URL.createObjectURL(newAward?.img)} alt="Selected" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", padding: "5px" }} />
											:
											<span>
												No File Chosen
											</span>
									}
								</div>
							</div>
						</CCard>
						{
							showLoader ?
								<CButton color="primary" className="px-4 cms__home__recognition__save_button" >
									<CSpinner color="light" size="sm" />
								</CButton>
								:
								<CButton
									color="primary"
									className='cms__home__recognition__save_button'
									onClick={handleSubmit}
								>
									Save Award
								</CButton>
						}
					</CCardBody>
				</CCard>
			</CCol>


			{/* MODAL  */}
			<Modal
				modalVisible={modalVisible}
				data={modalData}
				updateAPI={""}
				setModalVisible={setModalVisible}
			/>

		</div>
	)
}

export default Recognition