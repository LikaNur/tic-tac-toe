import { useState } from 'react';
import { Board } from './components/Board';
import { getWinner } from './gameLogic/getWinner';

let initialState = {
  board: Array(9).fill(null),
  isXnext: true,
};

const App = () => {
  const [board, setBoard] = useState(initialState.board);
  const [isXnext, setIsXnext] = useState(initialState.isXnext);

  const winner = getWinner(board);
  const isFull = board.every(Boolean);
  const isDraw = Boolean(winner) || isFull;

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
          isDraw={isDraw}
          handleSquareClick={squareClicked}
          handleReset={resetGame}
        />
      </div>
    </div>
  );
};

export default App;
