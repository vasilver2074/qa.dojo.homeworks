import { test, expect, chromium } from "@playwright/test";

test.describe("Playwright dev tests", () => {
  test(
    "PS-001 Verify user is able to switch between dark and light mode",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "After double click Playwright site displayed with dark mode",
      },
    },
    async ({ page }) => {
      await page.goto("https://playwright.dev/");
      await page
        .getByRole("button", { name: "Switch between dark and light" })
        .dblclick();
      await expect
        .soft(
          page.getByRole("button", { name: "Switch between dark and light" })
        )
        .toHaveAttribute("title", "dark mode");
    }
  );

  test(
    "PS-002 Verify user is able to navigate to Discord page",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "After tap on Discord server link user was navigated to Discord Servers site",
      },
    },
    async ({ page }) => {
      await page.goto("https://playwright.dev/");
      await page.getByRole("link", { name: "Discord server" }).click();
      const pagePromise = page.waitForEvent("popup");
      const newTab = await pagePromise;
      await newTab.waitForLoadState();
      await expect(newTab).toHaveTitle(/Playwright - Discord Servers/);
    }
  );

  test(
    "PS-003 Verify user is able to navigate with Main menu",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "User is able to navigate with Main menu",
      },
    },
    async ({ page }) => {
      await page.goto("https://playwright.dev/");
      await page.getByRole("link", { name: "Docs" }).click();
      await expect(page.getByRole("link", { name: "Docs" })).toBeVisible();
      await expect(page.getByLabel("Main", { exact: true })).toContainText(
        "Docs"
      );
      await expect(
        page.getByRole("heading", { name: "Installation" })
      ).toBeVisible();

      await page.getByText("API", { exact: true }).click();
      await expect.soft(page.getByText("API", { exact: true })).toBeVisible();
      await expect
        .soft(page.getByLabel("Main", { exact: true }))
        .toContainText("API");
      await expect
        .soft(page.getByRole("heading", { name: "Playwright Library" }))
        .toBeVisible();

      await page.getByRole("link", { name: "Community" }).click();
      await expect(page.getByLabel("Main", { exact: true })).toContainText(
        "Community"
      );
    }
  );

  test(
    "PS-004 Verify user is able to perform a search",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "user is able to perform a search Installation",
      },
    },
    async ({ page }) => {
      await page.goto("https://playwright.dev/");
      await page.getByRole("button", { name: "Search (Ctrl+K)" }).click();
      await page
        .getByRole("searchbox", { name: "Search" })
        .fill("installation");
      await page
        .getByRole("link", { name: "Installation", exact: true })
        .click();
      await expect(
        page.getByRole("heading", { name: "Installation" })
      ).toBeVisible();
    }
  );
});
