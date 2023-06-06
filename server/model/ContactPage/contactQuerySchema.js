import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema({
	firstName: { type: String, },
	lastName: { type: String, },
	email: { type: String, },
	phone: { type: String, },
	subject: { type: String, }
})

const ContactQuery = mongoose.model('ContactQuery', QuerySchema);

export default ContactQuery;
