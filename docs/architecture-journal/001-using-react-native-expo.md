# ADR 001: Using React Native Expo

12 April 2023

## Context

The decision to use React Native vs. React Native Expo is not as straight forward as it may seem. In some cases, using vanilla React Native is a better choice to avoid unnecessary packages, lower application size, and limit project dependencies. On the other hand, utilizing Expo and it's well supported plugins can enhance the feature set of your application with ease. 

## Decision

We will use React Native Expo (bare workflow).

## Status

Accepted

## Consequences

 We will be locked into Expo SDK supported packages, including a version or two behind the latest React Native release. 
 
 By using Expo's bare workflow, converting the project from using Expo CLI to React Native CLI, is possible.
