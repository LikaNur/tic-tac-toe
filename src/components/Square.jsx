import { squareStyle } from '../styles';

export const Square = ({ playerMark, disabled, onClick, ariaLabel }) => {
  return (
    <button
      type='button'
      className='square'
      data-testid='square'
      aria-label={ariaLabel}
      style={squareStyle}
      onClick={onClick}
      disabled={disabled || playerMark !== null}
    >
      {playerMark}
    </button>
  );
};
