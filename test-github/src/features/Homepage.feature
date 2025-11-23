Feature: Google homepage

Scenario: Test Search functionality

Given I am on the Google homepage
When I enter a search term
And I click on Submit
Then I should see search results