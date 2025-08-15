import { Square } from './Square';
import {
  containerStyle,
  boardStyle,
  instructionsStyle,
  buttonStyle,
} from '../styles';
import { getStatusMessage } from '../gameLogic/getStatusMessage';

export const Board = ({
  board,
  isXnext,
  winner,
  isDraw,
  handleSquareClick,
  handleReset,
}) => {
  return (
    <div style={containerStyle} role='grid' className='gameBoard'>
      <h1 id='statusArea' className='status' style={instructionsStyle}>
        {getStatusMessage(winner, isDraw, isXnext)}
      </h1>
      <button type='reset' style={buttonStyle} onClick={handleReset}>
        Reset
      </button>
      <div style={boardStyle}>
        {board.map((playerMark, idx) => (
          <Square
            ariaLabel={`square-${idx}`}
            key={idx}
            disabled={isDraw}
            playerMark={playerMark}
            onClick={() => handleSquareClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};
