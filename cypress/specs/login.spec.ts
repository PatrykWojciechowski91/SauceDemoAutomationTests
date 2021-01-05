import {LoginPage} from "../pages/login-page/login-page";
import {Credentials} from "../test-data/credentials";
import {ProductsPage} from "../pages/products-page/products-page";
import {Messages} from "../test-data/strings";

describe('Login tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  before(() => {
    cy.visit('/');
    loginPage = new LoginPage();
  });

  it('Attempt to login without credentials', () => {
    loginPage.clickLoginButton()
      .getErrorMessage().should('contain.text', Messages.requiredUsername);
  });

  it('Customer should be able to login to the platform', () => {
    productsPage = loginPage.fillAndLogin(Credentials.Customer.name, Credentials.Customer.pass);

    cy.url().should('include', '/inventory.html');
    cy.window()
      .its('sessionStorage')
      .invoke('getItem', 'session-username')
      .should('be.equal', 'standard_user');
  });
});
