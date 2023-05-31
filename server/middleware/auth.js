import userSchema from "../model/User/userSchema.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import catchAsyncError from "./catchAsyncError.js";
import jwt from "jsonwebtoken";


export const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return next(new ErrorHandler("Please login for access these resources", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
<<<<<<< HEAD

    console.log(decodedData);

=======
>>>>>>> f32312bddcc365875c1f63fc1baf04ad90d6b341
    req.user = await userSchema.findById(decodedData.id);
    next();
})