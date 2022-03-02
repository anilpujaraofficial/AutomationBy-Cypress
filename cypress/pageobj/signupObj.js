import { Signup } from "../pages/signup";
import faker from "@faker-js/faker";
const signup = new Signup();

export function signupUser() {
  let data = fakerData();
  signup.signupPage();
  signup.urlVeri();
  signup.enterUserName(data.fname);
  signup.enterEmail(data.email);
  signup.enterPassword(data.password);
  signup.submitForm();
}

function fakerData() {
  const user_info = {
    fname: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  cy.writeFile("cypress/fixtures/user.json", user_info);
  return user_info;
}
