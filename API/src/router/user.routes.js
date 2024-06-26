import { Router } from "express";

import { adminRequired } from "../middlewares/adminRequired.js";
import { userRequired } from "../middlewares/userRequired.js";
import {
  getAllUsers,
  getUserById,
  editUser,
  deleteUserById,
} from "../controllers/user.js";

const router = Router();

// Route to get all users (admin access required)
router.get("/", adminRequired, getAllUsers);

// Route to get a user by ID (admin access required)
router.get("/:id", adminRequired, getUserById);

// Route to edit a user by ID (admin access required)
router.patch("/:id", adminRequired, editUser);

// Route to delete a user (user's own account deletion, user access required)
router.delete("/", userRequired, deleteUserById);

export default router;
