import Page from './page';
import { Block } from '../locators/types/block';
import { Button } from '../locators/types/button';

class AdultsLandingPage extends Page {
  async open(): Promise<string> {
    return super.open('https://student.skyeng.ru/landings/adults');
  }

  async checkIntroTitle(): Promise<void> {
    await new Block($('.intro-h1*=Прокачай английский в онлайн-школе Skyeng'), 'Intro title').waitUntilElementIsVisible();
  }

  async checkIntroButton(): Promise<void> {
    await new Button($('.intro-button'), 'Intro button').waitUntilElementIsVisible();
  }

  async clickIntroButton(): Promise<void> {
    await new Button($('.intro-button'), 'Intro button').click();
  }

  async clickCloseButton(): Promise<void> {
    await new Button($('.modal-cross-icon'), 'Close modal form button').click();
  }

  async checkAddStudentButton(): Promise<void> {
    await new Button($('.add-button'), 'Add student button').waitUntilElementIsVisible();
  }

  async checkOrderButton(): Promise<void> {
    await new Button($('.order-button'), 'Order button').waitUntilElementIsVisible();
  }

  async clickOrderButton(): Promise<void> {
    await new Button($('.order-button'), 'Order button').click();
  }

  async checkOrderTitle(): Promise<void> {
    await new Block(
      $('skysmart-english-adults-order:not(.--last)').$('.order-h3*=Записать ученика на бесплатный урок'),
      'Order title',
    ).waitUntilElementIsVisible();
  }

  async checkProgressOrderButton(): Promise<void> {
    await new Button($('.progress-button'), 'Progress order button').waitUntilElementIsVisible();
  }

  async clickProgressOrderButton(): Promise<void> {
    await new Button($('.progress-button'), 'Progress order button').click();
  }

  async checkProgressOrderTitle(): Promise<void> {
    await new Block($('.progress-note*=покажем, как проходит обучение, определим ваш уровень'), 'Progress order title').waitUntilElementIsPresent();
  }

  async checkTalkingOrderButton(): Promise<void> {
    await new Button($('.talking-button'), 'Talking order button').waitUntilElementIsVisible();
  }

  async clickTalkingOrderButton(): Promise<void> {
    await new Button($('.talking-button'), 'Talking order button').click();
  }

  async checkTalkingOrderTitle(): Promise<void> {
    await new Block($('.talking-txt*=Разговаривайте с учениками вашего уровня в видеочате'), 'Talking order title').waitUntilElementIsVisible();
  }

  async checkLastOrderButton(): Promise<void> {
    await new Button($('.--last .order-button'), 'Order button').waitUntilElementIsVisible();
  }

  async clickLastOrderButton(): Promise<void> {
    await new Button($('.--last .order-button'), 'Order button').waitUntilElementIsVisible();
  }

  async checkLastOrderTitle(): Promise<void> {
    await new Block($('.--last').$('.order-h3*=Записать ученика на бесплатный урок'), 'Order title').waitUntilElementIsVisible();
  }
}

export default new AdultsLandingPage();
