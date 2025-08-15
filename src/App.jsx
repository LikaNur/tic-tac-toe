import { useState } from 'react';
import { winningCombinations } from './constants';
import { Board } from './components/Board';

let initialState = {
  board: Array(9).fill(null),
  isXnext: true,
};

let getWinner = board => {
  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[b] === board[c])
      return board[a];
  }
  return null;
};

const App = () => {
  const [board, setBoard] = useState(initialState.board);
  const [isXnext, setIsXnext] = useState(initialState.isXnext);

  const winner = getWinner(board);
  const isFull = board.every(Boolean);
  const isGameOver = Boolean(winner) || isFull;

  let squareClicked = idx => {
    const updated = board.map((square, squareIdx) => {
      if (idx === squareIdx) {
        return isXnext ? 'X' : 'O';
      }
      return square;
    });

    setBoard(updated);
    setIsXnext(!isXnext);
  };

  let resetGame = () => {
    setBoard(initialState.board);
    setIsXnext(initialState.isXnext);
  };

  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          board={board}
          isXnext={isXnext}
          winner={winner}
          isGameOver={isGameOver}
          handleSquareClick={squareClicked}
          handleReset={resetGame}
        />
      </div>
    </div>
  );
};

export default App;
