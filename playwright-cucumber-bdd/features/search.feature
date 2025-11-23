Feature: Product Search and Filter
  As a customer
  I want to search and filter products
  So that I can find the items I'm looking for

  Background:
    Given I am logged in as "standard_user"
    And I am on the products page

  Scenario: Search for a specific product
    When I search for "Sauce Labs Backpack"
    Then I should see search results containing "Sauce Labs Backpack"

  Scenario: Filter products by price (low to high)
    When I sort products by "Price (low to high)"
    Then the products should be sorted by price in ascending order

  Scenario: Filter products by name (Z to A)
    When I sort products by "Name (Z to A)"
    Then the products should be sorted by name in descending order

  Scenario: Add product to cart from search results
    When I search for "Sauce Labs Bolt T-Shirt"
    And I add the first product to cart
    Then the cart badge should show "1"
    And I should see "Sauce Labs Bolt T-Shirt" in the cart
