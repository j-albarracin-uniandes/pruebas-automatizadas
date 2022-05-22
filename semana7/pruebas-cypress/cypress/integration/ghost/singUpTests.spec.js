import gC from "./parameters.json";
const sel = gC.pages.selectors;
const req = gC.pages.requests;
const limits = gC.pages.limits;
const errors = gC.pages.errors;
context("Actions", () => {
  beforeEach(() => {
    cy.visit(gC.host_users);
  });

  const getIframeDocument = () => {
    return cy
    .get('iframe')
    .its('0.contentDocument').should('exist')
  }
  
  const getIframeBody = () => {
    return getIframeDocument()
    .its('body').should('not.be.undefined')
    .then(cy.wrap)
  }
  

  it("TEST-SINGUP, invalid email, random", () => {
    cy.get("iframe");
    cy.get("footer").find("li.nav-sign-up").click();
    cy.wait(1000);
    getIframeBody().find(gC.signin.selectors.submit).should('have.text', 'Sign up').click()
    // cy.get("#ghost-portal-root > div > iframe").find("h1.gh-portal-main-title").should('be.visible');
    // cy.get('#signInFormUsername', { timeout: 10000 }).eq(0).click({ force: true})
    // cy.get('body.home-template > div#ghost-portal-root').find('button').should('be.visible');
    // cy.get(".gh-portal-popup-wrapper").click();
    // cy.get(".error").find(gC.signin.selectors.email).should("have.length", 1);
  });

  

});
