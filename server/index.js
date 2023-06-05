import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import ErrorHandler from './middleware/error.js';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs';
// import swaggerJsdoc from 'swagger-jsdoc';

const swaggerJsdoc = YAML.load('./api.yaml');

dotenv.config();

// EXPRESS INITIALIZATION
const app = express()

// Swagger configuration
// const swaggerOptions = {
// 	swaggerDefinition: {
// 		openapi: '3.0.0', // Update to OpenAPI 3.0.0 version
// 		info: {
// 			title: 'Swagger Demo API',
// 			description: 'A sample API for demonstrating Swagger',
// 			version: '1.0.0',
// 		},
// 		servers: [
// 			{
// 				url: 'http://localhost:8000', // Update the server URL
// 				description: 'Local server',
// 			},
// 		],
// 	},
// 	apis: ['./router/router.js'], // Specify the file that contains your API routes
// };

// const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc));


// APP CONFIGURATION
app.use(cookieParser());
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