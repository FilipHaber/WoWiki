import { Router } from "express";

import { userRequired } from "../middlewares/userRequired.js";
import { adminRequired } from "../middlewares/adminRequired.js";
import {
  getAllNoTreatenAlerts,
  editAlert,
  addAlert,
} from "../controllers/alert.js";

const router = Router();

// Route to retrieve all alerts that are not yet treated, requires admin privilege
router.get("/", adminRequired, getAllNoTreatenAlerts);

// Route to add a new alert, requires user authentication
router.post("/", userRequired, addAlert);

// Route to edit an alert by ID, requires admin privilege
router.patch("/:id", adminRequired, editAlert);

export default router;
