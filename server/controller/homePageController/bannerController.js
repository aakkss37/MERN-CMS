import BannerData from "../../model/HomePage/bannerSchema.js"



export const getBannerData = async(request, response)=> {
	try {
		const bannerData = await BannerData.findOne({})
		response.status(200).json(bannerData);
	} catch (error) {
		response.status(500).json({ msg: "Failed to get banner data." });
	}
}


export const updateBannerTitle = async (request, response) => {
	try {
		await BannerData.findByIdAndUpdate(request.body.id, 
			{
				title: request.body.title
			}
		)
		const updatedData = await BannerData.findOne({})
		response.status(200).json({ msg: "Banner Title Updated sucessfully.", data: updatedData });
	} catch (error) {
		response.status(500).json({ msg: "Error while Updating Title." });
	}
}

export const updateBannerText = async (request, response) => {
	try {
		await BannerData.findByIdAndUpdate(request.body.id, 
			{
				text: request.body.text
			}
		)
		const updatedData = await BannerData.findOne({})
		response.status(200).json({ msg: "Banner Text Updated sucessfully.", data: updatedData });
	} catch (error) {
		response.status(500).json({ msg: "Error while Updating Text." });
	}
}

export const updateBannerImage = async (request, response) => {
	try {
		await BannerData.findByIdAndUpdate(request.body.id, 
			{
				bannerImg: request.body.imageUrl
			}
		)
		const updatedData = await BannerData.findOne({})
		response.status(200).json({ msg: "Banner Image Updated sucessfully.", data: updatedData });
	} catch (error) {
		response.status(500).json({ msg: "Error while Updating Title." });
	}
}