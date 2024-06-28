import { Router } from "express";

import auth_router from "./auth.routes.js";
import person_router from "./person.routes.js";
import tdh_router from "./tdh.routes.js";
import user_router from "./user.routes.js";
import role_router from "./role.routes.js";
import specialization_router from "./specialization.routes.js";
import personSkills_router from "./personSkills.routes.js";
import comment_router from "./comment.routes.js";
import alert_router from "./alert.routes.js";

const router = Router();
const BASE_API = "/api";

// Default route to verify connection
router.get("/", (req, res) => {
  res.json({ msg: "connected" });
});

// Routes for different API endpoints
router.use(`${BASE_API}/auth`, auth_router); // Route for authentication
router.use(`${BASE_API}/person`, person_router); // Route for persons
router.use(`${BASE_API}/tdh`, tdh_router); // Route for tdh
router.use(`${BASE_API}/user`, user_router); // Route for users
router.use(`${BASE_API}/role`, role_router); // Route for functions
router.use(`${BASE_API}/specialization`, specialization_router); // Route for specializations
router.use(`${BASE_API}/personSkills`, personSkills_router); // Route for person skills
router.use(`${BASE_API}/comment`, comment_router); // Route for comments
router.use(`${BASE_API}/alert`, alert_router); // Route for alerts

export default router;
