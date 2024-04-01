export function checkRow(board) {
  let ans = false;
  for (let i = 0; i < 9; i += 3) {
    ans |=
      board[i] === board[i + 1] && board[i] === board[i + 2] && board[i] !== "";
  }
  return ans;
}

export function checkCol(board) {
  let ans = false;
  for (let i = 0; i < 3; i++) {
    ans |=
      board[i] === board[i + 3] && board[i] === board[i + 6] && board[i] !== "";
  }
  return ans;
}

export function checkDiagonal(board) {
  return (
    (board[0] === board[4] && board[0] === board[8] && board[0] !== "") ||
    (board[2] === board[4] && board[2] === board[6] && board[2] !== "")
  );
}
