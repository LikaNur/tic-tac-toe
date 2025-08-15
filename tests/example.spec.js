// @ts-check
import { test, expect } from '@playwright/test';

const getSquares = page => page.getByTestId('square');
const getStatus = page => page.locator('#statusArea');
const getReset = page => page.getByRole('button', { name: /reset/i });

async function playMoves(page, combo) {
  const squares = getSquares(page);

  for (const i of combo) {
    await squares.nth(i).click();
  }
}

async function assertInitialBoard(page) {
  const squares = getSquares(page);
  const status = getStatus(page);

  await expect(status).toHaveText(/Next Player:\s*X/i);
  await expect(squares).toHaveCount(9);

  for (let i = 0; i < 9; i++) {
    await expect(squares.nth(i)).toHaveText('');
    await expect(squares.nth(i)).toBeEnabled();
  }
}

async function resetToInitial(page) {
  const reset = getReset(page);
  await reset.click();
  await assertInitialBoard(page);
}

async function expectAllSquaresDisabled(page) {
  const squares = getSquares(page);
  for (let i = 0; i < 9; i++) {
    await expect(squares.nth(i)).toBeDisabled();
  }
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Tic tac toe display', () => {
  test('check metadata of the page', async ({ page }) => {
    const squares = getSquares(page);
    const status = getStatus(page);
    const reset = getReset(page);

    await expect(page).toHaveTitle(/tic tac toe/i);
    await expect(status).toBeVisible();
    await expect(reset).toBeVisible();
    await expect(squares).toHaveCount(9);
  });

  test('check winner horizontally', async ({ page }) => {
    const status = getStatus(page);

    await playMoves(page, [0, 4, 1, 6, 2]);
    await expect(status).toHaveText(/Winner:\s*X/i);
    await expectAllSquaresDisabled(page);
    await resetToInitial(page);
  });

  test('check winner vertically', async ({ page }) => {
    const status = getStatus(page);

    await playMoves(page, [0, 4, 6, 5, 3]);
    await expect(status).toHaveText(/Winner:\s*X/i);
    await expectAllSquaresDisabled(page);
    await resetToInitial(page);
  });

  test('check winner diagonally', async ({ page }) => {
    const status = getStatus(page);

    await playMoves(page, [3, 0, 2, 4, 5, 8]);
    await expect(status).toHaveText(/Winner:\s*O/i);
    await expectAllSquaresDisabled(page);
    await resetToInitial(page);
  });

  test('check game over case and disbaled squares', async ({ page }) => {
    const status = getStatus(page);

    await playMoves(page, [0, 2, 1, 3, 5, 4, 6, 8, 7]);
    await expect(status).toHaveText(/Draw/i);
    await expectAllSquaresDisabled(page);
    await resetToInitial(page);
  });

  test('check the logic of the reset button at any time', async ({ page }) => {
    await playMoves(page, [0, 4]);
    await resetToInitial(page);
  });

  test('check if the players toggle and disable the clicked square', async ({
    page,
  }) => {
    const squares = getSquares(page);
    const status = getStatus(page);

    await expect(status).toHaveText(/Next Player:\s*X/i);
    await squares.nth(0).click();
    await expect(squares.nth(0)).toBeDisabled();
    await expect(squares.nth(0)).toHaveText('X');
    await expect(status).toHaveText(/Next Player:\s*O/i);

    await squares.nth(1).click();
    await expect(squares.nth(1)).toBeDisabled();
    await expect(squares.nth(1)).toHaveText('O');
    await expect(status).toHaveText(/Next Player:\s*X/i);
  });
});
