import BannerData from "../../model/HomePage/bannerSchema.js"
const url = 'http://localhost:8000';


export const getBannerData = async(request, response)=> {
	try {
		const bannerData = await BannerData.findOne({})
		response.status(200).json(bannerData);
	} catch (error) {
		response.status(500).json({ msg: "Failed to get banner data." });
	}
}




export const updateBannerTitle = async (request, response) => {
	console.log(request.body)
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

export const uploadBannerImage = async (request, response) => {
	if (!request.file)
		return response.status(404).json("File not found");

	const imageUrl = `${url}/file/${request.file.filename}`;
	console.log("image url =====>", imageUrl)

	response.status(200).json(imageUrl);
}