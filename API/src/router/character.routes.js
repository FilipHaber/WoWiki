import { Router } from "express";

import {
  getAllCharacter,
  getCharacterById,
  addCharacter,
  editCharacter,
  deleteCharacterById,
} from "../controllers/character.js";

import { adminRequired } from "../middlewares/adminRequired.js";

const router = Router();

router.get("/", getAllCharacter);
router.get("/:id", getCharacterById);
router.post("/", adminRequired, addCharacter);
router.patch("/", adminRequired, editCharacter);
router.delete("/:id", adminRequired, deleteCharacterById);

export default router;
