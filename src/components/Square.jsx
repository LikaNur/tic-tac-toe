import { squareStyle } from '../styles';

export const Square = ({
  playerMark,
  disabled,
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
      disabled={disabled || playerMark !== null}
    >
      {playerMark}
    </button>
  );
};
