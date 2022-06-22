# Plan Of Attack
## Setup some configurations for better coding style
- Add Prettier configuration file for **readable codebase**.
- Setup Huskey to improve **robustness** by checking coding style before every commit.

## Refactor the project structure
- Revamp the project structure for **maintainability and reusability**.
- Separte `AccountSettings` component into smaller components.\
  By following best practices, the number of lines of each component shouldn't be greater than 200.\
  They should be
  - Profile
  - Account
    - Permissions
    - ChangePassword
  - Users
- Above seperated components shouldn't be showed on the same page. 

## Beautify UI with MUI.
- Depends on the fact that you don't have a designer, I will use MUI.\
  The other choices should be
  - Ant Design
  - Chakra UI
  - Tailwind CSS
  - Vanillia Bootstrap

## Provide good UX
- Add notifications for every action. Will use Snackbar of MUI.
- Add ThemeProvider so that end users can use several themes.

## Automate QA
- Add unit test cases using Jest.
- Add e2e test cases using Cypress or Playwright. (TBH, I'm not familiar with Playwright)
