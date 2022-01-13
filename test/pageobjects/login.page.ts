import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#username');
    }

    public get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#password');
    }

    public get btnSubmit(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('button[type="submit"]');
    }

    public async login (username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public open(): Promise<string> {
        return super.open('login');
    }
}

export default new LoginPage();
