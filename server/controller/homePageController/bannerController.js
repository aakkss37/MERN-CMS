import BannerData from "../../model/HomePage/bannerSchema.js"


export const updateTitle = async (request, response) => {
	response.status(200).json({ msg: "Title updated sucessfully.", info: infoToSend });
}