import { HomePage } from "../pages/homePage";

const homePage = new HomePage();

export function visitHomePage(url) {
  homePage.homePage(url);
}
