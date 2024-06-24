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

router.get("/", getAllSpecializations);
router.get("/:id", getSpecializationById);
router.post("/", adminRequired, addSpecialization);
router.patch("/:id", adminRequired, editSpecialization);
router.delete("/:id", adminRequired, deleteSpecialization);

export default router;
