import { Button } from '../locators/types/button';
import { Input } from '../locators/types/input';
import Page from './page';

export class AuthPage extends Page {
  async open(): Promise<string> {
    return super.open('https://student.skyeng.ru/home');
  }

  async login(username: string, password: string): Promise<void> {
    await this.clickLoginWithPassword();
    await this.fillUsernameField(username);
    await this.fillPasswordField(password);
    await this.clickLoginButton();
  }

  private async clickLoginWithPassword(): Promise<void> {
    await new Button($('[class*="js-phone-form-to-username-password"]'), 'Login with password button').click();
  }

  private async fillUsernameField(username: string): Promise<void> {
    await new Input($('[name="username"]'), 'Username field').fill(username);
  }

  private async fillPasswordField(password: string): Promise<void> {
    await new Input($('[type="password"]'), 'Password field').fill(password);
  }

  private async clickLoginButton(): Promise<void> {
    await new Button($('button .js-username-password-form-button')).click();
  }
}

export default new AuthPage();
