import BannerData from "../../model/HomePage/bannerSchema.js"


export const updateBannerTitle = async (request, response) => {
	try {
		const upateTitle = await BannerData.findByIdAndUpdate(request.body.id, 
			{
				title: request.body.title
			}
		)

		response.status(200).json({ msg: "Banner Title Updated sucessfully.", data: upateTitle });
	} catch (error) {
		response.status(500).json({ msg: "Error while Updating Title." });
	}
}

export const updateBannerText = async (request, response) => {
	try {
		const upateTitle = await BannerData.findByIdAndUpdate(request.body.id, 
			{
				title: request.body.title
			}
		)

		response.status(200).json({ msg: "Banner Title Updated sucessfully.", data: upateTitle });
	} catch (error) {
		response.status(500).json({ msg: "Error while Updating Title." });
	}
}

export const updateBannerImage = async (request, response) => {
	try {
		const upateTitle = await BannerData.findByIdAndUpdate(request.body.id, 
			{
				title: request.body.title
			}
		)

		response.status(200).json({ msg: "Banner Title Updated sucessfully.", data: upateTitle });
	} catch (error) {
		response.status(500).json({ msg: "Error while Updating Title." });
	}
}