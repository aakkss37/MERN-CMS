import catchAsyncError from "../../middleware/catchAsyncError.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
import headQuarterData from "../../model/ContactPage/headQuarterSchema.js";
const url = 'https://mern-cms-server.onrender.com';

export const addHeadQuarterData = catchAsyncError(async (req, res, next) => {
    if (!req.file) {
        return next(new ErrorHandler("file not found", 404));
    }

    const imageUrl = `${url}/file/${req.file.filename}`;
    const { address } = req.body;

    let data = await headQuarterData.findOne({});

    if (!data) {
        // Create a new document if it doesn't exist
        data = new headQuarterData();
    }

    data.address = address;
    data.Img = imageUrl;

    await data.save();

    res.status(201).json({
        success: true,
        message: "HeadQuarter data added successfully",
    })
})

export const getHeadQuarterData = catchAsyncError(async (req, res, next) => {

    const result = await headQuarterData.find();

    if (!result) return next(new ErrorHandler("data not found", 404));

    res.status(200).json({
        success: true,
        data: result
    })
})