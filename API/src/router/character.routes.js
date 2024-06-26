import { Router } from "express";

import { adminRequired } from "../middlewares/adminRequired.js";
import {
  getAllCharacters,
  getCharacterById,
  addCharacter,
  editCharacter,
  deleteCharacterById,
} from "../controllers/character.js";

const router = Router();

// Route to get all characters
router.get("/", getAllCharacters);

// Route to get a specific character by ID
router.get("/:id", getCharacterById);

// Route to add a new character, requires admin authorization
router.post("/", adminRequired, addCharacter);

// Route to edit an existing character by ID, requires admin authorization
router.patch("/:id", adminRequired, editCharacter);

// Route to delete a character by ID, requires admin authorization
router.delete("/:id", adminRequired, deleteCharacterById);

export default router;

// {
//   "character_name": "evooooooker",
//   "description": "a venir",
//   "image": "a venir",
//   "alt": "a venir"
// }
