import { Router } from "express";

import {
  getAllFunctions,
  getFunctionById,
  addFunction,
  editFunction,
  deleteFunction,
} from "../controllers/function.js";

import { adminRequired } from "../middlewares/adminRequired.js";

const router = Router();

router.get("/", adminRequired, getAllFunctions);
router.get("/:id", adminRequired, getFunctionById);
router.post("/", adminRequired, addFunction);
router.patch("/:id", adminRequired, editFunction);
router.delete("/:id", adminRequired, deleteFunction);

export default router;
