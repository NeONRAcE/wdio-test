import AuthPage from '../pageobjects/auth.po';

describe('Test spec', () => {
  it('Test suite', async () => {
    await AuthPage.open();
    await AuthPage.login('testmecha579@yandex.ru', 'password!');
  });
});
