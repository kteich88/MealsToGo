# ADR 007: EAS as a Build Pipeline

12 April 2023

## Context

[EAS](https://expo.dev/eas) - Expo Application Services - is a build service that offers free application builds for React Native and React Native Expo applications. EAS can be configured to set up with the App stores for both Android and iOS. The most useful resource EAS provides with its builds is a QR code which can easily be used to download the app to ones own personal device.

## Decision

We will use the EAS build pipeline to create iOS and Android builds for the React Native Expo app.

## Status

Accepted

## Consequences

EAS builds provide an easy method to install project applications via scanning QR codes with the Expo Go App. As the decision was made to use EAS for our build pipeline, we will be limited to the amount of builds and build times associated with the "Free Plan". 

