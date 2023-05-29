import catchAsyncError from "../../middleware/catchAsyncError.js";
import recognitionData from "../../model/HomePage/recognitionAwardsSchema.js";
import ErrorHandler from "../../utils/ErrorHandler.js";

const url = 'http://localhost:8000';

export const addRecognitionAwardsData = catchAsyncError(async (req, res, next) => {

    const titles = req.body.titles;
    const texts = req.body.texts;
    const files = req.files;

    if (!files) return next(new ErrorHandler("file not found", 404));

    await recognitionData.deleteMany({});

    titles.map(async (title, index) => {
        const text = texts[index];
        const imgUrl = `${url}/file/${files[index].filename}`
        await recognitionData.create({
            title: title,
            text: text,
            img: imgUrl
        })
    })

    res.status(200).json({
        success: true,
        mesage: 'data inserted successfully'
    })
})