import express from "express";
import auth from "../utils/auth.js";
import materialController from "../controllers/materialController.js";
const router = express.Router();

router.post('/create', auth.authenticate, materialController.createMaterial);
router.get('/all', auth.authenticate, materialController.getAllMaterial);
router.delete('/delete/:id', auth.authenticate, materialController.deleteMaterial);
router.get('/edit/:id', auth.authenticate, materialController.getMaterialById);
router.put('/edit/:id', auth.authenticate, materialController.editMaterialById);



export default router