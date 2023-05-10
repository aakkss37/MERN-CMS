import express from "express";
import { getBannerData, updateBannerImage, updateBannerText, updateBannerTitle, } from "../controller/homePageController/bannerController.js";
import uploadFile from "../utils/uploadFile.js";
const router = express.Router();



// BANNER 
router.get('/home-page/get-banner-data', getBannerData)
router.post('/home-page/banner/update/title', updateBannerTitle)
router.post('/home-page/banner/update/text', updateBannerText)
// router.post('/home-page/banner/update/image', uploadFile.single('file'), updateBannerImage)


export default router