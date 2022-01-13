import {LoginButton, LoginWithPasswordButton, PasswordField, UsernameField} from "../locators/auth-page.locators";

export class AuthPage {
  public async open(): Promise<string> {
    return browser.url('https://student.skyeng.ru/home');
  }

  public async login(username: string, password: string): Promise<void> {
    await this.clickLoginWithPassword();
    await this.fillUsernameField(username);
    await this.fillPasswordField(password);
    await this.clickLoginButton();
  }

  private async clickLoginWithPassword(): Promise<void> {
    await new LoginWithPasswordButton().locator.click();
  }

  private async fillUsernameField(username: string): Promise<void> {
    await new UsernameField().locator.setValue(username);
  }

  private async fillPasswordField(password: string): Promise<void> {
    await new PasswordField().locator.setValue(password);
  }

  private async clickLoginButton(): Promise<void> {
    await new LoginButton().locator.click();
  }
}

export default new AuthPage();
