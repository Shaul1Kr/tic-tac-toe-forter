import { checkRow, checkCol, checkDiagonal } from "../func/check.js";

export function validDraw(req, res) {
  try {
    const { board, index } = req.body;
    console.info(`A player clicks on the board at the index ${index} `);
    if (index > 9) return res.status(401).json({ message: "Bed Request" });
    if (board[index - 1] === "") return res.status(200).json(true);
    return res.status(200).json(false);
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Bed Request" });
  }
}

export function isWinner(req, res) {
  try {
    console.info(`Checking if a player won`);
    const { board } = req.body;
    if (checkRow(board) || checkCol(board) || checkDiagonal(board)) {
      return res.status(200).json("Win");
    }
    let count = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i] !== "") {
        count++;
      }
    }
    if (count === 9) return res.status(200).json("Tie");
    return res.status(200).json("Keep going");
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Bed Request" });
  }
}
