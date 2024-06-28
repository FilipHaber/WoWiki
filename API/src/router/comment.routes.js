import { Router } from "express";

import { adminRequired } from "../middlewares/adminRequired.js";
import { userRequired } from "../middlewares/userRequired.js";
import {
  getAllComments,
  getCommentsByUserId,
  getCommentsByPersonId,
  addComment,
  editComment,
} from "../controllers/comment.js";

const router = Router();

// Route to get all comments, requires admin authorization
router.get("/", adminRequired, getAllComments);

// Route to get comments by user ID, requires admin authorization
router.get("/usercomments/", adminRequired, getCommentsByUserId);

// Route to get comments by person ID
router.get("/personcomments/:id", getCommentsByPersonId);

// Route to add a new comment, requires user authorization
router.post("/", userRequired, addComment);

// Route to edit a comment by ID, requires user authorization
router.patch("/:id", userRequired, editComment);

export default router;
