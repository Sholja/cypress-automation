// **************************************************************
// Here are some common functions that you will use through
// testing the app

// For example login on the app, you don't want to repeat
// the login every time, instead make the function and re-use it
// ***************************************************************

import { LOGIN_FIELDS } from '../constants/index';

// here is an example of the login function that
// would be used in "beforeEach" of every test
export const loginUser = (email, password) => {
  cy.visit(`${Cypress.config().baseUrl}/login`)
    .get(`[name="${LOGIN_FIELDS.email}"]`)
    .type(email)
    .get(`[name="${LOGIN_FIELDS.password}"]`)
    .type(password)
    .contains('button', 'Login')
    .click();
};
