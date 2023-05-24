import ContactQuery from "../../model/ContectQuery/contectQuerySchema.js";




export const addContactQuery = async (request, response) => {
	console.log(request.body)
	try {
		const updated = await ContactQuery.create(request.body)
		response.status(200).json({ msg: "Banner Title Updated sucessfully.", data: updated });
	} catch (error) {
		response.status(500).json({ msg: "Error while Updating Title." });
	}
}

export const getContactQuery = async (request, response) => {
	console.log(request.body)
	try {
		const updated = await ContactQuery.find()
		response.status(200).json({ msg: "Banner Title Updated sucessfully.", data: updated });
	} catch (error) {
		response.status(500).json({ msg: "Error while Updating Title." });
	}
}

