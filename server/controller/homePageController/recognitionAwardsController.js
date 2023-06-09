import catchAsyncError from "../../middleware/catchAsyncError.js";
import recognitionData from "../../model/HomePage/recognitionAwardsSchema.js";
import ErrorHandler from "../../utils/ErrorHandler.js";

const url = 'https://mern-cms-server.onrender.com';

export const addRecognitionAwardsData = catchAsyncError(async (req, res, next) => {

    const title = req.body.title;
    const text = req.body.text;
    const file = req.file;

    if (!file) return next(new ErrorHandler("file not found", 404));

    const imgUrl = `${url}/file/${file.filename}`
    await recognitionData.create({
        title: title,
        text: text,
        img: imgUrl
    })

	const updatedData = await recognitionData.find();

    res.status(200).json({
        success: true,
        mesage: 'data inserted successfully',
		updatedData: updatedData,
    })
})

export const getRecognitionAwardsData = catchAsyncError(async (req, res, next) => {
    const result = await recognitionData.find();
    res.status(200).json({
        success: true,
        data: result
    })
})

export const updateRecognitionAwardsData = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const { text, title, img } = req.body;
    const file = req.file;

	console.log("body===> ", req.body)
	console.log("body===> ", req.file)


    if (!file && !img) return next(new ErrorHandler("file or url not found", 404));

    const imgUrl = file ? `${url}/file/${file.filename}` : img;

    const data = await recognitionData.findByIdAndUpdate(id, {
        title: title,
        text: text,
        img: imgUrl,
    })

    if (!data) return next(new ErrorHandler("Data not found with this id", 404));

<<<<<<< HEAD
=======
    data.text = text;
    data.title = title;
    data.img = imgUrl;

    await data.save();

	const updatedData = await recognitionData.find();

>>>>>>> 321c45fa8c893d366c500d8d3aca4c25d1e7c0f9
    res.status(201).json({
        success: true,
        message: 'data updated successfully',
		updatedData: updatedData,
    })
})

export const deleteRecognitioinAwardsData = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;

    const data = await recognitionData.findByIdAndDelete(id);

    if (!data) return next(new ErrorHandler("Data not found with this id", 404));

	const updatedData = await recognitionData.find();

    res.status(201).json({
        success: true,
        message: "data deleted successfully",
		updatedData: updatedData,
    })
})

