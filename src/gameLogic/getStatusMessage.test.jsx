import { describe, it, expect } from 'vitest';
import { getStatusMessage } from './getStatusMessage';

describe('getStatusMessage', () => {
  it('shows Winner: X if player X wins', () => {
    expect(getStatusMessage('X', false, false)).toBe('Winner: X');
  });

  it('shows Winner: O if player O wins', () => {
    expect(getStatusMessage('O', false, false)).toBe('Winner: O');
  });

  it('shows draw when there is no winner', () => {
    expect(getStatusMessage(null, true, false)).toBe('Draw');
  });

  it('shows next player X when next turn is X', () => {
    expect(getStatusMessage(null, false, true)).toBe('Next Player: X');
  });

  it('shows next playeqr O when next turn is O', () => {
    expect(getStatusMessage(null, false, false)).toBe('Next Player: O');
  });
});
