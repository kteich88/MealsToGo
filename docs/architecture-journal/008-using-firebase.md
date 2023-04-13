# ADR 010: Using Firebase Auth & Firestore

2 March 2023

## Context

The Good Eats application will require authentication of users and a database to store user information (recipes, ingredients, meal plans). A solution that offers both authentication and data storage would be optimal. The Firebase Console was recommended for it's simplicity and ease of use. It also offered both authentication and data storage using one system.

## Decision

 - We will use Firebase Auth to authenticate Users.
 - We will use Firestore as a database for storing application data.

## Status

Accepted

## Consequences

Billing could be applied if we exceed to free tier amount.



 

