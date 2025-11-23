# Playwright TypeScript Cucumber BDD Framework

A complete Behavior-Driven Development (BDD) testing framework using Playwright, TypeScript, and Cucumber.

## Features

- 🚀 **Playwright** for fast and reliable browser automation
- 📝 **TypeScript** for type safety and better development experience
- 🥒 **Cucumber** for BDD with Gherkin syntax
- 📊 **Multiple reporters** (HTML, JSON, JUnit)
- 🖼️ **Screenshot on failure**
- 🔄 **Parallel test execution**
- 🏗️ **Page Object Model** design pattern
- 📱 **Cross-browser testing** support

## Project Structure

```
playwright-cucumber-bdd/
├── features/                    # Feature files
│   ├── step-definitions/       # Step definitions
│   └── support/               # Hooks and world setup
├── pages/                     # Page Object classes
├── utils/                     # Helper functions
├── config/                    # Configuration files
├── reports/                   # Test reports
└── test-results/              # Test artifacts
```

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

3. **Run tests:**
   ```bash
   npm test
   ```

## Available Scripts

- `npm test` - Run all tests
- `npm run test:headed` - Run tests in headed mode
- `npm run test:debug` - Run tests in debug mode
- `npm run test:parallel` - Run tests in parallel
- `npm run report` - Open HTML test report
- `npm run clean` - Clean up generated files

## Writing Tests

### Feature Files
Create `.feature` files in the `features/` directory using Gherkin syntax:

```gherkin
Feature: Login functionality
  As a user
  I want to login to the application
  So that I can access my account

  Scenario: Successful login
    Given I am on the login page
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should see the products page
```

### Step Definitions
Implement step definitions in TypeScript:

```typescript
import { Given, When, Then } from '@cucumber/cucumber';

Given('I am on the login page', async function () {
  await this.loginPage.navigateToLoginPage();
});
```

### Page Objects
Create page objects to encapsulate page interactions:

```typescript
export class LoginPage {
  readonly usernameInput = '[data-test="username"]';

  async enterUsername(username: string): Promise<void> {
    await this.page.fill(this.usernameInput, username);
  }
}
```

## Configuration

### Environment Setup
The framework supports multiple environments (development, staging, production). Set the `NODE_ENV` environment variable to switch between them.

### Browser Configuration
Configure browsers and viewport settings in `playwright.config.ts`.

### Cucumber Options
Modify Cucumber settings in `cucumber.js`.

## Reporting

The framework generates multiple report formats:
- **HTML Report**: `reports/html/`
- **JSON Report**: `reports/json/`
- **JUnit Report**: `reports/junit/`
- **Cucumber Report**: `reports/cucumber/`

View the HTML report with:
```bash
npm run report
```

## Best Practices

1. **Use Page Object Model** to encapsulate page interactions
2. **Write descriptive feature files** that business stakeholders can understand
3. **Keep step definitions focused** on single responsibilities
4. **Use data tables and scenario outlines** for data-driven testing
5. **Implement proper error handling** and cleanup in hooks
6. **Use TypeScript interfaces** for type safety

## Troubleshooting

### Common Issues

1. **TypeScript errors**: Run `npm install` to ensure all dependencies are installed
2. **Browser not launching**: Run `npx playwright install` to install browsers
3. **Step definitions not found**: Check that step definition files are in the correct directory and properly exported

### Debugging

- Use `npm run test:debug` for debugging
- Screenshots are automatically captured on test failures
- Check browser console logs in the test reports

## Contributing

1. Follow the existing code style and structure
2. Write tests for new functionality
3. Update documentation when adding features
4. Ensure all tests pass before submitting changes
