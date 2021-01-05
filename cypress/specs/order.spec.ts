import {LoginPage} from "../pages/login-page/login-page";
import {Credentials} from "../test-data/credentials";
import {ProductsPage} from "../pages/products-page/products-page";
import {ChartPage} from "../pages/chart-page/chart-page";
import {CheckoutPage1} from "../pages/checkout-pages/checkout-page-1";
import {CheckoutPage2} from "../pages/checkout-pages/checkout-page-2";
import {CheckoutCompleted} from "../pages/checkout-pages/checkout-completed";
import {Messages} from "../test-data/strings";

describe('Order test', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  let chartPage: ChartPage;
  let checkoutPage1: CheckoutPage1;
  let checkoutPage2: CheckoutPage2;
  let checkoutCompleted: CheckoutCompleted;

  before(() => {
    cy.visit('/');
    loginPage = new LoginPage();
  });
  it('Customer should be able to make an order', () => {
    productsPage = loginPage.fillAndLogin(Credentials.Customer.name, Credentials.Customer.pass);

    cy.url().should('include', '/inventory.html');
    cy.window()
      .its('sessionStorage')
      .invoke('getItem', 'session-username')
      .should('be.equal', 'standard_user');

    productsPage.addItemToChart('Sauce Labs Backpack')

      .getRemoveButton('Sauce Labs Backpack').should('exist');

    productsPage
      .openChart()
      .getChartItem().should('contain.text', 'Sauce Labs Backpack');

    cy.url().should('include', '/cart.html');

    chartPage = new ChartPage();
    chartPage.goToCheckout();

    cy.url().should('include', '/checkout-step-one.html');

    checkoutPage1 = new CheckoutPage1();
    checkoutPage1.fulfillYourInformation(Credentials.Customer.firstName, Credentials.Customer.lastName, Credentials.Customer.zipCode);

    cy.url().should('include', '/checkout-step-two.html');
    checkoutPage2 = new CheckoutPage2();
    checkoutPage2.getOrder().should('contain.text', 'Sauce Labs Backpack');

    checkoutPage2.finishOrder();

    cy.url().should('include', '/checkout-complete.html');
    checkoutCompleted = new CheckoutCompleted();
    checkoutCompleted.getFinalMessage().should('contain.text', Messages.finalInfo);
  });
});
