import { Router } from "express";

import {
  getAllRoles,
  getRoleById,
  addRole,
  editRole,
  deleteRole,
} from "../controllers/role.js";

import { adminRequired } from "../middlewares/adminRequired.js";

const router = Router();

// Route to get all Roles, requires admin authorization
router.get("/", adminRequired, getAllRoles);

// Route to get a Role by ID, requires admin authorization
router.get("/:id", adminRequired, getRoleById);

// Route to add a new Role, requires admin authorization
router.post("/", adminRequired, addRole);

// Route to edit a Role by ID, requires admin authorization
router.patch("/:id", adminRequired, editRole);

// Route to delete a Role by ID, requires admin authorization
router.delete("/:id", adminRequired, deleteRole);

export default router;
