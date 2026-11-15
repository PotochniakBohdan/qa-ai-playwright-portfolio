import { test, expect } from '@playwright/test';

test('LOGIN-07: navigates from login to the forgot password page', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/notes/app/login');

  await page.getByRole('link', { name: 'Forgot password', exact: true }).click();

  await expect(page).toHaveURL('https://practice.expandtesting.com/notes/app/forgot-password');
  await expect(
    page.getByRole('heading', { name: 'Reset your password', exact: true }),
  ).toBeVisible();
});
