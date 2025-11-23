import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { LoginPage } from '@pages/LoginPage';
import { ProductsPage } from '@pages/ProductsPage';
import { CustomWorld } from '../support/world';

Given('I am on the login page', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page!);
  await this.loginPage.navigateToLoginPage();
});

When('I enter username {string}', async function (this: CustomWorld, username: string) {
  await this.loginPage!.enterUsername(username);
});

When('I enter password {string}', async function (this: CustomWorld, password: string) {
  await this.loginPage!.enterPassword(password);
});

When('I click the login button', async function (this: CustomWorld) {
  await this.loginPage!.clickLoginButton();
});

Then('I should be redirected to the inventory page', async function (this: CustomWorld) {
  this.productsPage = new ProductsPage(this.page!);
  await this.productsPage.verifyProductsPageIsDisplayed();
});

Then('I should see the products page', async function (this: CustomWorld) {
  await this.productsPage!.verifyProductsPageIsDisplayed();
});

Then('I should see an error message {string}', async function (this: CustomWorld, expectedMessage: string) {
  await this.loginPage!.verifyErrorMessage(expectedMessage);
});

Given('I am logged in as {string}', async function (this: CustomWorld, username: string) {
  this.loginPage = new LoginPage(this.page!);
  this.productsPage = new ProductsPage(this.page!);
  
  await this.loginPage.navigateToLoginPage();
  await this.loginPage.login(username, 'secret_sauce');
  await this.productsPage.verifyProductsPageIsDisplayed();
});

Then('I should see {string}', async function (this: CustomWorld, expectedResult: string) {
  if (expectedResult === 'products page') {
    await this.productsPage!.verifyProductsPageIsDisplayed();
  } else if (expectedResult.includes('error message')) {
    // For locked out user scenario
    await this.loginPage!.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
  }
