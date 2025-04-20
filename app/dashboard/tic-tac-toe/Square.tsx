import { Value } from "@/app/dashboard/tic-tac-toe/page";

interface Square {
  value: Value;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: Square) => {
  return (
    <button
      className="border border-gray-300 w-20 h-20 m-0 p-0"
      onClick={onSquareClick}
    >
      <h1 className="text-5xl text-gray-800">{value}</h1>
    </button>
  );
};

export default Square;
