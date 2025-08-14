import { squareStyle } from '../styles';

export const Square = ({
  playerMark,
  isGameOver,
  handleSquareClick,
  ariaLabel,
}) => {
  return (
    <button
      type='button'
      className='square'
      data-testid='square'
      aria-label={ariaLabel}
      style={squareStyle}
      onClick={handleSquareClick}
      disabled={isGameOver}
    >
      {playerMark}
    </button>
  );
};
