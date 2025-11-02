import { test, expect } from "@playwright/test";
import { CoffeeCartPage } from "../pages/coffee-cart.page";
import data from '../utils/data.json' assert { type: 'json' };

test.describe("Coffee-cart tests", () => {
  let coffeeCartPage: CoffeeCartPage;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
    coffeeCartPage = new CoffeeCartPage(page);
  });
  test(
    "PS-001 Verify Mocha is successfully added to Total",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "Mocha coffee is successfully added to Total",
      },
    },
    async ({ page }) => {

      await coffeeCartPage.clickCoffeeMocha(page);
      const checkout = await coffeeCartPage.getCheckout();
      await expect(checkout).toBeVisible();
      await expect(checkout).toContainText("$8.00");
      await checkout.hover();
      const app = await coffeeCartPage.getApp();
      await expect(app).toContainText("Mocha x 1+-");
    }
  );

  test(
    "PS-002 Verify Payment details of adding Cappuccino is successfully sent from Menu page",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description:
          "Cappuccino coffee is added to Total and Payment details form is successfully sent",
      },
    },
    async ({ page }) => {
      
      await coffeeCartPage.clickCoffeeCapuccino(page);
      const checkout = await coffeeCartPage.getCheckout();
      await expect(checkout).toBeVisible();
      await checkout.click();
      await coffeeCartPage.fillName(page,'test');
      await coffeeCartPage.fillEmail(page,'test@gmail.com');
      await coffeeCartPage.checkCheckbox(page);
      const paymentDetails = await coffeeCartPage.getPaymentDetails();
      await expect(paymentDetails).toBeVisible();
      await coffeeCartPage.clickSubmitButton(page);
      await expect(paymentDetails).not.toBeVisible();
    }
  );

  test(
    "PS-003 Verify Americano is successfully added to Cart page",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "Americano coffee is successfully added to Cart page",
      },
    },
    async ({ page }) => {
      
      await coffeeCartPage.clickCoffeeAmericano(page);
      const checkout = await coffeeCartPage.getCheckout();
      await expect(checkout).toBeVisible();
      await expect(checkout).toContainText("$7.00");
      await coffeeCartPage.clickCartPage(page);
      await expect(checkout).toBeVisible();
      await expect(checkout).toContainText("$7.00");
    }
  );

  test(
    "PS-004 Verify Payment details of adding Flat White is successfully sent from Menu page",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description:
          "Flat White is successfully added to Total and Payment details form is successfully sent from Menu page",
      },
    },
    async ({ page }) => {
      
      await coffeeCartPage.clickCoffeeFlatWhite(page);
      const checkout = await coffeeCartPage.getCheckout();
      await expect(checkout).toBeVisible();
      await expect(checkout).toContainText("$18.00");

      await coffeeCartPage.clickCartPage(page);
      await expect(page).toHaveTitle(/Coffee cart/);
      await expect(checkout).toBeVisible();
      await expect(checkout).toContainText("$18.00");
      await checkout.click();

      await coffeeCartPage.fillName(page,'test');
      await coffeeCartPage.fillEmail(page,'test@gmail.com');
      await coffeeCartPage.checkCheckbox(page);
      const paymentDetails = await coffeeCartPage.getPaymentDetails();
      await expect(paymentDetails).toBeVisible();
      await coffeeCartPage.clickSubmitButton(page);
      await expect(paymentDetails).not.toBeVisible();
    }
  );

  test(
    "PS-005 After adding 3 coffee to cart appear Extra coffee message",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description:
          "Cappuccino, Mocha and Flat_White coffee are successfully added to Total and congratulation message is displayed",
      },
    },
    async ({ page }) => {
      
      await coffeeCartPage.clickCoffeeCapuccino(page);
      await coffeeCartPage.clickCoffeeMocha(page);
      await coffeeCartPage.clickCoffeeFlatWhite(page);
      const app = await coffeeCartPage.getApp();
      await expect(app).toContainText(
        "It's your lucky day! Get an extra cup of Mocha for $4."
      );
    }
  );
});
