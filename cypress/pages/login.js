///<reference types="cypress"/>

export class Login {
  clickSign() {
    cy.contains("Sign in").click();
  }

  enterEmail(email) {
    cy.get("input[type='email']").type(email);
  }
  enterPassword(psw) {
    cy.get("input[type='password']").type(psw);
  }
  formSubmit() {
    cy.get("button[type='submit']").click();
  }
}
