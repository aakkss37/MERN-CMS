import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema({
	firstName: { type: String, },
	lastName: { type: String, },
	email: { type: String, },
	phone: { type: String, },
	subject: { type: String, }
})

const ContctQuery = mongoose.model('ContctQuery', QuerySchema);

export default ContctQuery;
