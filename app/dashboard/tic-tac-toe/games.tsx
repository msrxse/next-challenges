import { Value } from "@/app/dashboard/tic-tac-toe/page";
import { Button } from "@/app/ui/button";
import React from "react";

interface Games {
  history: Value[][];
  onPlay: (currentMove: number) => void;
}

function Games({ history, onPlay }: Games) {
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <Button onClick={() => onPlay(move)}>{description}</Button>
      </li>
    );
  });

  return <ol className="list-decimal pl-4">{moves}</ol>;
}

export default Games;
