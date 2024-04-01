import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { styled } from "styled-components";

export default function Board({ winner, setWinner, reset, setReset }) {
  const [turn, setTurn] = useState(0);

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  const boardRef = useRef(null);

  const draw = async (event, index) => {
    if (winner === "") {
      const response = await axios.post(
        "http://localhost:8080/api/tictactoe/validDraw",
        { board, index }
      );
      const isValid = response.data;
      if (isValid) {
        const current = turn === 0 ? "X" : "O";
        board[index - 1] = current;
        event.target.innerText = current;
        setTurn(turn === 0 ? 1 : 0);
      }
    }
  };

  useEffect(() => {
    setBoard(["", "", "", "", "", "", "", "", ""]);

    const cells = boardRef.current.children;

    for (let i = 0; i < 9; i++) {
      cells[i].innerText = "";
    }

    setTurn(0);
    setWinner("");
    setReset(false);
  }, [reset, setReset, setWinner]);

  useEffect(() => {
    const fetchData = () => {
      return axios.post("http://localhost:8080/api/tictactoe/isWinner", {
        board,
      });
    };

    fetchData()
      .then((response) => {
        const checkWin = response.data;
        if (checkWin === "Win") {
          setWinner(turn === 0 ? "Player 2 Wins!" : "Player 1 Wins!");
        } else if (checkWin === "Tie") {
          setWinner("It's a Tie!");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [board, setWinner, turn]);

  return (
    <BoardDiv ref={boardRef}>
      <Input onClick={(e) => draw(e, 1)}></Input>
      <Input onClick={(e) => draw(e, 2)}></Input>
      <Input onClick={(e) => draw(e, 3)}></Input>
      <Input onClick={(e) => draw(e, 4)}></Input>
      <Input onClick={(e) => draw(e, 5)}></Input>
      <Input onClick={(e) => draw(e, 6)}></Input>
      <Input onClick={(e) => draw(e, 7)}></Input>
      <Input onClick={(e) => draw(e, 8)}></Input>
      <Input onClick={(e) => draw(e, 9)}></Input>
    </BoardDiv>
  );
}

const BoardDiv = styled.div`
  width: 30vw;
  height: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Input = styled.button`
  height: 33.33%;
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 6rem;
`;
