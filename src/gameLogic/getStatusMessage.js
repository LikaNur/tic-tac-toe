export const getStatusMessage = (winner, isDraw, isXnext) =>
  winner
    ? `Winner: ${winner}`
    : isDraw
    ? 'Draw'
    : `Next Player: ${isXnext ? 'X' : 'O'}`;
