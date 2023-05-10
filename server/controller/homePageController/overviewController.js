
const url = 'http://localhost:8000';




export const updateOverviewText = async (request, response) => {
	try {
		const found = await BannerData.findOne({})

		await BannerData.findByIdAndUpdate(found._id,
				{
					text: request.body.overViewText
				}
			)
		const updatedData = await BannerData.findOne({})
		response.status(200).json({ msg: "Banner Text Updated sucessfully.", data: updatedData });
	} catch (error) {
		response.status(500).json({ msg: "Error while Updating Text." });
	}
}