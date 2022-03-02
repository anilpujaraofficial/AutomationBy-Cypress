///<reference types="cypress"/>

import { visitHomePage } from "../pageobj/homePageObj";
import { loginUser } from "../pageobj/loginObj";
import { signupUser } from "../pageobj/signupObj";

describe("Sign Up and Login", () => {
  before(() => {
    visitHomePage("https://react-redux.realworld.io/");
    cy.viewport("macbook-13");
  });
  it("Sign Up", () => {
    signupUser();
  });
  it.only("Login", () => {
    loginUser();
  });
});
