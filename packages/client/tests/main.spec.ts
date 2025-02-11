import { test, expect } from '@playwright/test';

test('has todolist title', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await expect(page).toHaveTitle(/Todolist/);
});
