import express from "express";
import cors from "cors";
import chadhavaRoutes from "./routes/chadhavaRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/chadhava", chadhavaRoutes);

export default app;