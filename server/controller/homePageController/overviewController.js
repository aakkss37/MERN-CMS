import CompanyOverview from "../../model/HomePage/companyOverviewSchema.js";

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