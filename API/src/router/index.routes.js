import { Router } from "express";

import auth_router from "./auth.routes.js";
import character_router from "./character.routes.js";
import role_router from "./role.routes.js";
import user_router from "./user.routes.js";
import function_router from "./function.routes.js";
import specialization_router from "./specialization.routes.js";
import characterSkills_router from "./characterSkills.routes.js";

const router = Router();
const BASE_API = "/api";

router.get("/", (req, res) => {
  res.json({ msg: "connected" });
});

router.use(`${BASE_API}/auth`, auth_router);
router.use(`${BASE_API}/character`, character_router);
router.use(`${BASE_API}/role`, role_router);
router.use(`${BASE_API}/user`, user_router);
router.use(`${BASE_API}/function`, function_router);
router.use(`${BASE_API}/specialization`, specialization_router);
router.use(`${BASE_API}/characterSkills`, characterSkills_router);

export default router;
