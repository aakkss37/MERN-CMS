import catchAsyncError from "../../middleware/catchAsyncError.js";
import BannerData from "../../model/careerPage/bannerSchema.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
const url = 'http://localhost:8000';

export const addCareerBannerData = catchAsyncError(async (req, res, next) => {
    if (!req.file) {
        return next(new ErrorHandler("file not found", 404));
    }

    const imageUrl = `${url}/file/${req.file.filename}`;
    const { title } = req.body;

    let data = await BannerData.findOne({});

    if (!data) {
        // Create a new document if it doesn't exist
        data = new BannerData();
    }

    data.title = title;
    data.bannerImg = imageUrl;

    await data.save();

    res.status(201).json({
        success: true,
        message: "banner data added successfully",
    })
})

export const getCareerBannerData = catchAsyncError(async (req, res, next) => {

    const result = await BannerData.find();

    if (!result) return next(new ErrorHandler("data not found", 404));

    res.status(200).json({
        success: true,
        data: result
    })
})