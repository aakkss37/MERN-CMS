import express from "express";
import { addBannerData, getBannerData } from "../controller/homePageController/bannerController.js";
import uploadFile from "../utils/uploadFile.js";
import { getImage } from "../controller/imageController/imageController.js";
import { addOverviewCard, getOverviewCardData, getOverviewText, updateOverviewCards, updateOverviewText } from "../controller/homePageController/overviewController.js";
import { addContactQuery, getContactQuery } from "../controller/contactQueryController/contactController.js";
import { createUser, forgotPassword, loginUser, logoutUser, resetPassword } from "../controller/userController/userController.js";
import { addPartners } from "../controller/partnerController/partnerController.js";
import { addRecognitionAwardsData } from "../controller/homePageController/recognitionAwardsController.js";
import { addCareerBannerData } from "../controller/careerPageController/bannerController.js";
import { addCareerImpactData } from "../controller/careerPageController/impactController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

// Get image Route
router.get('/file/:filename', getImage);

// BANNER 
/**
 * @swagger
 * /home-page/get-banner-data:
 *   get:
 *     summary: This api is used to fetch bannerdata
 *     description: This api is used to fetch bannerdata
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get('/home-page/get-banner-data', getBannerData)

/**
 * @swagger
 * /home-page/banner/add-banner-data:
 *   post:
 *     summary: Add banner data
 *     description: Add banner data with title, text, and file
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               text:
 *                 type: string
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Banner data added successfully
 *       401:
 *         description: Unauthorized - user not authenticated
 *       404:
 *         description: file not found
 */
router.post('/home-page/banner/add-banner-data', isAuthenticatedUser, uploadFile.single('file'), addBannerData);

router.post('/home-page/banner/add-banner-data', isAuthenticatedUser, uploadFile.single('file'), addBannerData)

// recognition and awards Route

router.post('/home-page/add-recognition-data', isAuthenticatedUser, uploadFile.array('files'), addRecognitionAwardsData);


/* COMPANY OVERVIEW */
router.post('/home-page/overView/update/overViewText', isAuthenticatedUser, updateOverviewText);

router.get('/home-page/get-overViewText', getOverviewText)
router.get('/home-page/get-overViewText/card-data', getOverviewCardData)
router.post('/home-page/overViewText/card-data/add', isAuthenticatedUser, uploadFile.single('file'), addOverviewCard);
router.post('/home-page/overViewText/card-data/update', updateOverviewCards)


// CONTACT QUERY
router.post('/contact-page/add-query', isAuthenticatedUser, addContactQuery);

/**
* @swagger
* /contact-page/add-query/get:
*   get:
*     summary: This api is used to fetch contact query data
*     description: This api is used to fetch fetch contact query data
*     responses:
*       200:
*         description: A successful response
*/

router.get('/contact-page/add-query/get', getContactQuery);

// Authentication Routes

/**
 * @swagger
 * /registration:
 *   post:
 *     summary: Register user
 *     description: This api is for sign up.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Banner data added successfully
 *       401:
 *         description: Unauthorized - user not authenticated
 *       404:
 *         description: file not found
 */

router.post("/registration", createUser);           // register user


router.post("/login", loginUser);                   // login user

/**
 * @swagger
 * /logout:
 *   get:
 *     summary: This api is used for logging out
 *     description: This api is used for logging out
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get("/logout", logoutUser);                 // log out user
router.post("/password/forgot", forgotPassword);    // Forgot password
router.put("/password/reset/:token", resetPassword); // reset password

// Partners Routes
router.post("/partners/add", isAuthenticatedUser, uploadFile.array('files'), addPartners)

// Career Page Routes

router.post("/career-page/add-banner-data", isAuthenticatedUser, uploadFile.single('file'), addCareerBannerData);
router.post("/career-page/add-impact-data", isAuthenticatedUser, uploadFile.single('file'), addCareerImpactData);

export default router