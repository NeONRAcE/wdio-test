import AuthPage from '../pageobjects/auth.po';
import StudentHomePage from '../pageobjects/student-home-page.po';

describe('Switch between adults products', () => {
  beforeEach(async () => {
    await AuthPage.open();
    await AuthPage.login('testmecha579@yandex.ru', 'password');
  });

  afterEach(async () => {
    await browser.clearSessionStorage();
    await browser.clearLocalStorage();
    await browser.deleteAllCookies();
    await browser.refresh();
  });

  it('Check talks page #ADULT-1', async () => {
    await StudentHomePage.switchToProduct('talks');
    await StudentHomePage.checkTalksWidget();
  });

  it('Check premium page #ADULT-1', async () => {
    await StudentHomePage.switchToProduct('premium');
    await StudentHomePage.checkPremiumWidget();
  });

  it('Check speaking page #ADULT-1', async () => {
    await StudentHomePage.switchToProduct('speaking');
    await StudentHomePage.checkSpeakingWidget();
  });
});
