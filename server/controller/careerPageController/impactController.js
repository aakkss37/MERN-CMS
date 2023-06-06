import catchAsyncError from "../../middleware/catchAsyncError.js";
import impactData from "../../model/careerPage/impactSchema.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
const url = 'https://mern-cms-server.onrender.com';

export const addCareerImpactData = catchAsyncError(async (req, res, next) => {
    if (!req.file) {
        return next(new ErrorHandler("file not found", 404));
    }

    const imageUrl = `${url}/file/${req.file.filename}`;
    const { text3, impact3, text2, impact2, text1, impact1, impactText, impactHead } = req.body;

    let data = await impactData.findOne({});

    if (!data) {
        // Create a new document if it doesn't exist
        data = new impactData();
    }

    data.impactHead = impactHead;
    data.impactText = impactText;
    data.impact1 = impact1;
    data.impact2 = impact2;
    data.impact3 = impact3;
    data.text1 = text1;
    data.text2 = text2;
    data.text3 = text3;
    data.impactImg = imageUrl;

    await data.save();

    res.status(201).json({
        success: true,
        message: "impact data added successfully",
    })
})


export const getCareerImpactData = catchAsyncError(async (req, res, next) => {
    const result = await impactData.find();

    if (!result) return next(new ErrorHandler("data not found", 404));

    res.status(200).json({
        success: true,
        data: result,
    })
})