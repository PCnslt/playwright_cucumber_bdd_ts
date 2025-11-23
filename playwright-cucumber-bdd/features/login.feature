Feature: Login functionality
  As a user
  I want to login to the application
  So that I can access my account

  Background:
    Given I am on the login page

  Scenario: Successful login with valid credentials
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page
    And I should see the products page

  Scenario: Failed login with invalid credentials
    When I enter username "invalid_user"
    And I enter password "wrong_password"
    And I click the login button
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"

  Scenario Outline: Login with different user types
    When I enter username "<username>"
    And I enter password "<password>"
    And I click the login button
    Then I should see "<expected_result>"

    Examples:
      | username        | password       | expected_result                     |
      | standard_user   | secret_sauce   | products page                       |
      | locked_out_user | secret_sauce   | error message for locked out user   |
      | problem_user    | secret_sauce   | products page                       |
      | performance_glitch_user | secret_sauce | products page               |
