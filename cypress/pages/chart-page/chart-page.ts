import {CheckoutPage1} from "../checkout-pages/checkout-page-1";

export class ChartPage {
  constructor() {
    cy.get(`[id="cart_contents_container"]`);
  }

  getChartItem() {
    return cy.get(`[class="cart_item"]`)
  }

  goToCheckout() {
    cy.contains('CHECKOUT')
      .click()
    return new CheckoutPage1
  }
}
