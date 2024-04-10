import express from 'express';
import auth from '../utils/auth.js';
import AgreementController from '../controllers/agreementController.js';
const router = express.Router();

router.get('/download', auth.authenticate, AgreementController.getDocument)
export default router