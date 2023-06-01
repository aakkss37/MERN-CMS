import express from "express";
import { addBannerData, getBannerData } from "../controller/homePageController/bannerController.js";
import uploadFile from "../utils/uploadFile.js";
import { getImage } from "../controller/imageController/imageController.js";
import { addOverviewCard, getOverviewCardData, getOverviewText, updateOverviewCards, updateOverviewText } from "../controller/homePageController/overviewController.js";
import { addContactQuery, getContactQuery } from "../controller/contactQueryController/contactController.js";
import { createUser, forgotPassword, loginUser, resetPassword } from "../controller/userController/userController.js";
import { addPartners, getPartners } from "../controller/partnerController/partnerController.js";
import { addRecognitionAwardsData, deleteRecognitioinAwardsData, getRecognitionAwardsData, updateRecognitionAwardsData } from "../controller/homePageController/recognitionAwardsController.js";
import { addCareerBannerData, getCareerBannerData } from "../controller/careerPageController/bannerController.js";
import { addCareerImpactData, getCareerImpactData } from "../controller/careerPageController/impactController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

// Get image Route
router.get('/file/:filename', getImage);

// BANNER 

router.get('/home-page/get-banner-data', getBannerData)
router.post('/home-page/banner/add-banner-data', isAuthenticatedUser, uploadFile.single('file'), addBannerData);

// recognition and awards Route

router.post('/home-page/add-recognition-data', isAuthenticatedUser, uploadFile.single('file'), addRecognitionAwardsData);
router.get('/home-page/get-recognition-data', getRecognitionAwardsData);
router.put('/home-page/update-recognition-data', isAuthenticatedUser, uploadFile.single('file'), updateRecognitionAwardsData);
router.post('/home-page/delete-recognitioin-data', isAuthenticatedUser, deleteRecognitioinAwardsData);

/* COMPANY OVERVIEW */
router.post('/home-page/overView/update/overViewText', isAuthenticatedUser, updateOverviewText);
router.get('/home-page/get-overViewText', getOverviewText)
router.get('/home-page/get-overViewText/card-data', getOverviewCardData)
router.post('/home-page/overViewText/card-data/add', isAuthenticatedUser, uploadFile.single('file'), addOverviewCard);
router.post('/home-page/overViewText/card-data/update', updateOverviewCards)


// CONTACT QUERY
router.post('/contact-page/add-query', isAuthenticatedUser, addContactQuery);
router.get('/contact-page/add-query/get', getContactQuery);

// Authentication Routes

router.post("/registration", createUser);           // register user
router.post("/login", loginUser);                   // login user
router.post("/password/forgot", forgotPassword);    // Forgot password
router.put("/password/reset/:token", resetPassword); // reset password

// Partners Routes
router.post("/partners/add", isAuthenticatedUser, uploadFile.array('files'), addPartners)
router.get("/partners/get", getPartners)

// Career Page Routes

router.post("/career-page/add-banner-data", isAuthenticatedUser, uploadFile.single('file'), addCareerBannerData);
router.get("/career-page/get-banner-data", getCareerBannerData);
router.post("/career-page/add-impact-data", isAuthenticatedUser, uploadFile.single('file'), addCareerImpactData);
router.get("/career-page/get-impact-data", getCareerImpactData);

export default router