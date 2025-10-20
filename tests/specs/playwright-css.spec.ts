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
      const buttonSwitchLight = page.locator(
        '[aria-label="Switch between dark and light mode (currently system mode)"]'
      );
      const buttonSwitchNight = page.locator(
        '[aria-label="Switch between dark and light mode (currently dark mode)"]'
      );

      await buttonSwitchLight.dblclick();
      await expect.soft(buttonSwitchNight).toHaveAttribute("title", "dark mode");
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
      const discordButton = page.locator('[aria-label="Discord server"]');

      await discordButton.click();
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
      const docsButton = page.locator('a.navbar__link[href="/docs/intro"]');
      const installation = page.locator("header > h1");
      const apiButton = page.locator(
        'a.navbar__link[href="/docs/api/class-playwright"]'
      );
      const playwrightLibrary = page.locator("header h1");
      const wellcome = page.locator('[href="/community/welcome"]');

      await docsButton.click();
      await expect.soft(docsButton).toBeVisible();
      await expect.soft(docsButton).toContainText("Docs");
      await expect.soft(installation).toContainText("Installation");

      await apiButton.click();
      await expect.soft(apiButton).toBeVisible();
      await expect.soft(apiButton).toContainText("API");
      await expect.soft(playwrightLibrary).toHaveText("Playwright Library");

      await wellcome.click();
      await expect.soft(playwrightLibrary).toHaveText("Welcome");
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
      const search = page.locator(".DocSearch-Button-Placeholder");
      const searchField = page.locator("#docsearch-input");
      const chooseSearchResult = page.locator(
        "#docsearch-hits0-item-0 .DocSearch-Hit-title"
      );
      const searchPage = page.locator("header > h1");

      await search.click();
      await searchField.fill("Installation");
      await chooseSearchResult.click();
      await expect.soft(searchPage).toContainText("Installation");
    }
  );
});
