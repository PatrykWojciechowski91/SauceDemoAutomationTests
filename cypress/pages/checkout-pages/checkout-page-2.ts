import {CheckoutCompleted} from "./checkout-completed";

export class CheckoutPage2 {
  constructor() {
    cy.get(`[id="checkout_summary_container"]`);
  }

  getOrder() {
    return cy.get('[class="cart_item_label"]')
  }

  finishOrder() {
    cy
      .contains('FINISH')
      .click()
    return new CheckoutCompleted();
  }
}
