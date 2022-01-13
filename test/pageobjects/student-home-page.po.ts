import Page from "./page";
import {ProductSwitcher} from "../locators/student-home-page.locators";

export class StudentHomePage extends Page {
  open() {
    return super.open('asd');
  }

  async waitForProductSwitcher() {
    await new ProductSwitcher().locator.waitForDisplayed();
  }
}
