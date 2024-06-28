import { Router } from "express";

import { adminRequired } from "../middlewares/adminRequired.js";
import {
  getAllPersons,
  getPersonById,
  addPerson,
  editPerson,
  deletePersonById,
} from "../controllers/person.js";

const router = Router();

// Route to get all Persons
router.get("/", getAllPersons);

// Route to get a specific Person by ID
router.get("/:id", getPersonById);

// Route to add a new Person, requires admin authorization
router.post("/", adminRequired, addPerson);

// Route to edit an existing Person by ID, requires admin authorization
router.patch("/:id", adminRequired, editPerson);

// Route to delete a Person by ID, requires admin authorization
router.delete("/:id", adminRequired, deletePersonById);

export default router;

// {
//   "Person_name": "evooooooker",
//   "description": "a venir",
//   "image": "a venir",
//   "alt": "a venir"
// }
