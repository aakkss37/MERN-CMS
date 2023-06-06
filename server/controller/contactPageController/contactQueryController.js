import catchAsyncError from "../../middleware/catchAsyncError.js";
import ContactQuery from "../../model/ContactPage/contactQuerySchema.js";
import ErrorHandler from "../../utils/ErrorHandler.js";




export const addContactQuery = catchAsyncError(async (req, res, next) => {
	const { fname, lname, email, phone, subject } = req.body;
	const result = await ContactQuery.create({
		firstName: fname,
		lastName: lname,
		email: email,
		phone: phone,
		subject: subject,
	})

	if (!result) return (next(new ErrorHandler("something went wrong while creating contact data", 400)));
	res.status(200).json({ success: true, message: "data inserted successfully" });

})

export const getContactQuery = catchAsyncError(async (req, res, next) => {
	const result = await ContactQuery.find();

	if (!result) return next(new ErrorHandler("No query found", 404))
	res.status(200).json({ success: true, data: result });
})
