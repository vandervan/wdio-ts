import AuthorizationPage from '../pageobjects/authorization.page'

describe('User', () => {
    it('should auth with valid creds', () => {
        AuthorizationPage.open()
        AuthorizationPage.authorization('standard_user', 'secret_sauce')
        AuthorizationPage.isAuthorized()
    });

    it('should not auth with invalid creds', () => {
        AuthorizationPage.open()
        AuthorizationPage.authorization('standard_user', 'fail_pass')
        AuthorizationPage.errorIsDisplayed()
        AuthorizationPage.findAndCloseError()
    });
});


