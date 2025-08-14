// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Tic tac toe page', () => {
  test('check metadata of the page', async ({ page }) => {
    await expect(page).toHaveTitle(/tic tac toe/i);
    await expect(
      page.getByRole('heading', { name: /next player/i })
    ).toBeVisible();

    await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible();
    await expect(page.getByTestId('square')).toHaveCount(9);
  });

  test('placing a mark toggles turn and cannot overwrite', async ({ page }) => {
    const s4 = page.getByRole('button', { name: 'square' }).nth(4);
    await s4.click();
    await expect(s4).toHaveText(/X/i);

    const status = page.getByRole('heading', { name: /next player/i });
    await expect(status).toHaveText(/O/i);
    await s4.click();
    await expect(s4).toHaveText(/X/i);
  });

  test('check the reset button', async ({ page }) => {
    const squares = page.getByTestId('square');
    const status = page.getByRole('heading', { name: /next player/i });
    const reset = page.getByRole('button', { name: /reset/i });

    await squares.nth(0).click();
    await squares.nth(4).click();

    await reset.click();

    await expect(status).toHaveText(/Next Player:\s*X/i);
    await expect(squares).toHaveCount(9);

    for (let i = 0; i < 9; i++) {
      await expect(squares.nth(i)).toHaveText('');
      await expect(squares.nth(i)).toBeEnabled();
    }
  });
});
