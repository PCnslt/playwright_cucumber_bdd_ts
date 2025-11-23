import { Page } from 'playwright';

export class Helpers {
  static async waitForNavigation(page: Page): Promise<void> {
    await page.waitForLoadState('networkidle');
  }

  static async takeScreenshot(page: Page, name: string): Promise<void> {
    await page.screenshot({ path: `reports/screenshots/${name}-${Date.now()}.png` });
  }

  static async waitForElement(page: Page, selector: string, timeout = 30000): Promise<void> {
    await page.waitForSelector(selector, { timeout });
  }

  static async waitForTimeout(timeout: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, timeout));
  }

  static generateRandomEmail(): string {
    return `test${Date.now()}@example.com`;
  }

  static generateRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
