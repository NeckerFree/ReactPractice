import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
const [isXNext, setIsXNext]=useState(true);

  const onSquareClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] =(isXNext)? "X":"O";
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }
  const calculateWinner=(squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  let winner=calculateWinner(squares);
  let status;
  status=(winner)?`Ganador ${winner}`:`Siguiente jugador ${(isXNext)?"X":"O"}`;
  return (
    <>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square onSquareClick={() => onSquareClick(0)} value={squares[0]} />
        <Square onSquareClick={() => onSquareClick(1)} value={squares[1]} />
        <Square onSquareClick={() => onSquareClick(2)} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => onSquareClick(3)} value={squares[3]} />
        <Square onSquareClick={() => onSquareClick(4)} value={squares[4]} />
        <Square onSquareClick={() => onSquareClick(5)} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => onSquareClick(6)} value={squares[6]} />
        <Square onSquareClick={() => onSquareClick(7)} value={squares[7]} />
        <Square onSquareClick={() => onSquareClick(8)} value={squares[8]} />
      </div>
    </>
  )
}
export default Board;