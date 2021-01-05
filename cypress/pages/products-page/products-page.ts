import {ChartPage} from "../chart-page/chart-page";

export class ProductsPage {
  constructor() {
    cy.get(`[id="inventory_container"]`);
  }

  addItemToChart(text: string) {
    cy
      .contains(`div[class="inventory_item"]`, text)
      .contains(`button`, `ADD TO CART`)
      .click();
    return this;
  }

  getRemoveButton(text: string) {
    return cy
      .contains(`div[class="inventory_item"]`, text)
      .contains(`button`, `REMOVE`);
  }

  openChart() {
    cy.get(`[data-icon="shopping-cart"]`)
      .click()
    return new ChartPage()
  }
}
