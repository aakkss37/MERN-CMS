import mongoose from "mongoose";

const OverviewCardsSchema = new mongoose.Schema({

	title: { type: String, },
	text: { type: String, },
	img: { type: String, },

})

const OverviewCards = mongoose.model('OverviewCards', OverviewCardsSchema);

export default OverviewCards;
