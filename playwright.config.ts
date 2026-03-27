import { defineConfig } from "playwright/test";

export default defineConfig({
  testDir: './tests',
  reporter: "html",
  maxFailures: 1,
  timeout: 60000,

  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure"
  },

  projects: [{
    name: "chromium",
    use: {
      browserName: 'chromium',
      launchOptions: {
        args: ['--start-maximize'],
      },
      viewport: null
    }
  }]
})
