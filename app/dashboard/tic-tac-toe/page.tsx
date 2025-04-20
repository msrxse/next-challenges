"use client";

import Games from "@/app/dashboard/tic-tac-toe/games";
import Square from "@/app/dashboard/tic-tac-toe/Square";
import React, { useState } from "react";
export type Value = "X" | "O" | null;

function calculateWinner(squares: Value[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Page() {
  const [squares, setSquares] = useState<Value[]>(Array(9).fill(null));
  const [history, setHistory] = useState<Value[][]>([Array(9).fill(null)]);

  const xIsNext = history.length % 2 === 0;
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const handleClick = (index: number) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setSquares(nextSquares);
    setHistory([...history, nextSquares]);
  };

  function handlePlay(currentMove: number) {
    const nextHistory = [...history.slice(0, currentMove + 1)];
    setSquares(nextHistory[currentMove]);
    setHistory(nextHistory);
  }

  return (
    <main className="bg-gray-100 h-full flex flex-col justify-center items-center">
      <h1 className="text-xl text-gray-900 mb-4">tic-tac-toe</h1>
      <h1 className="text-xl text-red-800">{status}</h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-3">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <div className="h-full border border-gray-300 p-2 ml-3 min-w-30">
          <Games history={history} onPlay={handlePlay} />
        </div>
      </div>
    </main>
  );
}

export default Page;
