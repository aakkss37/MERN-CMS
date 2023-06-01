import userSchema from "../model/User/userSchema.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import catchAsyncError from "./catchAsyncError.js";
import jwt from "jsonwebtoken";


export const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token);
    if (!token) {
        return next(new ErrorHandler("Please login for access these resources", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
<<<<<<< HEAD
=======

    console.log(decodedData);

>>>>>>> fa5450b66c64be5ddd11bcf8704b65f4c82411ba
    req.user = await userSchema.findById(decodedData.id);
    next();
})