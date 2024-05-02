// import { Fixtures } from "@playwright/test";


// const login: Fixtures<{ page: any }> = async ({ page }) => {
//     return async () => {
//         await page.goto('https://meetk.analysed.ai/');
//         await page.fill('input[name="julieta.simonyan@eif.am"]', process.env.USERNAME);
//         await page.fill('input[name="jul555817J"]', process.env.PASSWORD);
//         await page.click('button[type="submit"]');
//         await page.waitForNavigation(); 
//         return page;
//     };
// };

// export default login;

import { request } from "http";
import { BasePage } from "../pages/basepage";
import {LoginPage} from "../pages/loginPage"
import {test as base, Page} from "@playwright/test";
import fs from 'fs';
import path from 'path';


// type MyFixtures = {
//     loginPage: LoginPage;
//     basePage: BasePage;
//   };
  
  // export const test = base.extend<MyFixtures>({
  //     loginPage: async ({ page }, use) => {
  //    await page.goto('https://meetk.analysed.ai/');
  //    await page.fill('input[name="julieta.simonyan@eif.am"]', process.env.USERNAME!);
  //    await page.fill('input[name="jul555817J"]', process.env.PASSWORD!);
  //    await page.click('button[type="submit"]');
  //   await page.waitForLoadState();
  //     const loginPage = new LoginPage(page);
  //     await use(loginPage);
  //   },
  // });

  export const logedInTest = base.extend<{}, {basePage: string}>({
    basePage: [async ({browser}, use) => {
      console.log(":::::1")
      const page = await browser.newPage()
    const response =   await page.request.post('https://meetk.analysed.ai/', {
        data: {
            email:"julieta.simonyan@eif.am",
            password:"jul555817J"}

      })
      console.log(response);
      const responseData = await response.json();

      const data = {
        accessToken: responseData.accessToken,
        user: {
            id: responseData.id,
            firstName: responseData.firstName,
            lastName: responseData.lastName,
            email: responseData.email          
        },
        project: responseData.project.id   
     }

    //  const filename = path.resolve(test.info().project.outputDir, ``)
     
     await page.context().addInitScript(storage => {
          for (const [key, value] of Object.entries(storage))
            window.sessionStorage.setItem(key, value);
      }, data);
      await page.goto("https://meetk.analysed.ai/applicants")
      const basePage = new BasePage(page)

    //  await page.request.storageState({path: 'PlayWright\fixtures\auth.json'})
    //  await context.storageState({path: 'PlayWright\fixtures\auth.json'})
    await use(basePage);

    },{scope: "worker"}]

 
});
  