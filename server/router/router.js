import express from "express";
import { addBannerData, getBannerData } from "../controller/homePageController/bannerController.js";
import uploadFile from "../utils/uploadFile.js";
import { getImage } from "../controller/imageController/imageController.js";
import { addOverviewCard, getOverviewCardData, getOverviewText, updateOverviewCards, updateOverviewText } from "../controller/homePageController/overviewController.js";
import { createUser, forgotPassword, loginUser, resetPassword } from "../controller/userController/userController.js";
import { addPartners, getPartners } from "../controller/partnerController/partnerController.js";
import { addRecognitionAwardsData, deleteRecognitioinAwardsData, getRecognitionAwardsData, updateRecognitionAwardsData } from "../controller/homePageController/recognitionAwardsController.js";
import { addCareerBannerData, getCareerBannerData } from "../controller/careerPageController/bannerController.js";
import { addCareerImpactData, getCareerImpactData } from "../controller/careerPageController/impactController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
import { addContactQuery, getContactQuery } from "../controller/contactPageController/contactQueryController.js";
import { addContactBannerData, getContactBannerData } from "../controller/contactPageController/bannerController.js";
import { addHeadQuarterData, getHeadQuarterData } from "../controller/contactPageController/headQuarterController.js";
const router = express.Router();

// Get image Route
router.get('/file/:filename', getImage);

// BANNER 

router.get('/home-page/banner-data', getBannerData);
router.post('/home-page/banner-data', isAuthenticatedUser, uploadFile.single('file'), addBannerData);

// recognition and awards Route

router.post('/home-page/recognition-data', isAuthenticatedUser, uploadFile.single('file'), addRecognitionAwardsData);
router.get('/home-page/recognition-data', getRecognitionAwardsData);
router.put('/home-page/recognition-data/:id', isAuthenticatedUser, uploadFile.single('file'), updateRecognitionAwardsData);
router.delete('/home-page/recognition-data/:id', isAuthenticatedUser, deleteRecognitioinAwardsData);

/* COMPANY OVERVIEW */
router.post('/home-page/overView/update/overViewText', isAuthenticatedUser, updateOverviewText);
router.get('/home-page/get-overViewText', getOverviewText)
router.get('/home-page/get-overViewText/card-data', getOverviewCardData)
router.post('/home-page/overViewText/card-data/add', isAuthenticatedUser, uploadFile.single('file'), addOverviewCard);
router.post('/home-page/overViewText/card-data/update', updateOverviewCards)

// CONTACT page
router.post('/contact-page/banner-data', isAuthenticatedUser, uploadFile.single('file'), addContactBannerData);
router.get('/contact-page/banner-data', getContactBannerData);
router.post('/contact-page/headQuarter-data', isAuthenticatedUser, uploadFile.single('file'), addHeadQuarterData);
router.get('/contact-page/headQuarter-data', getHeadQuarterData);
router.post('/contact-page/query', isAuthenticatedUser, addContactQuery);
router.get('/contact-page/query', getContactQuery);

// Authentication Routes

router.post("/registration", createUser);           // register user
router.post("/login", loginUser);                   // login user
router.post("/password/forgot", forgotPassword);    // Forgot password
router.put("/password/reset/:token", resetPassword); // reset password

// Partners Routes
router.post("/partners", isAuthenticatedUser, uploadFile.array('files'), addPartners)
router.get("/partners", getPartners)

// Career Page Routes

router.post("/career-page/banner-data", isAuthenticatedUser, uploadFile.single('file'), addCareerBannerData);
router.get("/career-page/banner-data", getCareerBannerData);
router.post("/career-page/impact-data", isAuthenticatedUser, uploadFile.single('file'), addCareerImpactData);
router.get("/career-page/impact-data", getCareerImpactData);

export default router