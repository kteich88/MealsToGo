# ADR 005: Using Eslint and Prettier

12 April 2023

## Context

[ESLint](https://eslint.org/docs/latest/use/getting-started) is a tool for identifying and reporting on patterns found in JavaScript code, with the goal of making application code more consistent by avoiding potential bugs. [Prettier](https://prettier.io/docs/en/index.html) is a code formatter that will conform spacing, quotation, annotation, et cetera, into consistent patterns for every file within the repository.  

If you are using VSCode there are plugins for these tools. See project workspace [extension](../../.vscode/extensions.json) recommendations.

## Decision

We will use eslint and prettier with extended `@react-native-community` linting rules to enforce consistent styling and avoid application errors.

## Status

Accepted.

## Consequences

It is important that everyone utilizes the settings established in our `.prettierrc` file to enforce consistent styles for our application code. Be sure to follow the [Editor Integration](https://prettier.io/docs/en/editors.html) documentation provided by Prettier in order to use the formatter correctly. 

As with unit tests, Eslint is run when an engineer executes the command `yarn lint`. Now that our Eslint rules have been established, keeping up with and continuing to run the linter is a must to ensure application code quality. 

