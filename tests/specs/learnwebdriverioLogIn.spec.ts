import { test, expect } from "@playwright/test";

test.describe("learn webdriverio Log In tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/login");
  });
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
      const email = page.getByRole("textbox", { name: "Email" });
      const password = page.getByRole("textbox", { name: "Password" });
      const signInButton = page.getByRole("button", { name: "Sign in" });
      const message = page.getByText("A place to share your");

      await email.fill("test3@gmail.com");
      await password.fill("test123");
      await signInButton.click();
      await expect(message).toBeVisible();
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
      const password = page.getByRole("textbox", { name: "Password" });
      const signInButton = page.getByRole("button", { name: "Sign in" });
      const errorMessage = page.getByText("email can't be blank");

      await password.fill("test123");
      await signInButton.click();
      await expect(errorMessage).toBeVisible();
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
      const email = page.getByRole("textbox", { name: "Email" });
      const password = page.getByRole("textbox", { name: "Password" });
      const signInButton = page.getByRole("button", { name: "Sign in" });
      const errorMessage = page.getByText("email or password is invalid");

      await email.fill("test3@gmail.com");
      await password.fill("test12");
      await signInButton.click();
      await expect(errorMessage).toBeVisible();
    }
  );
});
