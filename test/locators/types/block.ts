import { ChainablePromiseElement } from 'webdriverio';

export class Block {
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

  async waitUntilElementIsVisible(): Promise<void> {
    await this.locator.waitForDisplayed({ timeoutMsg: `${this.name} is not visible` });
  }

  async waitUntilElementIsInvisible(): Promise<void> {
    await this.locator.waitForDisplayed({ timeoutMsg: `${this.name} is still visible`, reverse: true });
  }

  async waitUntilElementIsPresent(): Promise<void> {
    await this.locator.waitForExist({ timeoutMsg: `${this.name} is not present` });
  }
}
