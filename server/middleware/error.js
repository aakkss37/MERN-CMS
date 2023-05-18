import ErrorHandler from '../utils/ErrorHandler.js';

export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error"

    // Duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
    }

    // Wrong Jwt error
    if (err.name === "jsonWebTokenError") {
        const message = `Your url is invalid please try again`;
        err = new ErrorHandler(message, 400);
    }

    // jwt token expire error
    if (err.name === "TokenExpiredError") {
        const message = `Your url is expired please try again`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}