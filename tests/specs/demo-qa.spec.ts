import { test, expect, Locator } from "@playwright/test";
import data from "../utils/data.json";

test.describe("demo-qa tests", () => {
  test.beforeEach(async ({ page }) => {
    //await page.goto("https://demoqa.com/text-box");
  });

  test(
    "PS-001 Text Box is successfully filled and sent",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "Text Box is successfully filled and sent",
      },
    },
    async ({ page }) => {
      const userName = page.locator('//*[@id="userName"]');
      const userEmail = page.locator('//*[@id="userEmail"]');
      const currentAddress = page.locator('//*[@id="currentAddress"]');
      const permanentAddress = page.locator('//*[@id="permanentAddress"]');
      const submitButton = page.locator('//*[@id="submit"]');
      const name = page.locator('//*[@id="name"]');
      const emailCheck = page.locator('//*[@id="email"]');
      const currentAddressCheck = page.locator('//p[@id="currentAddress"]');
      const permanentAddressCheck = page.locator(
        '//p[@id="permanentAddress"]'
      );

      await page.goto("https://demoqa.com/text-box");
      const { full_name: fullName, email, current_address, permanent_address } =
        data.user;
      await userName.fill(fullName);
      await userEmail.fill(email);
      await currentAddress.fill(current_address);
      await permanentAddress.fill(permanent_address);
      await submitButton.click();
      await expect.soft(name).toBeVisible();
      await expect.soft(emailCheck).toBeVisible();
      await expect.soft(currentAddressCheck).toBeVisible();
      await expect.soft(permanentAddressCheck).toBeVisible();
      await expect.soft(name).toContainText("John Black");
      await expect.soft(emailCheck).toContainText("test@gmail.com");
      await expect.soft(currentAddressCheck).toContainText("New York");
      await expect.soft(permanentAddressCheck).toContainText("Tokio");
    }
  );

  test(
    "PS-002 Verify all check boxes are clickable",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "Verify all check boxes are clickable",
      },
    },
    async ({ page }) => {
      const checkValidation= page.locator('//p[@class="mt-3"]/span');
      const yes = page.locator('//*[@for="yesRadio"]');
      const impressive = page.locator('//*[@for="impressiveRadio"]');
      const no = page.locator('//*[@for="noRadio"]');

      await page.goto("https://demoqa.com/radio-button");
      await expect(yes).toBeVisible();
      await expect(yes).not.toBeChecked();
      await yes.check();
      await expect.soft(yes).toBeChecked();
      await expect.soft(checkValidation).toHaveText("Yes");

      await expect(impressive).toBeVisible();
      await expect(impressive).not.toBeChecked();
      await impressive.check();
      await expect.soft(impressive).toBeChecked();
      await expect.soft(checkValidation).toHaveText("Impressive");

      await expect(no).not.toBeChecked();
    }
  );

  test(
    "PS-003 Verify all check boxes are clickable",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "Verify all check boxes are clickable",
      },
    },
    async ({ page }) => {
      const toggleButton1= page.locator('(//button[@title="Toggle"])[1]');
      const toggleButton2 = page.locator('(//button[@title="Toggle"])[2]');
      const toggleButton3 = page.locator('(//button[@title="Toggle"])[3]');
      const toggleButton4 = page.locator('(//button[@title="Toggle"])[4]');
      const toggleButton5 = page.locator('(//button[@title="Toggle"])[5]');
      const toggleButton6: Locator = page.locator('(//button[@title="Toggle"])[6]');

      const checkboxExcelFile = page.locator(
        '//label[@for="tree-node-excelFile"]/span[@class="rct-checkbox"]'
      );
      const verifyDisplaying = page.locator(
        '//*[@id="result"]/span[@class="text-success"]'
      );
      const verifyDisplayingDownloads = page.locator(
        '//*[@id="result"]//span[text()="downloads"]'
      );
      const verifyDisplayingOffice= page.locator(
        '//*[@id="result"]//span[text()="office"]'
      );
      const checkboxWordFile= page.locator(
        '//label[@for="tree-node-wordFile"]/span[@class="rct-checkbox"]'
      );
      const checkboxDownloads= page.locator(
        '//label[@for="tree-node-downloads"]/span[@class="rct-checkbox"]'
      );
      const checkboxGeneral= page.locator(
        '//label[@for="tree-node-general"]/span[@class="rct-checkbox"]'
      );
      const checkboxClassified= page.locator(
        '//label[@for="tree-node-classified"]/span[@class="rct-checkbox"]'
      );
      const checkboxPrivate= page.locator(
        '//label[@for="tree-node-private"]/span[@class="rct-checkbox"]'
      );
      const checkboxPublic= page.locator(
        '//label[@for="tree-node-public"]/span[@class="rct-checkbox"]'
      );
      const checkboxOffice= page.locator(
        '//label[@for="tree-node-office"]/span[@class="rct-checkbox"]'
      );

      await page.goto("https://demoqa.com/checkbox");

      await toggleButton1.click();
      await toggleButton2.click();
      await toggleButton3.click();
      await toggleButton4.click();
      await toggleButton5.click();
      await toggleButton6.click();

      await checkboxExcelFile.check();
      await expect(checkboxExcelFile).toBeChecked();
      await expect(verifyDisplaying).toContainText("excelFile");
      await checkboxExcelFile.uncheck();

      await checkboxWordFile.check();
      await expect(checkboxWordFile).toBeChecked();
      await expect(verifyDisplaying).toContainText("wordFile");
      await checkboxWordFile.uncheck();

      await checkboxDownloads.check();
      await expect(checkboxDownloads).toBeChecked();
      await expect(verifyDisplayingDownloads).toContainText("downloads");
      await checkboxDownloads.uncheck();

      await checkboxGeneral.check();
      await expect(checkboxGeneral).toBeChecked();
      await expect(verifyDisplaying).toContainText("general");
      await checkboxGeneral.uncheck();

      await checkboxClassified.check();
      await expect(checkboxClassified).toBeChecked();
      await expect(verifyDisplaying).toContainText("classified");
      await checkboxClassified.uncheck();

      await checkboxPrivate.check();
      await expect(checkboxPrivate).toBeChecked();
      await expect(verifyDisplaying).toContainText("private");
      await checkboxPrivate.uncheck();

      await checkboxPublic.check();
      await expect(checkboxPublic).toBeChecked();
      await expect(verifyDisplaying).toContainText("public");
      await checkboxPublic.uncheck();

      await checkboxOffice.check();
      await expect(checkboxOffice).toBeChecked();
      await expect(verifyDisplayingOffice).toContainText("office");
      await checkboxOffice.uncheck();
    }
  );
});

