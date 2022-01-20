import AuthPage from '../pageobjects/auth.po';
import StudentHomePage from '../pageobjects/student-home-page.po';

describe('Payment page - Eng adults', () => {
  it('Check installment blocks at payment page', async () => {
    await AuthPage.open();
    await AuthPage.login('testmecha579@yandex.ru', 'password');

    await StudentHomePage.switchToProduct('english');
    await StudentHomePage.openBalancePage();

    await StudentHomePage.checkRUInstallmentByLessonAmount(128, true);
    await StudentHomePage.checkRUInstallmentByLessonAmount(64, true);
    await StudentHomePage.checkRUInstallmentByLessonAmount(32, true);
    await StudentHomePage.checkRUInstallmentByLessonAmount(16, false);
    await StudentHomePage.checkRUInstallmentByLessonAmount(8, false);
    await StudentHomePage.checkRUInstallmentByLessonAmount(4, false);

    await StudentHomePage.checkENGInstallmentByLessonAmount(128, true);
    await StudentHomePage.checkENGInstallmentByLessonAmount(64, true);
    await StudentHomePage.checkENGInstallmentByLessonAmount(32, true);
    await StudentHomePage.checkENGInstallmentByLessonAmount(16, false);
    await StudentHomePage.checkENGInstallmentByLessonAmount(8, false);
    await StudentHomePage.checkENGInstallmentByLessonAmount(4, false);

    await StudentHomePage.checkTalksInstallment(false);
  });
});
