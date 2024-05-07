import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { SubActivityPage } from '../pages/subActivityPage';
import { beforeEach } from 'node:test';
import { ProjectsPage } from '../pages/projectsPage';
import { ActiveTemplateWindow } from '../windows/ActiveTemplateWindow';
import { AddSubActivity } from '../windows/addSubActivitiesWindow';
import { AddedProjectWindow } from '../pages/addedProjectPage';


test.describe("Add Sub Activity", () => {

  test.beforeEach(async ({page})=>{
    await page.goto('https://meetk.analysed.ai/');

  })

  test("Verify that user is able to add Sub Activity @test1", async ({page}) => {
    const loginPage = new LoginPage(page);
    let subActivityPage: SubActivityPage;
    let projectPage: ProjectsPage;

    await test.step("Step 1 - Login", async () => {
      subActivityPage = await loginPage.login();
      expect.soft(page, "Project Page is not opened. Page url is not correct").toHaveURL(/sub-activities/)
    })

    await test.step("Step 2 - Open Project section", async () => {
     projectPage = await subActivityPage.sideBarObject.openProjectsPage();
     await expect(page, "Project Page is not opened. Page url is not correct").toHaveURL(/project/)
    const project = page.locator('li[class*="selected"]')
     const color = await project.evaluate((e) => {
      return window.getComputedStyle(e).getPropertyValue("background-color")
  })
  expect(color).toContain("rgba(212, 221, 228")

    })
    await test.step("Step 3 - Click  Add Sub Activity button", async () => {
       await projectPage.openActiveTempaltesWindow();
       const templatewindow = new ActiveTemplateWindow(page);
      await expect(templatewindow.title, "Activity Template window is not shown").toHaveText('Active Templates')

    })
    await test.step("Step 4 - Click  JavaScript React Native/ONE_PHASE button", async () => {
      const templatewindow = new ActiveTemplateWindow(page);
      await templatewindow.openSubActivityWindow();
      const subActivityWindow = new AddSubActivity(page);
      await expect(subActivityWindow.title, "Activity Template wndow is not shown").toHaveValue('');
   })
   
   await test.step("Step 5 - Fill the nesessary fields of newly created sub activity", async () => {
    const subActivityWindow = new AddSubActivity(page);
    await subActivityWindow.fillAddSubActivityFileds();
    const addedprojectpage = new AddedProjectWindow(page);
   await expect(addedprojectpage.title).toBeVisible();

 })
    
  })
})

