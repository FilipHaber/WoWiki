import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import router from "./router/index.routes.js";
import newSession from "./config/session.js";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();

const corsOptions = cors({
  origin: "http://localhost:5173",
  credentials: true,
});

app.use(corsOptions);

app.use(newSession);

app.use(express.json());
app.use(express.static(path.join(dirname, "public")));

app.use(router);

app.listen(process.env.LOCAL_PORT, () => {
  console.log(
    "Server is running at http://localhost:" + process.env.LOCAL_PORT
  );
});
