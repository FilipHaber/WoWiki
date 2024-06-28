import { Router } from "express";

import { adminRequired } from "../middlewares/adminRequired.js";
import {
  getAllPersonSkills,
  getPersonSkillsById,
  addPersonSkills,
  editPersonSkills,
  deletePersonSkills,
} from "../controllers/personSkills.js";

const router = Router();

// Route to get all Person skills
router.get("/", getAllPersonSkills);

// Route to get specific Person skills by ID
router.get("/:id", getPersonSkillsById);

// Route to add new Person skills, requires admin authorization
router.post("/", adminRequired, addPersonSkills);

// Route to edit existing Person skills by ID, requires admin authorization
router.patch("/:id", adminRequired, editPersonSkills);

// Route to delete Person skills by ID, requires admin authorization
router.delete("/:id", adminRequired, deletePersonSkills);

export default router;
