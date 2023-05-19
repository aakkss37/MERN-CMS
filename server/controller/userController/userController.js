import catchAsyncError from "../../middleware/catchAsyncError.js";
import User from "../../model/User/useSchema.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
import sendToken from "../../utils/jwtToken.js";
import sendMail from "../../utils/sendMail.js";


export const createUser = catchAsyncError(async (req, res, next) => {
	console.log(req.body)
    try {
        const { username, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ success: false, message: "User already exists" });
        }

        user = await User.create({
            username,
            email,
            password,
        });

        sendToken(user, 201, res);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
})

// Login User

export const loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
	console.log(req.body)
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter your email and password", 400));
    }
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("User not found with this email", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Email or password is wrong", 401));
    }
    sendToken(user, 200, res);
});

// Forgot password

export const forgotPassword = catchAsyncError(async (req, res, next) => {

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler("User not found with this email", 404));
    }

    //get ResetPasswordToken

    const resetToken = user.getResetToken();

    await user.save({
        validateBeforeSave: false
    });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl}`;
    try {
        await sendMail({
            email: user.email,
            subject: `Agile Global Password Recovery`,
            message
        });

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} succesfully`,
        })
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordTime = undefined;
    }

    await user.save({
        validateBeforeSave: false
    });

    return next();
})