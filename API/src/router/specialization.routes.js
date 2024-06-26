import { Router } from "express";

import { adminRequired } from "../middlewares/adminRequired.js";
import {
  getAllSpecializations,
  getSpecializationById,
  addSpecialization,
  editSpecialization,
  deleteSpecialization,
} from "../controllers/specialization.js";

const router = Router();

// Route to get all specializations
router.get("/", getAllSpecializations);

// Route to get a specialization by ID
router.get("/:id", getSpecializationById);

// Route to add a new specialization (admin access required)
router.post("/", adminRequired, addSpecialization);

// Route to edit a specialization by ID (admin access required)
router.patch("/:id", adminRequired, editSpecialization);

// Route to delete a specialization by ID (admin access required)
router.delete("/:id", adminRequired, deleteSpecialization);

export default router;
