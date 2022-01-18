import { ChainablePromiseElement } from 'webdriverio';

export class Input {
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

  async fill(text: string): Promise<void> {
    await this.locator.waitForDisplayed({ timeoutMsg: `${this.name} is not visible` });
    await this.locator.clearValue();
    return this.locator.setValue(text);
  }
}
