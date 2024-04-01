import { useState } from "react";
import { styled } from "styled-components";
import Board from "./Components/Board";

export default function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");
  const resetBoard = () => {
    setReset(true);
  };
  return (
    <PageContainer>
      <Winner winner={winner}>
        <WinnerText>{winner}</WinnerText>

        <Button onClick={() => resetBoard()}>Reset Board</Button>
      </Winner>

      <Board
        winner={winner}
        setWinner={setWinner}
        reset={reset}
        setReset={setReset}
      />
      <Info>
        <Player>Player 1: X</Player>
        <Player>Player 2: O</Player>
      </Info>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5vh;
  backdrop-filter: 5px;
`;

const Winner = styled.div`
  transition: all ease-in 0.3s;
  display: ${({ winner }) => (winner === "" ? "none" : "flex")};
  opacity: 1;
  font-size: 1.5rem;
  font-weight: 600;
  gap: 1vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  background-color: rgba(24, 22, 23, 0.863);
  backdrop-filter: 5px;
  padding: 0.5rem;
  padding-bottom: 1rem;
  border-radius: 10%;
`;

const WinnerText = styled.div`
  padding: 0.3em 1em 0.25em;
  font-weight: 600;
  font-size: 2.5rem;
  color: white;
  position: relative;
  text-align: center;
  line-height: 1.3;
`;

const Button = styled.button`
  background-color: #111827;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.2rem;
  text-align: center;
  text-decoration: none #6b7280 solid;
  text-decoration-thickness: auto;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  :hover {
    background-color: #374151;
  }
  :focus {
    box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const Info = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Player = styled.div`
  border: 2px solid #f6546a;
  border-radius: 5%;
  padding: 0.5rem 0;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 10vw;
`;
