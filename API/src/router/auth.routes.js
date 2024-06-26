import { Router } from "express";

import { checkAuth, register, login, logout } from "../controllers/auth.js";
import { userRequired } from "../middlewares/userRequired.js";
import { checkPassword } from "../middlewares/checkPassword.js";
import { checkMail } from "../middlewares/checkMail.js";

const router = Router();

// Route to check authentication status
router.get("/", checkAuth);

// Route to register a new user
router.post("/register", checkMail, checkPassword, register);

// Route to authenticate and login a user
router.post("/login", login);

// Route to logout a user, requires user authentication
router.get("/logout", userRequired, logout);

export default router;

// "email": "test@gmail.com",
//     "password": "test"
