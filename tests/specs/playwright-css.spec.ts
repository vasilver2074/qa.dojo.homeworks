import { test, expect } from "@playwright/test";

test.describe("Playwright dev tests", () => {
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
      await page.goto("https://playwright.dev/");

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
      await page.goto("https://playwright.dev/");
      await page.locator('[aria-label="Discord server"]').click();
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
      await page.locator(".navbar__inner .theme-layout-navbar-left.navbar__items :nth-child(3)").click();
      await expect(page.locator(".navbar__inner .theme-layout-navbar-left.navbar__items :nth-child(3)")).toBeVisible();
      await expect(page.locator(".navbar__inner .theme-layout-navbar-left.navbar__items :nth-child(3)")).toContainText(
        "Docs"
      );
      await expect(page.locator("header > h1")).toContainText("Installation");

    //   await page.locator("API", { exact: true }).click();
    //   await expect.soft(page.locator("API", { exact: true })).toBeVisible();
    //   await expect
    //     .soft(page.locator("Main", { exact: true }))
    //     .toContainText("API");
    //   await expect
    //     .soft(page.locator("heading", { name: "Playwright Library" }))
    //     .toBeVisible();

    //   await page.locator("link", { name: "Community" }).click();
    //   await expect(page.getByLabel("Main", { exact: true })).toBeEmpty();
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
      await page.locator(".DocSearch-Button-Placeholder").click();
      await page.locator("#docsearch-input").fill("Installation");
      await page.locator("#docsearch-hits0-item-0 .DocSearch-Hit-title").click();
      await expect(page.locator("header > h1")).toContainText("Installation");
    }
  );
});
