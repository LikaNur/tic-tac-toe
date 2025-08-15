type StatusMessageParams = {
  winner: 'X' | 'O' | null;
  isDraw: boolean;
  isXnext: boolean;
};

export const getStatusMessage = ({
  winner,
  isDraw,
  isXnext,
}: StatusMessageParams) =>
  winner
    ? `Winner: ${winner}`
    : isDraw
    ? 'Draw'
    : `Next Player: ${isXnext ? 'X' : 'O'}`;
