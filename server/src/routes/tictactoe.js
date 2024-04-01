import express from "express";
import { isWinner, validDraw } from "../controllers/tictactoe.js";

const router = express.Router();

router.post("/validDraw", validDraw);
router.post("/isWinner", isWinner);

export default router;
