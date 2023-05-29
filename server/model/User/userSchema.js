import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from 'crypto';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter your username"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        validate: [validator.isEmail, "Please enter a valid email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "please enter your password"],
        minlength: [8, "password should be of minimum 8 characters"],
        select: false
    },
    role: {
        type: String,
        default: "user",
    },
    resetPasswordToken: String,
    resetPasswordTime: Date
})

// hash password

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// jwt token

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    });
}

// compare password

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// Forgot Password
userSchema.methods.getResetToken = function () {
    //Generating token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordTime = Date.now() + 15 * 60 * 1000;

    return resetToken;
}

export default mongoose.model("User", userSchema);