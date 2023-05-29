/* eslint-disable prettier/prettier */
import axios from 'axios';
import { API_NOTIFICATION_MESSAGE, SERVICE_URL } from './configConst';
// import { getAccessToken, getType } from '../utils/commenUtils';


const API_URL = 'http://localhost:8000';
const axiosInstance = axios.create({ // axios.create --> You can create a new instance of axios with a custom config.
	baseURL: API_URL,
	timeout: 15000,
});


// Interceptors can be used to modify requests before they are sent. This can be useful for adding authentication headers, setting timeouts, or adding query parameters.
axiosInstance.interceptors.request.use(
	(config) => {

		if (config?.TYPE?.query) {
			config.url = config.url + "?post_id=" + config.TYPE.query
		}
		else if (config?.TYPE?.params) {
			config.params = config.TYPE.params
		}

		console.log("config  ==>> ", config);
		return config;
	},
	(error) => {
		console.log("could not make request --->", error);
		return Promise.reject(error);
	}
)

axiosInstance.interceptors.response.use(
	function (response) {
		// Stop global loader here
		console.log("reasponce for api request ---> ", response)
		return processResponse(response);
	},
	function (error) {
		// Stop global loader here
		// console.log("reasponce for api request ---> ", error)
		return Promise.reject(processError(error));
	}
)



const processResponse = (response) => {
	// rasponce sucessful
	if (response?.status >= 200) {
		return {
			isSuccess: true,
			data: response.data
		}
	}
	// responce failed
	else {
		return {
			isFailure: true,
			status: response?.status,
			msg: response?.msg,
			code: response?.code
		}
	}
}



const processError = (error) => {
	if (error.responce) {
		console.log("Error in respoce ---> ", error.toJSON());
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.responceFailure,
			code: error.responce.status
		}
	}
	else if (error.request) {
		console.log("Error in request ---> ", error);
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.requestFailuer,
			code: ""
		}
	}
	else {
		console.log("Error in network ---> ", error);
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.networkError,
			code: ""
		}
	}
}



export const API = {};

for (const [key, value] of Object.entries(SERVICE_URL)) {
	API[key] = (body, showUploadProgress, showDownloadProgress) => {  
		return axiosInstance({
			url: value.url,
			method: value.method,
			data: body,
			responseType: value.responceType,
			// headers: {
			// 	authorization: getAccessToken()
			// },
			// TYPE: getType(value, body),
			// onUploadProgress: (ProgressEvent) => {
			// 	if (showUploadProgress) {
			// 		let percentComplete = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
			// 		showUploadProgress(percentComplete);
			// 	}
			// },
			// onDownloadProgress: (ProgressEvent) => {
			// 	if (showDownloadProgress) {
			// 		let percentComplete = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
			// 		showDownloadProgress(percentComplete)
			// 	}
			// }
		})
	}
}

// console.log(API)
