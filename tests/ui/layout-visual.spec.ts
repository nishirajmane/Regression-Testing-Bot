import { test, expect } from '@playwright/test';

test.describe('📸 Multiple UI Element Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.waitForTimeout(5000); // ensure full UI load
  });

  

  test('🔲 Login box should match snapshot', async ({ page }) => {
    const loginBox = page.locator('.orangehrm-login-slot'); // specific container
    expect(await loginBox.screenshot()).toMatchSnapshot('orangehrm-login-box.png');
  });

 
});
