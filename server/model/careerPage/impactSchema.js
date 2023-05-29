import mongoose from "mongoose";

const impactSchemaData = new mongoose.Schema({
    impactHead: {
        type: String,
    },
    impactText: {
        type: String,
    },
    impact1: {
        type: String,
    },
    text1: {
        type: String,
    },
    impact2: {
        type: String,
    },
    text2: {
        type: String,
    },
    impact3: {
        type: String,
    },
    text3: {
        type: String,
    },
    impactImg: {
        type: String,
    }
})

const impactData = mongoose.model("impact", impactSchemaData);

export default impactData;