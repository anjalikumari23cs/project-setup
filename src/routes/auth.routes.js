import { Router } from "express";
const authRouter=Router();
//import from auth.controller.js
import { register, login, logout, forgotPassword, resetPassword, verifyEmail } from "../controllers/auth.controller.js";    

authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/forgot-password',forgotPassword);
authRouter.post('/reset-password',resetPassword);
authRouter.get('/verify-email',verifyEmail);

export default authRouter;