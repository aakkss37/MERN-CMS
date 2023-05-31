import express from "express";
import { addBannerData, getBannerData } from "../controller/homePageController/bannerController.js";
import uploadFile from "../utils/uploadFile.js";
import { getImage } from "../controller/imageController/imageController.js";
import { addOverviewCard, getOverviewCardData, getOverviewText, updateOverviewCards, updateOverviewText } from "../controller/homePageController/overviewController.js";
import { addContactQuery, getContactQuery } from "../controller/contactQueryController/contactController.js";
import { createUser, forgotPassword, loginUser, resetPassword } from "../controller/userController/userController.js";
import { addPartners } from "../controller/partnerController/partnerController.js";
import { addRecognitionAwardsData, deleteRecognitioinAwardsData, getRecognitionAwardsData, updateRecognitionAwardsData } from "../controller/homePageController/recognitionAwardsController.js";
import { addCareerBannerData } from "../controller/careerPageController/bannerController.js";
import { addCareerImpactData } from "../controller/careerPageController/impactController.js";
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
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Banner data added successfully
 *       401:
 *         description: Unauthorized - user not authenticated
 *       404:
 *         description: file not found
 */

router.post("/registration", createUser);           // register user


/**
 * @swagger
 * /login:
 *   post:
 *     summary: login user
 *     description: This api is for login.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: user logged in successfully
 *       401:
 *         description: something went wrong
 *       404:
 *         description: user not found
 */


router.post("/login", loginUser);                   // login user


/**
 * @swagger
 * /password/forgot:
 *   post:
 *     summary: forgot password
 *     description: This api is for forgot password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: email send successfully
 *       404:
 *         description: user not found
 */

router.post("/password/forgot", forgotPassword);    // Forgot password

/**
 * @swagger
 * /password/reset/{token}:
 *   put:
 *     summary: Reset password
 *     description: Reset the password for a user with the provided token
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         description: The token of the user to reset the password
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *             required:
 *               - password
 *               - confirmPassword
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Bad request - missing or invalid fields
 *       500:
 *         description: Internal server error
 */

router.put("/password/reset/:token", resetPassword); // reset password

// Partners Routes
router.post("/partners/add", isAuthenticatedUser, uploadFile.array('files'), addPartners)

// Career Page Routes

router.post("/career-page/add-banner-data", isAuthenticatedUser, uploadFile.single('file'), addCareerBannerData);
router.post("/career-page/add-impact-data", isAuthenticatedUser, uploadFile.single('file'), addCareerImpactData);

export default router