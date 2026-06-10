import express from "express";
import {
  createChadhava,
  getAllChadhava,
  getSingleChadhava,
  updateChadhava,
  deleteChadhava,
} from "../controllers/ChadhavaController.js";

const router = express.Router();

router.post("/", createChadhava);
router.get("/", getAllChadhava);
router.get("/:id", getSingleChadhava);
router.put("/:id", updateChadhava);
router.delete("/:id", deleteChadhava);

export default router;