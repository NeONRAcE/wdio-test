import AuthPage from '../pageobjects/auth.po';
import AdultsLandingPage from '../pageobjects/adults-landing.po';

describe('Adults landing', () => {
  it('Check installment blocks at payment page', async () => {
    await AdultsLandingPage.open();
    await AuthPage.login('testmecha579@yandex.ru', 'password');

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
});
