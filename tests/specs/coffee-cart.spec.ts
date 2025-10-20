import { test, expect } from "@playwright/test";

test.describe("Coffee-cart tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
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
      const coffeeMocha = page.locator('[data-test="Mocha"]');
      const checkout = page.locator('[data-test="checkout"]');
      const app = page.locator("#app");

      await coffeeMocha.click();
      await expect(checkout).toBeVisible();
      await expect(checkout).toContainText("$8.00");
      await checkout.hover();
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
      const coffeeCapuccino = page.locator('[data-test="Cappuccino"]');
      const checkout = page.locator('[data-test="checkout"]');
      const name = page.getByRole("textbox", { name: "Name" });
      const email = page.getByRole("textbox", { name: "Email" });
      const checkbox = page.getByRole("checkbox", {
        name: "Promotion checkbox",
      });
      const paymentDetails = page.getByRole("heading", {
        name: "Payment details",
      });
      const submeetButton = page.getByRole("button", { name: "Submit" });

      await coffeeCapuccino.click();
      await expect(checkout).toBeVisible();
      await checkout.click();
      await name.fill("test");
      await email.fill("test@gmail.com");
      await checkbox.check();
      await expect(paymentDetails).toBeVisible();
      await submeetButton.click();
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
      const coffeeAmericano = page.locator('[data-test="Americano"]');
      const checkout = page.locator('[data-test="checkout"]');
      const cartPage = page.getByRole("link", { name: "Cart page" });

      await coffeeAmericano.click();
      await expect(checkout).toBeVisible();
      await expect(checkout).toContainText("$7.00");
      await cartPage.click();
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
      const coffeeFlat_White = page.locator('[data-test="Flat_White"]');
      const checkout = page.locator('[data-test="checkout"]');
      const cartPage = page.getByRole("link", { name: "Cart page" });
      const name = page.getByRole("textbox", { name: "Name" });
      const email = page.getByRole("textbox", { name: "Email" });
      const checkbox = page.getByRole("checkbox", {
        name: "Promotion checkbox",
      });
      const paymentDetails = page.getByRole("heading", {
        name: "Payment details",
      });
      const submeetButton = page.getByRole("button", { name: "Submit" });

      await coffeeFlat_White.click();
      await expect(checkout).toBeVisible();
      await expect(checkout).toContainText("$18.00");

      await cartPage.click();
      await expect(page).toHaveTitle(/Coffee cart/);
      await expect(checkout).toBeVisible();
      await expect(checkout).toContainText("$18.00");
      await checkout.click();

      await name.fill("test");
      await email.fill("test@gmail.com");
      await checkbox.check();
      await expect(paymentDetails).toBeVisible();
      await submeetButton.click();
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
      const coffeeCappuccino = page.locator('[data-test="Cappuccino"]');
      const coffeeMocha = page.locator('[data-test="Mocha"]');
      const coffeeFlat_White = page.locator('[data-test="Flat_White"]');
      const app = page.locator("#app");
      const greeting = page.getByText("It's your lucky day! Get an");

      await coffeeCappuccino.click();
      await coffeeMocha.click();
      await coffeeFlat_White.click();
      await expect(greeting).toBeVisible();
      await expect(app).toContainText(
        "It's your lucky day! Get an extra cup of Mocha for $4."
      );
    }
  );
});
