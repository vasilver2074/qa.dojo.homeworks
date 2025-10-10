import { test, expect } from "@playwright/test";

test.describe("Coffee-cart tests", () => {
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
      await page.goto("https://coffee-cart.app/");
      await page.locator('[data-test="Mocha"]').click();
      await expect(page.locator('[data-test="checkout"]')).toBeVisible();
      await expect(page.locator('[data-test="checkout"]')).toContainText(
        "$8.00"
      );
      await page.locator('[data-test="checkout"]').hover();
      await expect(page.locator("#app")).toContainText("Mocha x 1+-");
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
      await page.goto("https://coffee-cart.app/");
      await page.locator('[data-test="Cappuccino"]').click();
      await expect(page.locator('[data-test="checkout"]')).toBeVisible();
      await page.locator('[data-test="checkout"]').click();
      await page.locator("#name").fill("test");
      await page.locator("#email").fill("test@gmail.com");
      await page.locator("#promotion").check();
      await expect(
        page.locator("#app > div:nth-child(3) > div.modal > div > section > h1")
      ).toBeVisible();
      await page.locator("#submit-payment").click();
      await expect(
        page.locator("#app > div:nth-child(3) > div.modal > div > section > h1")
      ).not.toBeVisible();
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
      await page.goto("https://coffee-cart.app/");
      await page.locator('[data-test="Americano"]').click();
      await expect(page.locator('[data-test="checkout"]')).toBeVisible();
      await expect(page.locator('[data-test="checkout"]')).toContainText(
        "$7.00"
      );
      await page.locator('[aria-label="Cart page"]').click();
      await expect(page.locator('[data-test="checkout"]')).toBeVisible();
      await expect(page.locator('[data-test="checkout"]')).toContainText(
        "$7.00"
      );
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
      await page.goto("https://coffee-cart.app/");
      await page.locator('[data-test="Flat_White"]').click();
      await expect(page.locator('[data-test="checkout"]')).toBeVisible();
      await expect(page.locator('[data-test="checkout"]')).toContainText(
        "$18.00"
      );
      await page.locator('[aria-label="Cart page"]').click();
      await expect(page).toHaveTitle(/Coffee cart/);
      await expect(page.locator('[data-test="checkout"]')).toBeVisible();
      await expect(page.locator('[data-test="checkout"]')).toContainText(
        "$18.00"
      );
      await page.locator('[data-test="checkout"]').click();
      await page.locator("#name").fill("test");
      await page.locator("#email").fill("test@gmail.com");
      await page.locator("#promotion").check();
      await expect(
        page.locator("#app > div:nth-child(3) > div.modal > div > section > h1")
      ).toBeVisible();
      await page.locator("#submit-payment").click();
      await expect(
        page.locator("#app > div:nth-child(3) > div.modal > div > section > h1")
      ).not.toBeVisible();
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
      await page.goto("https://coffee-cart.app/");
      await page.locator('[data-test="Cappuccino"]').click();
      await page.locator('[data-test="Mocha"]').click();
      await page.locator('[data-test="Flat_White"]').click();
      await expect(page.locator("#app")).toContainText(
        "It's your lucky day! Get an extra cup of Mocha for $4."
      );
    }
  );
});
