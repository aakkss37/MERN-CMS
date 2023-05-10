import BannerData from "../../model/HomePage/bannerSchema.js"


export const updateTitle = async (request, response) => {
	console.log("request recieved")
	response.status(200).json({ msg: "Title updated sucessfully."});
}