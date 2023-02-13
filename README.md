# GoodEats

GoodEats is a React Native Expo app. [Expo](https://docs.expo.dev/introduction/expo/) is an open source platform for making universal native apps for Android, iOS and the Web using [TypeScript](https://www.typescriptlang.org/docs/) and [React](https://reactnative.dev/docs/getting-started).

## Getting Started

You will need:

- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- [NodeJS](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/getting-started)

### Project Dependencies

Refer to [Expo's Installation Guide](https://docs.expo.dev/get-started/installation/) for compatible project dependencies.

### Installation

This project uses yarn as it's package manager. DO NOT use npm or you may end up with package version mix-ups and incompatibilities. Run the following command in your terminal to install project dependencies.

```bash
$ yarn
```

### Application Build

React Native supports iOS and Android development. To build/run the app using an iOS emulator, use the command `expo run:ios`. To build/run the app using an Android emulator, use the command `expo run:ios`.

**NOTE:** This project can not be run via the `expo start` command due to some project dependency limitations. Always run the build and install it on a physical device or run the app in an emulator.

## File Structure

### Components

The building blocks of our app. Components are reusable and generic, following [ReactJS](https://reactjs.org/docs/components-and-props.html) component best practices and standards.

### Contexts

React Contexts provide a means to pass data through the component tree without having to pass props down manually at every level. Refer to [React Context](https://reactjs.org/docs/context.html) Documentation for more information.

### Hooks

The new way for managing state without writing a Class. Refer to [React Hooks](https://reactjs.org/docs/hooks-intro.html) Documentation for more details.

### Infrastructure

React Native [navigation](https://reactnavigation.org/docs/getting-started/) and standardized themes are organized here. Refer to [React Native Stylesheet](https://reactnative.dev/docs/stylesheet) Documentation for more information on how to apply styles to React Native components.

### Screens

The main features of our app. Each screen may have it's own set of styles or rely on global styling. There may also be multiple related views under one common folder.

### Services

Firestore properties, types, and configuration to integrate the app with Firebase. The data directory is used for local data references.

### Types

Application type definitions.

### Utils

Helper functions.

## Additional Tooling

This project uses **TypeScript**, **ESLint** and **Prettier** to enhance code quality. Configuration details for each can be found in the `tsconfig.json`, `.eslintrc`, `.prettierrc` files respectively.
