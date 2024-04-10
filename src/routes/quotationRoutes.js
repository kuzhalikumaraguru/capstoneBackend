import express from "express";
import auth from "../utils/auth.js";
import quotationController from "../controllers/quotationController.js";
const router = express.Router();

router.post('/generate-pdf', auth.authenticate, quotationController.getQuotationDetails)


export default router