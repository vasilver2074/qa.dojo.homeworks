import { Locator, Page } from "@playwright/test";

export class CoffeeCartPage {
    constructor(private page: Page) { }

    async clickCoffeeMocha(page: Page) {
        await page.locator('[data-test="Mocha"]').click();
    }

    async clickCoffeeCapuccino(page: Page) {
        await page.locator('[data-test="Cappuccino"]').click();
    }

    async clickCoffeeAmericano(page: Page) {
        await page.locator('[data-test="Americano"]').click();
    }

    async clickCoffeeFlatWhite(page: Page) {
        await page.locator('[data-test="Flat_White"]').click();
    }

    async getCheckout() {
        return this.page.locator('[data-test="checkout"]');
    }

    async getApp() {
        return this.page.locator("#app");
    }

    async fillName(page: Page, name: string) {
        await page.getByRole("textbox", { name: "Name" }).fill(name);
    }

    async fillEmail(page: Page, email: string) {
        await page.getByRole("textbox", { name: "Email" }).fill(email);
    }

    async checkCheckbox(page: Page) {
        await page.getByRole("checkbox", {
            name: "Promotion checkbox",
        }).check();
    }

    async getPaymentDetails() {
        return this.page.getByRole("heading", {
            name: "Payment details",
        });
    }

    async clickSubmitButton(page: Page) {
        await page.getByRole("button", { name: "Submit" }).click();
    }

    async clickCartPage(page: Page) {
        await page.getByRole("link", { name: "Cart page" }).click();
    }

    // async getCartItems(): Promise<string[]> {
    //     return await this.page.locator(".inventory_item_name ").allTextContents();
    // }

}