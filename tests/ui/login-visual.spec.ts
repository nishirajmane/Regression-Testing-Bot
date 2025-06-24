import { test, expect } from '@playwright/test';

test('🖼️ Visual regression: Login page UI stays consistent', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.waitForTimeout(3000); // Wait for any animations or images to load
  expect(await page.screenshot()).toMatchSnapshot('orangehrm-login-page.png');
});
