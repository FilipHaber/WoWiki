import { Router } from "express";

import { checkAuth, register, login, logout } from "../controllers/auth.js";
import { userRequired } from "../middlewares/userRequired.js";
import { checkPassword } from "../middlewares/checkPassword.js";

const router = Router();

router.get("/", checkAuth);
router.post("/register", checkPassword, register);
router.post("/login", login);
router.get("/logout", userRequired, logout);

export default router;
