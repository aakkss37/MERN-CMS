/* eslint-disable prettier/prettier */
// API NOTIFICATION MESSAGES

export const API_NOTIFICATION_MESSAGE = {
	loading: {
		title: 'Loading...',
		message: 'Data is being loaded... Please wait',
	},
	success: {
		title: 'success',
		message: 'Data is successfuly loaded',
	},
	responceFailure: {
		title: 'ERROR',
		message: "Request sent sucessfuly... request is received by server... server also has sent a responce sucessfuly... but the responce was other then 200 series  i.e. server couldn't process the request due to any reason"
	},
	requestFailuer: {
		title: 'ERROR',
		message: "Request sent sucessfuly... but no responce was received."
	},
	networkError: {
		title: "ERROR",
		message: "Unble to connect wit the server. Please check your internet connection OR try again leter"
	}
};



// API SERVICE CALL
/*
Sample request:--->
apiService: {
	url: '/endPoint',
	method: 'POST/GET/PUT/PATCH/DELETE',
	params: 'true/false',
	query: 'true/false',
}
*/
export const SERVICE_URL = {
	userLogin: {
		url: '/login',
		method: 'POST',
	},

	// HOME PAGE
	setHomePageBanner: {
		url: '/home-page/banner/add-banner-data',
		method: 'POST',
	},
	getHomePageBanner: {
		url: '/home-page/get-banner-data',
		method: 'GET',
	},
	setRecognitionAndAward: {
		url: '/home-page/add-recognition-data',
		method: 'POST',
	},
	getRecognitionAndAward: {
		url: '/home-page/get-recognition-data',
		method: 'GET',
	},
	updateRecognitionAndAward: {
		url: '/home-page/update-recognition-data',
		method: 'PUT',
	},

}