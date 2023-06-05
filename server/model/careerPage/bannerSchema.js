import mongoose from "mongoose";

const BannerDataSchema = new mongoose.Schema({
	title: { type: String, },
	bannerImg: { type: String, },
})

const BannerData = mongoose.model('CareerBanner', BannerDataSchema);

export default BannerData;
