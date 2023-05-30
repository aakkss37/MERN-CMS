import userSchema from "../model/User/userSchema.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import catchAsyncError from "./catchAsyncError.js";
import jwt from "jsonwebtoken";


export const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
	const authToken = req.headers['authorization'];
	const token = authToken && authToken.split(' ')[1]
	console.log(token, "<=============> ")
    // const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler("Please login for access these resources", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
	console.log(decodedData, "*******")
    req.user = await userSchema.findById(decodedData.id);
    next();
})