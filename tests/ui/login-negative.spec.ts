import { test, expect } from '@playwright/test';

test('❌ UI login fails with empty password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill(''); // blank
  await page.getByRole('button', { name: 'Login' }).click();

  const error = page.getByText('Required');
  await expect(error).toBeVisible();
  await page.screenshot({ path: 'login-missing-password.png' });
});
