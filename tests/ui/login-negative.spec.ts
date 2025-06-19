import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Login fails with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login('invaliduser', 'wrongpass');

  // This demo site doesn't show error — so just check we didn't land on dashboard
  await expect(page).not.toHaveURL(/app\.html/);

  await page.screenshot({ path: 'login-failure.png' });
});
