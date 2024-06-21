import { Router } from "express";

import {
  getAllCharacters,
  getCharacterById,
  addCharacter,
  editCharacter,
  deleteCharacterById,
} from "../controllers/character.js";

import { adminRequired } from "../middlewares/adminRequired.js";

const router = Router();

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);
router.post("/", adminRequired, addCharacter);
router.patch("/:id", adminRequired, editCharacter);
router.delete("/:id", adminRequired, deleteCharacterById);

export default router;

// {
//   "character_name": "evooooooker",
//   "description": "a venir",
//   "image": "a venir",
//   "alt": "a venir"
// }
