import { Page, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  // Locators
  readonly productContainer = '.inventory_item';
  readonly productName = '.inventory_item_name';
  readonly productPrice = '.inventory_item_price';
  readonly addToCartButton = 'button.btn_inventory';
  readonly cartBadge = '.shopping_cart_badge';
  readonly sortDropdown = '[data-test="product_sort_container"]';
  readonly cartLink = '.shopping_cart_link';

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductsPageIsDisplayed(): Promise<void> {
    await expect(this.page.locator(this.productContainer).first()).toBeVisible();
  }

  async getProductNames(): Promise<string[]> {
    const productElements = await this.page.locator(this.productName).all();
    const names: string[] = [];
    for (const element of productElements) {
      names.push(await element.textContent() || '');
    }
    return names;
  }

  async getProductPrices(): Promise<number[]> {
    const priceElements = await this.page.locator(this.productPrice).all();
    const prices: number[] = [];
    for (const element of priceElements) {
      const priceText = await element.textContent() || '';
      const price = parseFloat(priceText.replace('$', ''));
      prices.push(price);
    }
    return prices;
  }

  async sortProductsBy(option: string): Promise<void> {
    await this.page.selectOption(this.sortDropdown, option);
  }

  async addProductToCart(productName: string): Promise<void> {
    const productLocator = this.page.locator(this.productContainer)
      .filter({ hasText: productName });
    await productLocator.locator(this.addToCartButton).click();
  }

  async addFirstProductToCart(): Promise<void> {
    await this.page.locator(this.addToCartButton).first().click();
  }

  async getCartBadgeCount(): Promise<number> {
    const badge = this.page.locator(this.cartBadge);
    if (await badge.isVisible()) {
      const countText = await badge.textContent();
      return parseInt(countText || '0');
    }
    return 0;
  }

  async verifyCartBadgeCount(expectedCount: number): Promise<void> {
    const actualCount = await this.getCartBadgeCount();
    expect(actualCount).toBe(expectedCount);
  }

  async clickCart(): Promise<void> {
    await this.page.click(this.cartLink);
  }

  async verifyProductsAreSortedByNameAscending(): Promise<void> {
    const names = await this.getProductNames();
    const sortedNames = [...names].sort();
    expect(names).toEqual(sortedNames);
  }

  async verifyProductsAreSortedByNameDescending(): Promise<void> {
    const names = await this.getProductNames();
    const sortedNames = [...names].sort().reverse();
    expect(names).toEqual(sortedNames);
  }

  async verifyProductsAreSortedByPriceAscending(): Promise<void> {
    const prices = await this.getProductPrices();
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);
  }

  async verifyProductsAreSortedByPriceDescending(): Promise<void> {
    const prices = await this.getProductPrices();
    const sortedPrices = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sortedPrices);
  }
}
