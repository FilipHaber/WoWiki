import { Router } from "express";

import { adminRequired } from "../middlewares/adminRequired.js";
import {
  getAllRoles,
  getRoleById,
  addRole,
  editRole,
  deleteRole,
} from "../controllers/role.js";

const router = Router();

// Route to fetch all roles
router.get("/", getAllRoles);

// Route to fetch a specific role by ID
router.get("/:id", getRoleById);

// Route to add a new role (requires admin permission)
router.post("/", adminRequired, addRole);

// Route to edit an existing role (requires admin permission)
router.patch("/:id", adminRequired, editRole);

// Route to delete a role by ID (requires admin permission)
router.delete("/:id", adminRequired, deleteRole);

export default router;

// {
//       // "role_name": "Tank",
//       // "image": "a venir",
//       // "alt": "a venir",
//       // "description": "a venir"
//   }
