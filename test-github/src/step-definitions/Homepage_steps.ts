import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
// import {Browser, chromium, Page} from "@playwright/test"

// let browser: Browser;
// let context: any;
// let page: Page;

Given("I am on the Google homepage", async () => {

    //   browser = await chromium.launch({headless:false});
    // context = await browser.newContext({viewport:{width:1920,height:1000}});
    // page = await context.newPage();

  await pageFixture.page.goto("https://www.google.com");
});

When("I enter a search term", async () => {});

When("I click on Submit", async () => {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("I should see search results", async () => {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
