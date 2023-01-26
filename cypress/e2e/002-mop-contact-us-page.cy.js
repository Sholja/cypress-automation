import { PAGES } from '../constants/index';
import { SELECTORS, FIELD_ERRORS, FIELD_VALUES } from '../constants/contact-us-page';

context('MoP contact us page', () => {
  describe('Testing the const us page on the MoP website', () => {
    it(`Loads the page with "Name" input`, () => {
      cy.visit(`${Cypress.config().baseUrl}${PAGES.contactUs}`)
        .get(`[${SELECTORS.fieldsSelector}="${SELECTORS.nameFieldSelector}"]`)
        .should('be.visible');
    });

    it(`Loads the page with "Email" input`, () => {
      cy.visit(`${Cypress.config().baseUrl}${PAGES.contactUs}`)
        .get(`[${SELECTORS.fieldsSelector}="${SELECTORS.emailFieldSelector}"]`)
        .should('be.visible');
    });

    it(`Loads the page with "Company" input`, () => {
      cy.visit(`${Cypress.config().baseUrl}${PAGES.contactUs}`)
        .get(`[${SELECTORS.fieldsSelector}="${SELECTORS.companyFieldSelector}"]`)
        .should('be.visible');
    });

    it(`Loads the page with "Message" input`, () => {
      cy.visit(`${Cypress.config().baseUrl}${PAGES.contactUs}`)
        .get(`[${SELECTORS.fieldsSelector}="${SELECTORS.nameFieldSelector}"]`)
        .should('be.visible');
    });

    it(`Displays the error that the name is required if not entered`, () => {
      cy.visit(`${Cypress.config().baseUrl}${PAGES.contactUs}`)
        .get(`[${SELECTORS.fieldsSelector}="${SELECTORS.submitButtonSelector}"]`)
        .click()
        .get('div')
        .contains(FIELD_ERRORS.nameRequiredError)
        .should('be.visible');
    });

    it(`Displays the input without the error when the value is entered`, () => {
      cy.visit(`${Cypress.config().baseUrl}${PAGES.contactUs}`)
        .get(`[${SELECTORS.fieldsSelector}="${SELECTORS.nameFieldSelector}"]`)
        .type(FIELD_VALUES.name)
        .get(`[${SELECTORS.fieldsSelector}="${SELECTORS.submitButtonSelector}"]`)
        .click()
        .get('div')
        .contains(FIELD_ERRORS.nameRequiredError)
        .should('not.exist');
    });

    // now you continue testing other fields that are required, are field errors displayed or not

    // in the end, submit the form, and test is everything OK
  });
});
