import AuthPage from '../pageobjects/auth.po';
import AdultsLandingPage from '../pageobjects/adults-landing.po';

describe('Adults landing', () => {
  beforeAll(async () => {
    await AdultsLandingPage.open();
    await AuthPage.login('testmecha579@yandex.ru', 'password');
  });

  it('Check installment blocks at payment page #ADULT-3', async () => {
    await AdultsLandingPage.checkIntroTitle();
    await AdultsLandingPage.checkIntroButton();

    await AdultsLandingPage.checkOrderTitle();
    await AdultsLandingPage.checkOrderButton();

    await AdultsLandingPage.checkProgressOrderTitle();
    await AdultsLandingPage.checkProgressOrderButton();

    await AdultsLandingPage.checkTalkingOrderTitle();
    await AdultsLandingPage.checkTalkingOrderButton();

    await AdultsLandingPage.checkLastOrderTitle();
    await AdultsLandingPage.checkLastOrderButton();
  });

  it('Check intro block #ADULT-4', async () => {
    await AdultsLandingPage.clickIntroButton();
    await AdultsLandingPage.checkAddStudentButton();
    await AdultsLandingPage.clickCloseButton();
    await AdultsLandingPage.checkIntroButton();
  });

  it('Check order block #ADULT-5', async () => {
    await AdultsLandingPage.clickOrderButton();
    await AdultsLandingPage.checkAddStudentButton();
    await AdultsLandingPage.clickCloseButton();
    await AdultsLandingPage.checkOrderButton();
  });

  it('Check progress block #ADULT-6', async () => {
    await AdultsLandingPage.clickProgressOrderButton();
    await AdultsLandingPage.checkAddStudentButton();
    await AdultsLandingPage.clickCloseButton();
    await AdultsLandingPage.checkProgressOrderButton();
  });

  it('Check talking block #ADULT-7', async () => {
    await AdultsLandingPage.clickTalkingOrderButton();
    await AdultsLandingPage.checkAddStudentButton();
    await AdultsLandingPage.clickCloseButton();
    await AdultsLandingPage.checkTalkingOrderButton();
  });

  it('Check last order block #ADULT-8', async () => {
    await AdultsLandingPage.clickLastOrderButton();
    await AdultsLandingPage.checkAddStudentButton();
    await AdultsLandingPage.clickCloseButton();
    await AdultsLandingPage.checkLastOrderButton();
  });
});
