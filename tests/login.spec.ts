import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login with valid credentials and verify dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('testuser', 'testpass'); // dummy credentials
  await loginPage.assertLoginSuccess();
  await page.screenshot({ path: 'post-login.png' });
});
