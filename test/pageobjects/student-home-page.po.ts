import Page from './page';
import { Block } from '../locators/types/block';
import { Button } from '../locators/types/button';

class StudentHomePage extends Page {
  async switchToProduct(productName: string): Promise<void> {
    await new Block($('adults-shared-product-switcher-list'), 'Product switcher').waitUntilElementIsVisible();
    switch (productName) {
      case 'english':
        await new Button($(`adults-shared-product-switcher-item .-english`), `Product switcher "English"`).click();
        break;

      default:
        throw new Error('error');
    }
  }

  async openBalancePage(): Promise<void> {
    await new Button($('studcab-layout-balance button'), 'Balance page button').click();
  }

  async checkRUInstallmentByLessonAmount(amount: number, isVisible: boolean): Promise<void> {
    const locator = new Block(
      $(`//*[contains(text(), "Русскоязычный")]/..//*[contains(text(), " ${amount.toString()}")]/../..//*[contains(@class, "credit")]`),
    );
    if (isVisible) {
      await locator.waitUntilElementIsVisible();
      return;
    }
    await locator.waitUntilElementIsInvisible();
  }

  async checkENGInstallmentByLessonAmount(amount: number, isVisible: boolean): Promise<void> {
    const locator = new Block(
      $(`//*[contains(text(), "Англоязычный")]/..//*[contains(text(), " ${amount.toString()}")]/../..//*[contains(@class, "credit")]`),
    );
    if (isVisible) {
      await locator.waitUntilElementIsVisible();
      return;
    }
    await locator.waitUntilElementIsInvisible();
  }

  async checkTalksInstallment(isVisible: boolean): Promise<void> {
    const locator = new Block($(`//*[@data-spec-id="talks-price-package"]//*[contains(text(), "В рассрочку")]`));
    if (isVisible) {
      await locator.waitUntilElementIsVisible();
      return;
    }
    await locator.waitUntilElementIsInvisible();
  }
}

export default new StudentHomePage();
