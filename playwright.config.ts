// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 0,

  use: {
    headless: true, // ✅ Ideal for CI/CD
    screenshot: 'only-on-failure', // ✅ Only capture screenshots on failure
    video: 'retain-on-failure', // ✅ Useful for debugging failed UI tests
    trace: 'retain-on-failure', // ✅ Include this for step-by-step analysis
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    baseURL: 'https://demo.applitools.com', // ✅ Adjust as needed
  },

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // ✅ Prevent auto-opening
    ['list'] // ✅ Clear console output in GitHub Actions
  ],
});
