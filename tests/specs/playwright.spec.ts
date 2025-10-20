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
      const buttonSwitch = page.getByRole("button", {
        name: "Switch between dark and light",
      });

      await buttonSwitch.dblclick();
      await expect.soft(buttonSwitch).toHaveAttribute("title", "dark mode");
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
      const discordButton = page.getByRole("link", { name: "Discord server" });

      await discordButton.click();
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
      const docsButton = page.getByRole("link", { name: "Docs" });
      const installation = page.locator("header > h1");
      const api = page.getByText("API", { exact: true });
      const apiVisibility = page.getByLabel("Main", { exact: true });
      const libraryVisibility = page.getByRole("heading", {
        name: "Playwright Library",
      });
      const communityButton = page.getByRole("link", { name: "Community" });
      const community = page.getByLabel("Main", { exact: true });

      await docsButton.click();
      await expect(docsButton).toBeVisible();
      await expect(docsButton).toContainText("Docs");
      await expect.soft(installation).toContainText("Installation");

      await api.click();
      await expect.soft(api).toBeVisible();
      await expect.soft(apiVisibility).toContainText("API");
      await expect.soft(libraryVisibility).toBeVisible();

      await communityButton.click();
      await expect(community).toContainText("Community");
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
      const search = page.getByRole("button", { name: "Search (Ctrl+K)" });
      const searchField = page.getByRole("searchbox", { name: "Search" });
      const chooseSearchResult = page.getByRole("link", {
        name: "Installation",
        exact: true,
      });
      const searchPage = page.getByRole("heading", { name: "Installation" });

      await search.click();
      await searchField.fill("installation");
      await chooseSearchResult.click();
      await expect(searchPage).toBeVisible();
    }
  );
});
