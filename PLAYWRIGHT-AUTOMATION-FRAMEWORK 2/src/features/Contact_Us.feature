Feature: Webdriveruniversity.com - Contact Us Page

Scenario: Valid Contact Us Form Submission

Given I navigate to the webdriveruniversity homepage
When I click on the contact us button
And I type a first name
Then I should be presented with a successful contact us submission message