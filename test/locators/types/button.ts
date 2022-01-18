import { ChainablePromiseElement } from 'webdriverio';

export class Button {
  private readonly locator: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private readonly name: string;

  constructor(locator: ChainablePromiseElement<Promise<WebdriverIO.Element>>, name?: string) {
    this.locator = locator;
    this.name = `[${name}]`;
  }

  get getLocator(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return this.locator;
  }

  get getName(): string {
    return this.name;
  }

  async click(): Promise<void> {
    await this.locator.waitForClickable({ timeoutMsg: `${this.name} is not clickable` });
    return this.locator.click();
  }

  async waitUntilElementIsVisible(): Promise<void> {
    await this.locator.waitForDisplayed({ timeoutMsg: `${this.name} is not visible` });
  }
}
