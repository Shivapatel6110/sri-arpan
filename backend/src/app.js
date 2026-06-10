import express from "express";
import cors from "cors";
import ChadhavaRoutes from "./routes/ChadhavaRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/chadhava", ChadhavaRoutes);

export default app;