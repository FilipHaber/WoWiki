import { Router } from "express";

import { checkAuth, register, login, logout } from "../controllers/auth.js";
import { userRequired } from "../middlewares/userRequired.js";
import { checkPassword } from "../middlewares/checkPassword.js";
import { checkMail } from "../middlewares/checkMail.js";

const router = Router();

router.get("/", checkAuth);
router.post("/register", checkMail, checkPassword, register);
router.post("/login", login);
router.get("/logout", userRequired, logout);

export default router;

// "email": "test@gmail.com",
//     "password": "test"
