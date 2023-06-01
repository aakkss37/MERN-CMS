import catchAsyncError from "../../middleware/catchAsyncError.js";
import BannerData from "../../model/HomePage/bannerSchema.js"
import ErrorHandler from "../../utils/ErrorHandler.js";
const url = 'https://mern-cms-server.onrender.com';


export const getBannerData = catchAsyncError(async (req, res, next) => {
	const bannerData = await BannerData.findOne({})

	if (!bannerData)
		return next(new ErrorHandler("can't get banner data", 404));
	res.status(200).json(bannerData);
})

export const addBannerData = catchAsyncError(async (req, res, next) => {
	// console.log("runnnnnnnnnnnn")
	// console.log("body ====>? ",req.body)
	console.log("body file ====>? ",req.file)
	if (!req.file) {
		return next(new ErrorHandler("file not found", 404));
	}

	const imageUrl = `${url}/file/${req.file.filename}`;
	const { title, text } = req.body;

	const data = await BannerData.findOne({});

	const id = data._id;

	await BannerData.updateOne(
		{ _id: id },
		{
			$set: {
				title: title,
				text: text,
				bannerImg: imageUrl,
			}
		},
		{ upsert: true },
		(err, result) => {
			if (err) {
				return next(new ErrorHandler("Failed to update or create the banner data", 400));
			}
		}
	);
	res.status(201).json({
		success: true,
		message: "banner data added successfully",
	})
})