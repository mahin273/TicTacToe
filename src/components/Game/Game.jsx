import { useTicTacToe } from "../../hooks/useTicTacToe";
import Board from "../Board/Board";

export default function Game() {
  const { xIsNext, currentSquares, history, handlePlay, jumpTo } =
    useTicTacToe();
    
const moves = history.map((squares, move) => {
    const description = move > 0 ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded transition"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col lg:flex-row gap-8">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <h2 className="text-lg font-medium mb-2 text-gray-800">
            Move History
          </h2>
          <ol className="space-y-2">{moves}</ol>
        </div>
      </div>
    </div>
  );
}
