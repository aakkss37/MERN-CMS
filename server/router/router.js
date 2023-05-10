import express from "express";
import { getBannerData, updateBannerText, updateBannerTitle, } from "../controller/homePageController/bannerController.js";
import uploadFile from "../utils/uploadFile.js";
import { getImage, uploadImage } from "../controller/imageController/imageController.js";
const router = express.Router();



// BANNER 
router.get('/home-page/get-banner-data', getBannerData)
router.post('/home-page/banner/update/title', updateBannerTitle)
router.post('/home-page/banner/update/text', updateBannerText)
router.post('/home-page/banner/update/image', uploadFile.single('file'), uploadImage)
router.get('/file/:filename', getImage);


export default router