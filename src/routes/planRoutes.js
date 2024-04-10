import express from 'express';
import auth from '../utils/auth.js';
import planController from '../controllers/planController.js';

const router = express.Router()


router.post('/create', auth.authenticate, planController.createPlan);
router.get('/all', auth.authenticate, planController.getAllPlan);
router.get('/edit/:id', auth.authenticate, planController.getPlanById);
router.put('/edit/:id', auth.authenticate, planController.editPlanById);
router.delete('/delete/:id', auth.authenticate, planController.deletePlanById);



export default router