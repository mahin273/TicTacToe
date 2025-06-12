export default function Square({ value, onSquareClick }) {
    return (
      <button
        className="w-20 aspect-square text-2xl font-bold border-2 border-blue-400 rounded-md hover:bg-blue-100 transition-all duration-200 flex items-center justify-center"
        onClick={onSquareClick}
      >
        {value}
      </button>
    );
  }
  