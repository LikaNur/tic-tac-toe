import { useState } from 'react';
import { winningCombinations } from './constants';
import { Board } from './components/Board';

const App = () => {
  let initialState = {
    board: Array(9).fill(null),
    isXnext: true,
  };

  const [board, setBoard] = useState(initialState.board);
  const [isXnext, setIsXnext] = useState(initialState.isXnext);

  let getWinner = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  let squareClicked = idx => {
    if (isGameOver || board[idx] !== null) return;

    const updated = board.map((square, squareIdx) => {
      if (idx === squareIdx) {
        return isXnext ? 'X' : 'O';
      } else {
        return square;
      }
    });

    setBoard(updated);
    setIsXnext(!isXnext);
  };

  let resetGame = () => {
    setBoard(initialState.board);
    setIsXnext(initialState.isXnext);
  };

  const winner = getWinner();
  const isFull = board.every(Boolean);
  const isGameOver = Boolean(winner) || isFull;

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
