import { test, expect } from "@playwright/test";

test.describe("Playwright dev tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test(
    "PS-001 Verify user is able to switch between dark and light mode",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description:
          "After double click Playwright site displayed with dark mode",
      },
    },
    async ({ page }) => {
      await page
        .locator(
          '[aria-label="Switch between dark and light mode (currently system mode)"]'
        )
        .dblclick();

      await expect(
        page.locator(
          '[aria-label="Switch between dark and light mode (currently dark mode)"]'
        )
      ).toHaveAttribute("title", "dark mode");
    }
  );

  test(
    "PS-002 Verify user is able to navigate to Discord page",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description:
          "After tap on Discord server link user was navigated to Discord Servers site",
      },
    },
    async ({ page }) => {
      await page.locator('[aria-label="Discord server"]').click();
      const pagePromise = page.waitForEvent("popup");
      const newTab = await pagePromise;
      await newTab.waitForLoadState();
      await expect.soft(newTab).toHaveTitle(/Playwright - Discord Servers/);
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
      await page.locator('a.navbar__link[href="/docs/intro"]').click();
      await expect
        .soft(page.locator('a.navbar__link[href="/docs/intro"]'))
        .toBeVisible();
      await expect
        .soft(page.locator('a.navbar__link[href="/docs/intro"]'))
        .toContainText("Docs");
      await expect
        .soft(page.locator("header > h1"))
        .toContainText("Installation");

      await page
        .locator('a.navbar__link[href="/docs/api/class-playwright"]')
        .click();
      await expect
        .soft(page.locator('a.navbar__link[href="/docs/api/class-playwright"]'))
        .toBeVisible();
      await expect
        .soft(page.locator('a.navbar__link[href="/docs/api/class-playwright"]'))
        .toContainText("API");
      await expect
        .soft(page.locator("header h1"))
        .toHaveText("Playwright Library");

      await page.locator('[href="/community/welcome"]').click();
      await expect.soft(page.locator("header h1")).toHaveText("Welcome");
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
      await page.locator(".DocSearch-Button-Placeholder").click();
      await page.locator("#docsearch-input").fill("Installation");
      await page
        .locator("#docsearch-hits0-item-0 .DocSearch-Hit-title")
        .click();
      await expect
        .soft(page.locator("header > h1"))
        .toContainText("Installation");
    }
  );
});
