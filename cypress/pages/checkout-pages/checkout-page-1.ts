import {CheckoutPage2} from "./checkout-page-2";

export class CheckoutPage1 {
  constructor() {
    cy.get(`[id="checkout_info_container"]`);
  }

  fulfillFirstName(name: string) {
    cy
      .get('[data-test="firstName"]')
      .clear()
      .type(name)
    return this;
  }

  fulfillLastName(name: string) {
    cy
      .get('[data-test="lastName"]')
      .clear()
      .type(name)
    return this;
  }

  fulfillZipCode(code: string) {
    cy
      .get('[data-test="postalCode"')
      .clear()
      .type(code)
    return this;
  }

  clickContinue() {
    cy
      .get('[value="CONTINUE"]')
      .click()
  }

  fulfillYourInformation(firstName: string, lastName: string, code: string) {
    this
      .fulfillFirstName(firstName)
      .fulfillLastName(lastName)
      .fulfillZipCode(code)
      .clickContinue()
    return new CheckoutPage2()
  }
}
