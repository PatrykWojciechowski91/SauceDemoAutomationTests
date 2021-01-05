export class CheckoutCompleted {
  constructor() {
    cy.get(`[id="checkout_complete_container"]`);
  }

  getFinalMessage() {
    return cy.get('[class="complete-header"]')
  }
}
