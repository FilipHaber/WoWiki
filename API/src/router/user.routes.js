import { Router } from "express";

import { adminRequired } from "../middlewares/adminRequired.js";
import { getAllUsers, getUserById, editUser } from "../controllers/user.js";

const router = Router();

router.get("/", adminRequired, getAllUsers);
router.get("/:id", adminRequired, getUserById);
router.patch("/:id", adminRequired, editUser);

export default router;
