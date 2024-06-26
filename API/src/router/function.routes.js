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

// Route to get all functions, requires admin authorization
router.get("/", adminRequired, getAllFunctions);

// Route to get a function by ID, requires admin authorization
router.get("/:id", adminRequired, getFunctionById);

// Route to add a new function, requires admin authorization
router.post("/", adminRequired, addFunction);

// Route to edit a function by ID, requires admin authorization
router.patch("/:id", adminRequired, editFunction);

// Route to delete a function by ID, requires admin authorization
router.delete("/:id", adminRequired, deleteFunction);

export default router;
