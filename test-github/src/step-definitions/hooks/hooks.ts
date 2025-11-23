import {BeforeAll, AfterAll, Before, After} from "@cucumber/cucumber"
import {Browser, chromium} from "@playwright/test"
import {pageFixture} from "./browserContextFixture"

let browser: Browser;

BeforeAll(async function(){
console.log("Starting Execution.....")
})

AfterAll(async function(){
    console.log("Finished Execution.....")
})

Before(async function(){
    browser = await chromium.launch({headless:false});
    pageFixture.context = await browser.newContext({viewport:{width:1920,height:1000}});
    pageFixture.page = await pageFixture.context.newPage();
})
After(async function(){
    
})