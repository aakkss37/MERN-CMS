import mongoose from "mongoose";

const BannerDataSchema = new mongoose.Schema({

	title: { type: String, },
	text: { type: String, },
	bannerImg: { type: String, },

})

const BannerData = mongoose.model('BannerData', BannerDataSchema);

export default BannerData;
