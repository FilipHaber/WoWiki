import { Router } from "express";

import { adminRequired } from "../middlewares/adminRequired.js";
import { userRequired } from "../middlewares/userRequired.js";
import {
  getAllUsers,
  getUserById,
  editUser,
  deleteUserById,
  editUserPassword,
} from "../controllers/user.js";

const router = Router();

// Route to get all users (admin access required)
router.get("/", getAllUsers);

// Route to get a user by ID (admin access required)
router.get("/:id", getUserById);

// Route to edit a user by ID (admin access required)
router.patch("/:id", adminRequired, editUser);

// Route to edit a user's password by ID (user acces required)
router.patch("/password/:id", editUserPassword);

// Route to delete a user (user's own account deletion, user access required)
router.delete("/:id", userRequired, deleteUserById);

export default router;
