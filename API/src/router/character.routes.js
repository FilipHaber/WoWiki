import { Router } from "express";

import {
  getAllCharacter,
  getCharacterById,
  addCharacter,
  editCharacter,
} from "../controllers/character.js";

const router = Router();

router.get("/", getAllCharacter);
router.get("/:id", getCharacterById);
router.post("/", addCharacter);
router.patch("/", editCharacter);

export default router;
