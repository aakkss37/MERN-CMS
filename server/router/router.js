import express from "express";
import { getBannerData, updateBannerText, updateBannerTitle, uploadBannerImage, } from "../controller/homePageController/bannerController.js";
import uploadFile from "../utils/uploadFile.js";
import { getImage } from "../controller/imageController/imageController.js";
const router = express.Router();



// BANNER 
router.get('/home-page/get-banner-data', getBannerData)
router.post('/home-page/banner/update/title', updateBannerTitle)
router.post('/home-page/banner/update/text', updateBannerText)
router.post('/home-page/banner/update/image', uploadFile.single('file'), uploadBannerImage)
router.get('/file/:filename', getImage);


export default router