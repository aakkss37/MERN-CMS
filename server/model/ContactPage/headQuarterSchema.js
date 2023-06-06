import mongoose from "mongoose";

const headQuarterSchema = new mongoose.Schema({
    address: { type: String, },
    Img: { type: String, },
})

const headQuarterData = mongoose.model('HeadQuarter', headQuarterSchema);

export default headQuarterData;
