import { BASIC } from '../constants/first-page';

context('MoP base page', () => {
  describe('Testing the first page on the MoP website', () => {
    it(`Loads the page`, () => {
      cy.visit(Cypress.config().baseUrl).contains('span', BASIC.title).should('be.visible');
    });

    it(`Contains "Open positions" link in the header`, () => {
      cy.visit(Cypress.config().baseUrl).contains('a', BASIC.openPositionsLink).should('be.visible');
    });
  });
});
