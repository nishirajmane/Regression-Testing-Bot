// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true, // ✅ Set to true for CI
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    baseURL: 'https://demo.applitools.com',
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
