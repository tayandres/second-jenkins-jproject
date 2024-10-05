import { expect, test } from "@playwright/test";

test.describe("Array of Elements tests", () => {

    let elements;

  // create a beforeEach function
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    elements = await page.locator("//ul[@class='list-group']/li/a").all();
    
  });

  test("Verify that there are exactly 50 link elements within the <ul> element", async ({page,}) => {
    expect(elements.length).toBe(50);
    // another way:
    expect(await page.locator("//ul[@class='list-group']/li").count()).toBe(50);
  });

  test("Verify that each of the 50 link elements within the <ul> element is visible", async ({page,}) => {
    for (let element of elements) {
      await expect(element).toBeVisible();
      // expect( await element.isVisible()).toBeTruthy();
    }
  });

  test("Verify that each of the 50 link elements within the <ul> element is enabled", async ({page,}) => {
    for (let i = 0; i < elements.length; i++) {
      await expect(elements[i]).toBeEnabled();
      // expect(await elements[i].isEnabled()).toBeTruthy();
    }
  });

  test("Verify that each of the 50 link elements within the <ul> element has a valid `href` attribute", async ({page,}) => {
    
    for (let element of elements) {
        let href = await element.getAttribute("href");
        expect(href).toBeTruthy();
        console.log(href);
    }
      /*
    elements.forEach(async (element) => {
      let href = await element.getAttribute("href");
      expect(href).toBeTruthy();
      console.log(href);
    });
    */
  });

});

// come back at 11:40 am EST
