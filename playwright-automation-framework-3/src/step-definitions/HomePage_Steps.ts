import {Given, When, Then} from "@cucumber/cucumber"
import {pageFixture} from "./hooks/browserContextFixture"

const url= "https://webdriveruniversity.com/";

Given("I navigate to the webdriveruniversity homepage",  async ()=> {


  //Access URL
  await pageFixture.page.goto(url);
});

When("I click on the contact us button", async ()=> {
  // await page.pause();
  const contactUs_Button = await pageFixture.page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
  await contactUs_Button.click();
});

When("I switch to the new page", async ()=>{
  //  pageFixture.page = await pageFixture.context.waitForEvent("page");
  //  await pageFixture.page.bringToFront();

  await pageFixture.context.waitForEvent("page");
  //Retrieve all current open pages (tabs)
  const allPages = await pageFixture.context.pages();

  //Assign the most recent tab to pageFixture.page
  pageFixture.page = allPages[allPages.length-1];

  //Bring the newly assigned tab to the front (Make it active)
  await pageFixture.page.bringToFront();

  //Ensure the newly assigned tab is also maximized.
  await pageFixture.page.setViewportSize({width:1920, height:1000})
});




