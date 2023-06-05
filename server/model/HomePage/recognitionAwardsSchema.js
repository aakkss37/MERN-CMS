import mongoose from "mongoose";

const recognitionAwardsSchema = new mongoose.Schema({
    title: { type: String, },
    text: { type: String, },
    img: { type: String, },
})

const recognitionData = mongoose.model('RecognitionAwardsData', recognitionAwardsSchema);

export default recognitionData;