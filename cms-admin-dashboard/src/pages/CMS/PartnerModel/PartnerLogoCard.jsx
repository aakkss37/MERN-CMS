/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
	CFormInput,
} from '@coreui/react'
import './partnerModel.css'

const PartnerLogoCard = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setSelectedImage(file);
	}
	return (
		<div className='partners__logos'>
			<div className='partner__logo__display'>
				{
					selectedImage ?
						<img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ width: "100%", height: "100%", objectFit: "cover", us: "10px", padding: "5px" }} />
						:
						<span>
							No File Chosen
						</span>

				}
			</div>
			<div className="mb-3 partner__logo__choose__input">
				<CFormInput type="file" size="sm" id="formFile" onChange={handleFileChange} />
			</div>
		</div>
	)
}

export default PartnerLogoCard