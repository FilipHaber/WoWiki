import { Router } from "express";

import { adminRequired } from "../middlewares/adminRequired.js";
import {
  getAllTdh,
  getTdhById,
  addTdh,
  editTdh,
  deleteTdh,
} from "../controllers/tdh.js";

const router = Router();

// Route to fetch all Tdh
router.get("/", getAllTdh);

// Route to fetch a specific Tdh by ID
router.get("/:id", getTdhById);

// Route to add a new Tdh (requires admin permission)
router.post("/", adminRequired, addTdh);

// Route to edit an existing Tdh (requires admin permission)
router.patch("/:id", adminRequired, editTdh);

// Route to delete a Tdh by ID (requires admin permission)
router.delete("/:id", adminRequired, deleteTdh);

export default router;

// {
//       // "Tdh_name": "Tank",
//       // "image": "a venir",
//       // "alt": "a venir",
//       // "description": "a venir"
//   }
