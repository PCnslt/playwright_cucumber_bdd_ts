import {BeforeAll, AfterAll, After, Before} from "@cucumber/cucumber";
import {chromium, Browser} from "@playwright/test";
import {pageFixture} from "./browserContextFixture"

let browser:Browser;

BeforeAll(async function(){
    console.log("\nExecuting test suite...")
})

AfterAll(async function(){
    console.log("\nFinished executing test suite...")
})

Before(async function(){
  //Setup browser instance
  browser = await chromium.launch({headless: false});
  pageFixture.context = await browser.newContext({viewport:{width:1920, height:1000}});
  pageFixture.page = await pageFixture.context.newPage();
})

After(async function(){
    await pageFixture.page.close();
    await browser.close();
})