import { GridFsStorage } from 'multer-gridfs-storage'
import multer from 'multer';
// ENV CONFIGURATION
import dotenv from 'dotenv';
dotenv.config();
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;


const CONNECTION_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.xbvctmj.mongodb.net/?retryWrites=true&w=majority`
const connectionOption = {
	useNewUrlParser: true, useUnifiedTopology: true
}

const storage = new GridFsStorage({
	url: CONNECTION_URL,
	options: connectionOption,
	file: (request, file) => {
		console.log("multer ====> ", file)	
		const match = ["image/png", "image/jpg"];

		if (match.indexOf(file.memeType) === -1)
			return `${Date.now()}-blog-${file.originalname}`;

		return {
			bucketName: "photos",
			filename: `${Date.now()}-blog-${file.originalname}`
		}
	}
});

export default multer({ storage }); 