# ADR 004: Unit Testing with Jest and React Native Testing Library

12 April 2023

## Context

[Jest](https://jestjs.io/) and the [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) are well supported and most recommended for unit testing React Native applications.

## Decision

- We will use Jest, and React Native Testing Library for unit testing and component level testing.
- We will use the following patterns when unit testing:
    - describe <Component />
    - it ('renders text when...', 
- We will use `getByTestId` sparingly - for images or other elements that cannot be accessed via any other React Native Testing Library queries.

## Status

Accepted

## Consequences

Now that a unit testing pattern has been established, keeping up with and continuing to follow the agreed upon pattern is a must. 

