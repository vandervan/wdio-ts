import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {

    /**
     * define selectors using getter methods
     */
    get footerLinks () { return $$('footer :link') }
    get allLinks () { return $$(':link')}
    get visitedLinks() { return $$(':visited')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    linksAmount() {
        const footerLinksAmount = this.footerLinks.length
        const allLinksAmount = this.allLinks.length
        const visitedLinksAmount = this.visitedLinks.length
        console.log(`footerLinksAmount is ${footerLinksAmount}` + ` allLinksAmount is ${allLinksAmount}` + ` visitedLinksAmount is ${visitedLinksAmount}`)
    }

    allLinksIsClickable() {
        const allLinksArray = this.allLinks
        allLinksArray.forEach(link => link.isClickable())
    }

    clickEmAll() {
        const allLinksArray = this.allLinks
        allLinksArray.forEach(link => link.click())
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new LandingPage();
