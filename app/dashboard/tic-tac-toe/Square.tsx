import { Value } from '@/app/dashboard/tic-tac-toe/page'

interface Square {
  value: Value
  onSquareClick: () => void
}

const Square = ({ value, onSquareClick }: Square) => {
  return (
    <button
      className="m-0 h-20 w-20 border border-gray-300 p-0"
      onClick={onSquareClick}
    >
      <h1 className="text-5xl text-gray-800">{value}</h1>
    </button>
  )
}

export default Square
