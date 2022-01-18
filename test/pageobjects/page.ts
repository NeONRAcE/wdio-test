export default class Page {
  async checkUrl(url: string): Promise<void> {
    await expect(browser).toHaveUrl(url);
  }

  async open(url: string): Promise<string> {
    return browser.url(url);
  }
}
