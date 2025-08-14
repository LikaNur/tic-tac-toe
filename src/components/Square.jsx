import { squareStyle } from '../styles';

export const Square = ({ playerMark, isGameOver, handleSquareClick }) => {
  return (
    <button
      type='button'
      className='square'
      style={squareStyle}
      onClick={handleSquareClick}
      disabled={isGameOver}
    >
      {playerMark}
    </button>
  );
};
