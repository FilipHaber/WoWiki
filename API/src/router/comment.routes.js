import { Router } from "express";

import { adminRequired } from "../middlewares/adminRequired.js";
import { userRequired } from "../middlewares/userRequired.js";
import {
  getAllComments,
  getCommentsByUserId,
  getCommentsByCharacterId,
  addComment,
  editComment,
} from "../controllers/comment.js";

const router = Router();

router.get("/", getAllComments);
router.get("/usercomments/:id", getCommentsByUserId);
router.get("/charactercomments/:id", getCommentsByCharacterId);
router.post("/", addComment);
router.patch("/:id", editComment);

export default router;
