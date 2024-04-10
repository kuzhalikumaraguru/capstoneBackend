import express from 'express';
import UserController from '../controllers/userController.js';
import Auth from '../utils/auth.js';

const router = express.Router();
router.post('/login', UserController.login);
router.post('/createUser', UserController.createUser);
router.get('/all', Auth.authenticate, UserController.getAllUsers);
router.post('/forgetPassword', UserController.forgetPassword);
router.post('/forgetPassword/:token', UserController.setNewPassword);
router.get('/editUser/:id', Auth.authenticate, UserController.editUser);
router.put('/editUser/:id', Auth.authenticate, UserController.editUserById);
router.delete('/delete/:id', Auth.authenticate, UserController.deleteUser);


export default router;