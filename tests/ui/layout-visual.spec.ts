import { test, expect } from '@playwright/test';

test.describe('📸 Multiple UI Element Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.waitForTimeout(1000); // ensure full UI load
  });

  test('🔲 Header should match snapshot', async ({ page }) => {
    const header = page.locator('header'); // adjust selector if needed
    expect(await header.screenshot()).toMatchSnapshot('orangehrm-header.png');
  });

  test('🔲 Login box should match snapshot', async ({ page }) => {
    const loginBox = page.locator('.orangehrm-login-slot'); // specific container
    expect(await loginBox.screenshot()).toMatchSnapshot('orangehrm-login-box.png');
  });

  test('🔲 Footer should match snapshot', async ({ page }) => {
    const footer = page.locator('footer'); // adjust based on site
    expect(await footer.screenshot()).toMatchSnapshot('orangehrm-footer.png');
  });
});
