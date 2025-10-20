import { test, expect } from "@playwright/test";

test.describe("learn webdriverio Sign Up tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/register");
  });
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
      const username = page.getByRole("textbox", { name: "Username" });
      const email = page.getByRole("textbox", { name: "Email" });
      const password = page.getByRole("textbox", { name: "Password" });
      const signUpButton = page.getByRole("button", { name: "Sign up" });
      const message = page.getByText("A place to share your");

      await username.fill("testuser3");
      await email.fill("test3@gmail.com");
      await password.fill("test123");
      await signUpButton.click();
      await expect(message).toBeVisible();
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
      const username = page.getByRole("textbox", { name: "Username" });
      const email = page.getByRole("textbox", { name: "Email" });
      const password = page.getByRole("textbox", { name: "Password" });
      const signUpButton = page.getByRole("button", { name: "Sign up" });
      const errorMessageUsername = page.getByText("username is already taken.");
      const errorMessageEmail = page.getByText("email is already taken.");

      await username.fill("testuser3");
      await email.fill("test3@gmail.com");
      await password.fill("test123");
      await signUpButton.click();
      await expect(errorMessageUsername).toBeVisible();
      await expect(errorMessageEmail).toBeVisible();
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
      const email = page.getByRole("textbox", { name: "Email" });
      const password = page.getByRole("textbox", { name: "Password" });
      const signUpButton = page.getByRole("button", { name: "Sign up" });
      const errorMessageUsername = page.getByText("username can't be blank");

      await email.fill("test3@gmail.com");
      await password.fill("test123");
      await signUpButton.click();
      await expect(errorMessageUsername).toBeVisible();
    }
  );
});
