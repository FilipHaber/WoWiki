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

router.get("/", getAllCharacterSkills);
router.get("/:id", getCharacterSkillsById);
router.post("/", adminRequired, addCharacterSkills);
router.patch("/:id", adminRequired, editCharacterSkills);
router.delete("/:id", adminRequired, deleteCharacterSkills);

export default router;
