import CompanyOverview from "../../model/HomePage/companyOverviewSchema.js";
import OverviewCards from "../../model/HomePage/overviewCardsSchema.js";

const url = 'http://localhost:8000';




export const updateOverviewText = async (request, response) => {
	console.log("responce received ==> ", request.body)
	try {
		await CompanyOverview.findOneAndUpdate({}, {
			text: request.body.overViewText
		})
		
		const updatedData = await CompanyOverview.findOne({})
		response.status(200).json({ msg: "Banner Text Updated sucessfully.", data: updatedData });
	} catch (error) {
		response.status(500).json({ msg: "Error while Updating Text." });
	}
}
export const getOverviewText = async (request, response) => {
	try {
		const found = await CompanyOverview.findOne({})
		response.status(200).json({ msg: "Banner Text Updated sucessfully.", data: found });
	} catch (error) {
		response.status(500).json({ msg: "Error while Updating Text." });
	}
}


export const getOverviewCardData = async (request, response) => {
	try {
		const data = await OverviewCards.find()
		response.status(200).json({ msg: "Banner Text Updated sucessfully.", data: data });
	} catch (error) {
		response.status(500).json({ msg: "Error while Updating Text." });
	}
}

export const updateOverviewCards = async (request, response) => {
	console.log("responce received ==> ", request.body)
	try {
		await OverviewCards.deleteMany()
		await OverviewCards.insertMany(request.body)
		const data = await OverviewCards.find()
		response.status(200).json({ msg: "Banner Text Updated sucessfully.", data: data });
	} catch (error) {
		response.status(500).json({ msg: "Error while Updating Text." });
	}
}