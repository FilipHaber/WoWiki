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

router.get("/", getAllRoles);
router.get("/:id", getRoleById);
router.post("/", adminRequired, addRole);
router.patch("/:id", adminRequired, editRole);
router.delete("/:id", adminRequired, deleteRole);

export default router;

// {
//       // "role_name": "Tank",
//       // "image": "a venir",
//       // "alt": "a venir",
//       // "description": "a venir"
//   }
