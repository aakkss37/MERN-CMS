import mongoose from "mongoose";

const CompanyOverviewSchema = new mongoose.Schema({

	text: { type: String, },

})

const CompanyOverview = mongoose.model('CompanyOverview', CompanyOverviewSchema);

export default CompanyOverview;
