import catchAsyncError from "../../middleware/catchAsyncError.js";
import CompanyOverview from "../../model/HomePage/companyOverviewSchema.js";
import OverviewCards from "../../model/HomePage/overviewCardsSchema.js";
import ErrorHandler from "../../utils/ErrorHandler.js";

const url = 'http://localhost:8000';




export const updateOverviewText = catchAsyncError(async (req, res, next) => {
	const result = await CompanyOverview.findOneAndUpdate({}, {
		text: req.body.overViewText
	})

	if (!result) return next(new ErrorHandler("CompanyOverview not found", 404));

	const updatedData = await CompanyOverview.findOne({})
	res.status(200).json({ success: true, msg: "Overview Text Updated sucessfully.", data: updatedData });
})

export const getOverviewText = catchAsyncError(async (req, res, next) => {
	const found = await CompanyOverview.findOne({})
	if (!found) {
		return next(new (ErrorHandler("Overview text not found", 404)));
	}
	response.status(200).json({ success: true, data: found });
})


export const getOverviewCardData = catchAsyncError(async (req, res, next) => {
	const data = await OverviewCards.find();
	if (!data) return next(new ErrorHandler("data not found", 404));
	res.status(200).json({ success: true, data: data });
})

export const updateOverviewCards = catchAsyncError(async (req, res, next) => {
	await OverviewCards.deleteMany()
	await OverviewCards.insertMany(req.body)
	const data = await OverviewCards.find()
	response.status(200).json({ msg: "Banner Text Updated sucessfully.", data: data });
})

export const addOverviewCard = catchAsyncError(async (req, res, next) => {
	const { title, text } = req.body;

	if (!req.file) {
		return next(new ErrorHandler("file not found", 404));
	}

	if (!title || !text) {
		return next(new ErrorHandler("Please enter both title and text", 500));
	}

	const imageUrl = `${url}/file/${req.file.filename}`;

	const addedCard = await OverviewCards.create({
		title: title,
		text: text,
		img: imageUrl
	})

	res.status(201).json({
		success: true,
		message: "Card added successfully",
		added_card: addedCard,
	})
})

// export const deleteOverviewCard = catchAsyncError(async (req, res, next) => {
// 	const { id } = req.body;
// 	const result = await OverviewCards.deleteOne({ _id: id })
// 	if(result.deletedCount !==1)
// })