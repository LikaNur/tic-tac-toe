import { winningCombinations } from '../constants';

export const getWinner = board => {
  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[b] === board[c])
      return board[a];
  }
  return null;
};
