import express from "express";
import { updateTitle } from "../controller/homePageController/bannerController.js";
const router = express.Router();


router.post('/home-page/banner/update/title', updateTitle)


export default router