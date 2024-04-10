import express from 'express';
import ProjectController from '../controllers/projectController.js';
import Auth from '../utils/auth.js';
import projectController from '../controllers/projectController.js';
const router = express.Router();

router.post('/create', Auth.authenticate, ProjectController.createProject);
router.get('/all', Auth.authenticate, ProjectController.getAllProjects);
router.delete('/delete/:id', Auth.authenticate, projectController.deleteProject);
router.get('/edit/:id', Auth.authenticate, projectController.editProject);
router.put('/edit/:id', Auth.authenticate,  projectController.editProjectById)

export default router;
