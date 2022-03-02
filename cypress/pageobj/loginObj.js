import { Login } from "../pages/login";

const login = new Login();

import user from "../fixtures/user.json";
export function loginUser() {
  login.clickSign();
  login.enterEmail(user.email);
  login.enterPassword(user.password);
  login.formSubmit();
}
