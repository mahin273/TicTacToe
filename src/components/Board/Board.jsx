
import Square from "../Square/Square.jsx"
import { calculateWinner } from "../../utils/gameLogic";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <>
      <div className="text-xl font-semibold mb-4 text-center text-blue-700">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {squares.map((val, i) => (
          <Square key={i} value={val} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </>
  );
}
