import { test, expect } from "@playwright/test";

test.describe("learn webdriverio Sign Up tests", () => {
  test(
    "PS-001 Verify user is able to Sign Up successfully",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "user is able to Sign Up successfully",
      },
    },
    async ({ page }) => {
      await page.goto("https://demo.learnwebdriverio.com/register");
      await page.getByRole("textbox", { name: "Username" }).fill("testuser3");
      await page.getByRole("textbox", { name: "Email" }).fill("test3@gmail.com");
      await page.getByRole("textbox", { name: "Password" }).fill("test123");
      await page.getByRole("button", { name: "Sign up" }).click();
      await expect( page.getByText('A place to share your')).toBeVisible();
    }
  );

  test(
    "PS-002 Verify user is not able to Sign Up with the same username and email",
    {
      tag: ["@negative"],
      annotation: {
        type: "description",
        description: "user is able to Sign Up successfully",
      },
    },
    async ({ page }) => {
      await page.goto("https://demo.learnwebdriverio.com/register");
      await page.getByRole("textbox", { name: "Username" }).fill("testuser3");
      await page.getByRole("textbox", { name: "Email" }).fill("test3@gmail.com");
      await page.getByRole("textbox", { name: "Password" }).fill("test123");
      await page.getByRole("button", { name: "Sign up" }).click();
      await expect( page.getByText('username is already taken.')).toBeVisible();
      await expect( page.getByText('email is already taken.')).toBeVisible();
    }
  );

  test(
    "PS-003 Verify user is not able to Sign Up with empty username",
    {
      tag: ["@negative"],
      annotation: {
        type: "description",
        description: "user is not able to Sign Up with empty username",
      },
    },
    async ({ page }) => {
      await page.goto("https://demo.learnwebdriverio.com/register");
      await page.getByRole("textbox", { name: "Email" }).fill("test3@gmail.com");
      await page.getByRole("textbox", { name: "Password" }).fill("test123");
      await page.getByRole("button", { name: "Sign up" }).click();
      await expect( page.getByText('username can\'t be blank')).toBeVisible();
    }
  );
});