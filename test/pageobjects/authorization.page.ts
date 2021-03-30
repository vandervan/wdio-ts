import { expect } from 'chai';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AuthorizationPage extends Page {

    /**
     * define selectors using getter methods
     */
    get login () { return $("[data-test='username']") }
    get password () { return $("[data-test='password']") }
    get submit() { return $('#login-button') }
    get error() { return $("[data-test='error']") }
    get closeErrorBtn() { return $('button.error-button') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    authorization(username: string, password: string) {
        this.login.setValue(username)
        this.password.setValue(password)
        this.submit.click()
    }

    isAuthorized() {
        let authorizedPageUrl: string = browser.getUrl()
        expect(authorizedPageUrl).to.include('/inventory.html')
    }

    errorIsDisplayed() {
        this.error.isDisplayed()
    }

    findAndCloseError() {
        const actualText: string = this.error.getText()
        const errorText: string = 'Epic sadface: Username and password do not match any user in this service'
        expect(actualText.includes(errorText))
        this.closeErrorBtn.click()
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new AuthorizationPage();
