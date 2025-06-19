import { test, expect } from '@playwright/test';

test.describe('Login UI tests - OrangeHRM', () => {
  test('✅ Successful login navigates to dashboard', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/dashboard/);
    await page.screenshot({ path: 'login-success.png' });
  });

  test('❌ Unsuccessful login shows error', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('wrongpass');
    await page.getByRole('button', { name: 'Login' }).click();

    const error = page.getByText('Invalid credentials');
    await expect(error).toBeVisible();
    await page.screenshot({ path: 'login-failure.png' });
  });
});
