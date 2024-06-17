import { Router } from "express";

import { adminRequired } from "../middlewares/adminRequired.js";

const router = Router();

router.get("/");
router.post("/");
router.patch("/");
router.delete("/");

export default router;
