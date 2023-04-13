# ADR 003: Using Functional Components

12 April 2023

## Context

There are multiple ways to build out React Components. The more modern approach uses functional Components over Classes. Functional components are plain JSX while Class based components extend `React.Component` requiring a render method in order to return JSX. React Hooks simplify managing state in functional components, whereas Class based components require a constructor to manage state. Using functional Components helps to keep our components pure, which React documentation explains in further details here: [Why does React care about purity](https://react.dev/learn/keeping-components-pure#why-does-react-care-about-purity). 

## Decision

We will use functional components to build out our React Native Expo application features.

## Status

Accepted.

## Consequences

Functional components do not extend `React.Component` so it is important so handle lifecycle hooks appropriately and to not misuse `useEffect`.  
