import { statusMessage } from '../constants';
import { Square } from './Square';
import {
  containerStyle,
  boardStyle,
  instructionsStyle,
  buttonStyle,
} from '../styles';

export const Board = ({
  board,
  isXnext,
  winner,
  isGameOver,
  handleSquareClick,
  handleReset,
}) => {
  return (
    <div style={containerStyle} role='grid' className='gameBoard'>
      <h1 id='statusArea' className='status' style={instructionsStyle}>
        {statusMessage(winner, isGameOver, isXnext)}
      </h1>
      <button type='reset' style={buttonStyle} onClick={handleReset}>
        Reset
      </button>
      <div style={boardStyle}>
        {board.map((playerMark, idx) => (
          <Square
            ariaLabel={`square-${idx}`}
            key={idx}
            isGameOver={isGameOver}
            playerMark={playerMark}
            handleSquareClick={() => handleSquareClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};
