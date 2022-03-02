///<reference types="cypress"/>

export class Signup {
  signupPage() {
    cy.get(":nth-child(3) > .nav-link").click();
  }
  urlVeri() {
    cy.url().should("include", "/register");
  }
  enterUserName(username) {
    cy.get(":nth-child(1) > .form-control").type(username);
  }
  enterEmail(email) {
    cy.get(":nth-child(2) > .form-control").type(email);
  }
  enterPassword(password) {
    cy.get(":nth-child(3) > .form-control").type(password);
  }
  submitForm() {
    cy.get(".btn").click().wait(1000);
  }
}
