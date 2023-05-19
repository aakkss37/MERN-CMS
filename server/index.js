import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import ErrorHandler from './middleware/error.js';

dotenv.config();

// EXPRESS INITIALIZATION
const app = express()


// APP CONFIGURATION
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


// DATABASE CONNECTION
import mongoseConnection from "./db/dbConfig.js";
mongoseConnection();


// ROUTING
import router from './router/router.js';
app.use('/', router)


app.use(ErrorHandler);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
})