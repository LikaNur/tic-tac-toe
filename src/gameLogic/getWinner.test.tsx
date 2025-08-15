import { describe, it, expect } from 'vitest';
import { getWinner } from './getWinner';

describe('getWinner', () => {
  it('returns X when X wins horizontally', () => {
    const board = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
    expect(getWinner(board)).toBe('X');
  });

  it('returns X when X wins vertically', () => {
    const board = ['X', 'O', null, 'X', null, 'O', 'X', null, null];
    expect(getWinner(board)).toBe('X');
  });

  it('returns X when X wins diagonally ', () => {
    const board = [null, null, 'X', 'O', 'X', 'O', 'X', null, null];
    expect(getWinner(board)).toBe('X');
  });

  // when O wins

  it('returns O when O wins horizontally', () => {
    const board = [null, null, null, 'O', 'O', 'O', null, null, null];
    expect(getWinner(board)).toBe('O');
  });

  it('returns O when O wins vertically', () => {
    const board = [null, 'O', null, null, 'O', null, null, 'O', null];
    expect(getWinner(board)).toBe('O');
  });

  it('returns O when O wins diagonally ', () => {
    const board = ['O', null, null, null, 'O', null, null, null, 'O'];
    expect(getWinner(board)).toBe('O');
  });

  it('returns null for a full board with no winner', () => {
    const board = ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'];
    expect(getWinner(board)).toBeNull();
  });
});
