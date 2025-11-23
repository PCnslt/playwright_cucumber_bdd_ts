import { When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import {expect} from "@playwright/test"

When("I type a first name", async () => {
  // await page.pause();
  await pageFixture.page
    .getByRole("textbox", { name: "First Name" })
    .fill("Joe");
});

When("I type a last name", async () => {
  // await page.pause();
  await pageFixture.page
    .getByRole("textbox", { name: "Last Name" })
    .fill("Shmoe");
});

When("I enter an email address", async ()=> {
 await pageFixture.page.getByRole('textbox', { name: 'Email Address' }).fill("test@gtest.com");
 //getByRole('textbox', { name: 'Email Address' })
});

When("I type a comment", async ()=> {
  await pageFixture.page.getByRole('textbox', { name: 'Comments' }).fill("Playwright training.");
//getByRole('textbox', { name: 'Comments' })
});

When("I click on the submit button", async ()=> {

  // await pageFixture.page.waitForSelector("CSS");
  // await pageFixture.page.click("CSS");
  await pageFixture.page.getByRole('button', { name: 'SUBMIT' }).click();
//getByRole('button', { name: 'SUBMIT' })
});

Then(
  "I should be presented with a successful contact us submission message",
  async () => {
    //waiting for header text element
    await pageFixture.page.waitForSelector("#contact_reply h1",{timeout:60000})
    
    //get the text from the h1 element
    const text = await pageFixture.page.innerText("#contact_reply h1");
  
    expect(text).toContain("Thank You")

    await pageFixture.page.pause();
  
  }
);
