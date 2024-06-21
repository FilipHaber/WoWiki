import { Router } from "express";

import auth_router from "./auth.routes.js";
import character_router from "./character.routes.js";
import role_router from "./role.routes.js";

const router = Router();
const BASE_API = "/api";

router.get("/", (req, res) => {
  res.json({ msg: "connected" });
});

router.use(`${BASE_API}/auth`, auth_router);
router.use(`${BASE_API}/character`, character_router);
router.use(`${BASE_API}/role`, role_router);

export default router;
