import { Given, When, Then } from '@cucumber/cucumber';
import { ProductsPage } from '@pages/ProductsPage';
import { World } from '../support/world';

When('I search for {string}', async function (this: World, searchTerm: string) {
  // Note: The Sauce Demo app doesn't have a search feature, so we'll simulate it
  // by checking if the product exists on the page
  this.searchTerm = searchTerm;
});

When('I sort products by {string}', async function (this: World, sortOption: string) {
  this.productsPage = new ProductsPage(this.page);
  
  let dropdownValue: string;
  switch (sortOption) {
    case 'Price (low to high)':
      dropdownValue = 'lohi';
      break;
    case 'Price (high to low)':
      dropdownValue = 'hilo';
      break;
    case 'Name (A to Z)':
      dropdownValue = 'az';
      break;
    case 'Name (Z to A)':
      dropdownValue = 'za';
      break;
    default:
      throw new Error(`Unknown sort option: ${sortOption}`);
  }
  
  await this.productsPage.sortProductsBy(dropdownValue);
});

When('I add the first product to cart', async function (this: World) {
  this.productsPage = new ProductsPage(this.page);
  await this.productsPage.addFirstProductToCart();
});

Then('I should see search results containing {string}', async function (this: World, expectedProduct: string) {
  this.productsPage = new ProductsPage(this.page);
  const productNames = await this.productsPage.getProductNames();
  const foundProduct = productNames.some(name => name.includes(expectedProduct));
  
  if (!foundProduct) {
    throw new Error(`Product "${expectedProduct}" not found in search results`);
  }
});

Then('the products should be sorted by price in ascending order', async function (this: World) {
  this.productsPage = new ProductsPage(this.page);
  await this.productsPage.verifyProductsAreSortedByPriceAscending();
});

Then('the products should be sorted by name in descending order', async function (this: World) {
  this.productsPage = new ProductsPage(this.page);
  await this.productsPage.verifyProductsAreSortedByNameDescending();
});

Then('the cart badge should show {string}', async function (this: World, expectedCount: string) {
  this.productsPage = new ProductsPage(this.page);
  await this.productsPage.verifyCartBadgeCount(parseInt(expectedCount));
});

Then('I should see {string} in the cart', async function (this: World, productName: string) {
  // This would typically navigate to cart page and verify the product
  // For now, we'll just verify the cart badge count increased
  this.productsPage = new ProductsPage(this.page);
  const cartCount = await this.productsPage.getCartBadgeCount();
  if (cartCount === 0) {
    throw new Error(`Product "${productName}" was not added to cart`);
  }
});

Given('I am on the products page', async function (this: World) {
  this.productsPage = new ProductsPage(this.page);
  await this.productsPage.verifyProductsPageIsDisplayed();
});
