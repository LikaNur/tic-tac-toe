import { describe, it, expect } from 'vitest';
import { getStatusMessage } from './getStatusMessage';

describe('getStatusMessage', () => {
  it('shows Winner: X if player X wins', () => {
    expect(
      getStatusMessage({ isDraw: false, winner: 'X', isXnext: false })
    ).toBe('Winner: X');
  });

  it('shows Winner: O if player O wins', () => {
    expect(
      getStatusMessage({ isDraw: false, isXnext: false, winner: 'O' })
    ).toBe('Winner: O');
  });

  it('shows draw when there is no winner', () => {
    expect(
      getStatusMessage({ winner: null, isDraw: true, isXnext: false })
    ).toBe('Draw');
  });

  it('shows next player X when next turn is X', () => {
    expect(
      getStatusMessage({ winner: null, isDraw: false, isXnext: true })
    ).toBe('Next Player: X');
  });

  it('shows next playeqr O when next turn is O', () => {
    expect(
      getStatusMessage({ winner: null, isXnext: false, isDraw: false })
    ).toBe('Next Player: O');
  });
});
