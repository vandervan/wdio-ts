import LandingPage from '../pageobjects/landing.page'

describe('Everhour landing', () => {
    it('should have all valid links', () => {
        LandingPage.open()
        LandingPage.linksAmount()
        LandingPage.allLinksIsClickable()
        LandingPage.clickEmAll()
    });
});


