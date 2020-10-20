# Cypress & Cucumber Demo

An example setup of Cucumber feature files running with Cypress.

## Getting Started

After cloning the project, run `yarn install`.

## Running Tests

```
yarn test
```

Cypress should inisialise a new instance of Chrome and run the Google example tests.

## Results

An array of different results show various outcomes:

- A test that asserts against the Google page title will pass.
- A similar test that asserts incorrectly against the Google page title will fail.
- A test attempting to navigate to a URL that is not defined in mappings will fail.
