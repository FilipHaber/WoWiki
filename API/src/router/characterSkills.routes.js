import { Router } from "express";

import { adminRequired } from "../middlewares/adminRequired.js";
import {
  getAllCharacterSkills,
  getCharacterSkillsById,
  addCharacterSkills,
  editCharacterSkills,
  deleteCharacterSkills,
} from "../controllers/characterSkills.js";

const router = Router();

// Route to get all character skills
router.get("/", getAllCharacterSkills);

// Route to get specific character skills by ID
router.get("/:id", getCharacterSkillsById);

// Route to add new character skills, requires admin authorization
router.post("/", adminRequired, addCharacterSkills);

// Route to edit existing character skills by ID, requires admin authorization
router.patch("/:id", adminRequired, editCharacterSkills);

// Route to delete character skills by ID, requires admin authorization
router.delete("/:id", adminRequired, deleteCharacterSkills);

export default router;
