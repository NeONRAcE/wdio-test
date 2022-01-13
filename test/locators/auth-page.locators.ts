import {ChainablePromiseElement} from "webdriverio";

export class LoginWithPasswordButton {
  name = 'Login with password button';
  locator: ChainablePromiseElement<Promise<WebdriverIO.Element>> = $('[class*="js-phone-form-to-username-password"]');
}

export class UsernameField {
  name = 'Username field';
  locator: ChainablePromiseElement<Promise<WebdriverIO.Element>> = $('[name="username"]');
}

export class PasswordField {
  name = 'Password field';
  locator: ChainablePromiseElement<Promise<WebdriverIO.Element>> = $('[type="password"]');
}

export class LoginButton {
  name = 'Login button';
  locator: ChainablePromiseElement<Promise<WebdriverIO.Element>> = $('button .js-username-password-form-button');
}
