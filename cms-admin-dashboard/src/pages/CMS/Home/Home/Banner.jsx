/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import './Home.css'
import {
	CCol,
	CCard,
	CCardBody,
	CCardHeader,
	CForm,
	CFormInput,
	CFormLabel,
	CFormTextarea,
	CButton,
	CSpinner,
} from '@coreui/react'
import { API } from 'src/services/interceptor'
import Warning from 'src/components/Popups/Warning/Warning'
import Success from 'src/components/Popups/Sucess/Success'
import Error from 'src/components/Popups/Error/Error'
const initialBannerData = {
	title: "",
	text: "",
	bannerImg: "",
}
const Banner = () => {
	const [bannerData, setBannerData] = useState(initialBannerData)
	const [showLoader, setShowLoader] = useState(false)
	const [warning, setWarning] = useState(false)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const getBannerData = async () => {
			try {
				const { data } = await API.getHomePageBanner()
				// console.log(data)
				setBannerData({
					title: data.title,
					text: data.text,
					bannerImg: data.bannerImg,
				})
			} catch (error) {
				console.log(error.message)
			}
		}
		getBannerData()
	}, []);

	const handleFileChange = (file) => {
		// console.log("***************************", file)
		setBannerData((prevData) => (
			{
				...prevData,
				bannerImg: file
			}
		))

	};
	// console.log("current banner", bannerData)

	const handleBannerUpdate = async () => {
		console.log("Banner Data====> ", bannerData)
		if (bannerData.title && bannerData.text && bannerData.bannerImg) {
			setShowLoader(true)

			let data = new FormData();
			console.log("img data ==> ", data)
			// data.append("filename", file.name);
			data.append("file", bannerData.bannerImg);
			data.append("title", bannerData.title);
			data.append("text", bannerData.text);
			// to print FormData ===> 
			// for (var pair of data.entries()) {
			// 	console.log(pair[0] + ', ' + pair[1]);
			// }
			try {
				const resp = await API.setHomePageBanner(data, { 'Content-Type': 'multipart/form-data' })
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
	// console.log("typeof (bannerData.bannerImg) =====>>>>> ", typeof (bannerData.bannerImg))
	// console.log("typeof (bannerData.bannerImg) is string =====>>>>> ", typeof (bannerData?.bannerImg) == typeof("string"))

	const handleBannerDataChange = (e) => {
		setBannerData((prevData) => (
			{
				...prevData,
				[e.target.name]: e.target.value
			}
		))
	}

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



			{/* BANNER BODY */}
			<CCol xs={12}>
				<CCard className="mb-4">
					<CCardHeader>
						<strong>BANNER</strong>
					</CCardHeader>
					<CCardBody>
						<div className='cms__home__banner__flex__containner'>
							<div className='cms__home__banner__flex__item_left'>
								<CForm>
									<div className="mb-3">
										<CFormLabel htmlFor="homeBannerTitle">Banner Title <b style={{ fontSize: "10px" }}>(Uppercase recomended)</b></CFormLabel>
										<CFormInput
											type="text"
											id="homeBannerTitle"
											placeholder="Eg: Innovation"
											name='title'
											value={bannerData?.title}
											onChange={handleBannerDataChange}
										/>
									</div>
									<br />
									<div className="mb-3">
										<CFormLabel htmlFor="homeBannerTitle">Banner Text</CFormLabel>
										<CFormTextarea
											id="homeBannerTitle"
											rows="3"
											name='text'
											value={bannerData?.text}
											onChange={handleBannerDataChange}
										/>
									</div>
									<br />
									<div className="mb-3">
										<CFormLabel htmlFor="formFile">Choose Banner Background</CFormLabel>
										<CFormInput type="file" id="formFile" onChange={(e) => handleFileChange(e.target.files[0])} />
									</div>


								</CForm>
							</div>
							<div className='cms__home__banner__flex__item_right'>
								{
									bannerData?.bannerImg ?
										<img src={typeof (bannerData?.bannerImg) == typeof ("string") ? bannerData?.bannerImg : URL.createObjectURL(bannerData?.bannerImg)} alt="Selected" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", padding: "5px" }} />
										:
										<span>
											No File Chosen
										</span>
								}
							</div>
						</div>
						{
							showLoader ?
								<CButton color="primary" className="px-4 cms__home__banner__save_button" >
									<CSpinner color="light" size="sm" />
								</CButton>
								:
								<CButton
									color="primary"
									className='cms__home__banner__save_button'
									onClick={handleBannerUpdate}
								>
									Save
								</CButton>
						}
					</CCardBody>
				</CCard>
			</CCol>
		</div>
	)
}

export default Banner