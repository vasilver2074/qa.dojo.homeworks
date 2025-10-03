import { test, expect } from "@playwright/test";

test.describe("Coffee-cart tests", () => {
  test("PS-001 Verify Mocha is successfully added to Total", async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
    await page.locator('[data-test="Mocha"]').click();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    await expect(page.locator('[data-test="checkout"]')).toContainText("$8.00");
    await page.locator('[data-test="checkout"]').hover();
    await expect(page.locator("#app")).toContainText("Mocha x 1+-");
    //expect(page.locator('[data-test="checkout"]').innerText).toEqual(expect.stringContaining('$8.00'));
  });

  test("PS-002 Verify Payment details of adding Cappuccino is successfully sent from Menu page", async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
    await page.locator('[data-test="Cappuccino"]').click();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    await page.locator('[data-test="checkout"]').click();
    await page.getByRole("textbox", { name: "Name" }).fill("test");
    await page.getByRole("textbox", { name: "Email" }).fill("test@gmail.com");
    await page.getByRole("checkbox", { name: "Promotion checkbox" }).check();
    await expect(
      page.getByRole("heading", { name: "Payment details" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(
      page.getByRole("heading", { name: "Payment details" })
    ).not.toBeVisible();
  });

  test("PS-003 Verify Americano is successfully is added to Cart page", async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
    await page.locator('[data-test="Americano"]').click();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    await expect(page.locator('[data-test="checkout"]')).toContainText("$7.00");
    await page.getByRole('link', { name: 'Cart page' }).click();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    await expect(page.locator('[data-test="checkout"]')).toContainText("$7.00");
  });

  test("PS-004 Verify Payment details of adding Flat White is successfully sent from Menu page", async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
    await page.locator('[data-test="Flat_White"]').click();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    await expect(page.locator('[data-test="checkout"]')).toContainText("$18.00");
    await page.getByRole('link', { name: 'Cart page' }).click();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    await expect(page.locator('[data-test="checkout"]')).toContainText("$18.00");
    await page.locator('[data-test="checkout"]').click();
    await page.getByRole("textbox", { name: "Name" }).fill("test");
    await page.getByRole("textbox", { name: "Email" }).fill("test@gmail.com");
    await page.getByRole("checkbox", { name: "Promotion checkbox" }).check();
    await expect(
      page.getByRole("heading", { name: "Payment details" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(
      page.getByRole("heading", { name: "Payment details" })
    ).not.toBeVisible();
  });

  test('PS-004 After adding 3 coffee to cart appear Extra coffee message', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Cappuccino"]').click();
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await expect(page.getByText('It\'s your lucky day! Get an')).toBeVisible();
  await expect(page.locator('#app')).toContainText('It\'s your lucky day! Get an extra cup of Mocha for $4.');
});
});
