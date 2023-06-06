import catchAsyncError from "../../middleware/catchAsyncError.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
import PartnerData from "../../model/partners.js";

const url = 'https://mern-cms-server.onrender.com';

export const addPartners = catchAsyncError(async (req, res, next) => {
    const files = req.files;
    if (!files) return next(new ErrorHandler("file not found", 404));

    const { title, text1, text2 } = req.body;

    const images = [];

    files.map((file) => {
        const imageUrl = `${url}/file/${file.filename}`
        images.push({ imageUrl: imageUrl });
    })

    let data = await PartnerData.findOne({});

    if (!data) {
        // Create a new document if it doesn't exist
        data = new PartnerData();
    }

    data.title = title;
    data.text1 = text1;
    data.images = images;
    data.text2 = text2;

    await data.save();

    res.status(200).json({
        success: true,
        message: "data added successfully"
    })
})


export const getPartners = catchAsyncError(async (req, res, next) => {
    const result = await PartnerData.find();

    if (!result) return next(new ErrorHandler("data not found", 404));

    res.status(200).json({
        success: true,
        data: result
    })
})