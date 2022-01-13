import {ChainablePromiseElement} from "webdriverio";

export class ProductSwitcher {
  name = 'Product switcher';
  locator: ChainablePromiseElement<Promise<WebdriverIO.Element>> = $('adults-shared-product-switcher-list');
}
