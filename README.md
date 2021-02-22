# Sarah's HealthSqyre Shopping Cart Coding Challenge Submission
A simple shopping cart application that includes, on the front-end, a product list and a shopping cart and, on the back-end, an API that includes a small set of common e-commerce endpoints.

## How to run the app

- Pull the repo
- Run `npm install`
- Run `npm run api` to start the backend api
- In another terminal, run `npm start` to start the React front end client

## How to run Cypress integration tests
- Have full stack app running
- Run `npm run test:cypress`; wait briefly as Cypress test runner spins up
- Click on shopping_cart.spec.js
- Tests will automatically run, and you can click around the test runner

## Technologies used

- React, via bootstrapped `create-react-app`
- Google's Material-UI for front end UI components and styling
- Node and Express for the api
- Cypress.io for integration tests

## Requirements completed
- [x] **REQUIREMENT 1:** On their first interaction, an end user should see the list of items from the test product list. 
- [x] **REQUIREMENT 2:** From here, the user should be able to:
    - Add individual items to the cart.
    - View their Cart (which will start with no items)
- [x] **REQUIREMENT 3:** From the Cart  user should be able to:
    - View all added items, including name & pricing 
    - View the total price across all items  
- [x] **BONUS**: Add ability for user to update item quantities in the cart
- [x] **BONUS**: Add ability for user to remove an item from the cart