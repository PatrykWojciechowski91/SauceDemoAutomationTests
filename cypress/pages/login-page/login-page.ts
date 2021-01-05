import {ProductsPage} from "../products-page/products-page";


export class LoginPage {
    constructor() {
        cy.get(`[id="login-button"]`);
    }

    fillUsername(username: string) {
        cy
          .get(`[id="user-name"]`)
          .clear()
          .type(username);
        return this;
    }

    fillPassword(password: string) {
        cy
          .get(`[id="password"]`)
          .clear()
          .type(password);
        return this;
    }

    clickLoginButton() {
        cy
          .get(`[id="login-button"]`)
          .click();
        return this;
    }

    loginAttempt(username: string, password: string) {
        this
          .fillUsername(username)
          .fillPassword(password)
          .clickLoginButton();
        return this;
    }

    fillAndLogin(username: string, password: string) {
        this.loginAttempt(username, password);
        return new ProductsPage();
    }

    getErrorMessage() {
        return cy.get(`[data-test="error"]`);
    }
}
