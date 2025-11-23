import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { CustomWorld } from './world';

let browser: Browser;

BeforeAll(async function () {
  console.log('Launching browser...');
  browser = await chromium.launch({
    headless: true,
    slowMo: 0,
  });
});

Before(async function (this: CustomWorld) {
  console.log('Creating new browser context and page...');
  this.context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  });

  this.page = await this.context.newPage();

  // Set default timeout
  this.page.setDefaultTimeout(30000);
  this.page.setDefaultNavigationTimeout(30000);
});

After(async function (this: CustomWorld) {
  console.log('Closing browser context...');
  
  // Take screenshot on failure
  if (this.page) {
    const screenshot = await this.page.screenshot();
    // Attach screenshot to the test report
    (this as any).attach(screenshot, 'image/png');
  }

  // Close context
  if (this.context) {
    await this.context.close();
  }
});

AfterAll(async function () {
  console.log('Closing browser...');
  if (browser) {
    await browser.close();
  }
});
