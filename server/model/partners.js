import mongoose from "mongoose";

const partnersSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    text1: {
        type: String,
    },
    images: [
        {
            imageUrl: {
                type: String
            }
        }
    ],
    text2: {
        type: String,
    }
})

const Partner = mongoose.model('Partner', partnersSchema);

export default Partner;