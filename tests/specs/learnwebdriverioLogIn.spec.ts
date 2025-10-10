import { test, expect } from "@playwright/test";

test.describe("learn webdriverio Log In tests", () => {
  test(
    "PS-001 Verify user is able to Log In successfully",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "user is able to Log In successfully",
      },
    },
    async ({ page }) => {
      await page.goto("https://demo.learnwebdriverio.com/login");
      await page.getByRole("textbox", { name: "Email" }).fill("test3@gmail.com");
      await page.getByRole("textbox", { name: "Password" }).fill("test123");
      await page.getByRole("button", { name: "Sign in" }).click();
      await expect( page.getByText('A place to share your')).toBeVisible();
    }
  );

  test(
    "PS-002 Verify user is not able to Log In with empty email",
    {
      tag: ["@negative"],
      annotation: {
        type: "description",
        description: "user is able to Log In successfully",
      },
    },
    async ({ page }) => {
      await page.goto("https://demo.learnwebdriverio.com/login");
      await page.getByRole("textbox", { name: "Password" }).fill("test123");
      await page.getByRole("button", { name: "Sign in" }).click();
      await expect( page.getByText('email can\'t be blank')).toBeVisible();
    }
  );

  test(
    "PS-003 Verify user is not able to Log In successfully",
    {
      tag: ["@negative"],
      annotation: {
        type: "description",
        description: "user is able to Log In successfully",
      },
    },
    async ({ page }) => {
      await page.goto("https://demo.learnwebdriverio.com/login");
      await page.getByRole("textbox", { name: "Email" }).fill("test3@gmail.com");
      await page.getByRole("textbox", { name: "Password" }).fill("test12");
      await page.getByRole("button", { name: "Sign in" }).click();
      await expect( page.getByText('email or password is invalid')).toBeVisible();
    }
  );
});