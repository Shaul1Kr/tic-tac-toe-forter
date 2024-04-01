import express from "express";
import tictactoe from "./tictactoe.js";

const router = express.Router();

router.use("/tictactoe", tictactoe);

export default router;
