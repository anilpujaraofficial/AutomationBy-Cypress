///<reference types="cypress"/>

export class HomePage {
  homePage(url) {
    cy.visit(url);
    cy.url().should("include", "react-redux.realworld.io");
  }
}
