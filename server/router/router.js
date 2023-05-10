import express from "express";
import { updateBannerImage, updateBannerText, updateBannerTitle, } from "../controller/homePageController/bannerController.js";
const router = express.Router();



// BANNER 
router.post('/home-page/banner/update/title', updateBannerTitle)
router.post('/home-page/banner/update/text', updateBannerText)
router.post('/home-page/banner/update/image', updateBannerImage)


export default routertext