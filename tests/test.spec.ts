// import { expect, test } from '@playwright/test';
// import { BasePage } from '../pages/basepage';
// // import {test, logedInTest} from '../fixtures/fixtures';

// test.describe('Filter Stability Test', () => {
//   let pageAfterLogin: any;

// const BASE_URL = 'https://meetk.analysed.ai';
// /*
// const login = async (page: any) => {
//   await page.goto('https://meetk.analysed.ai/');
//   await page.getByTestId('email').fill('julieta.simonyan@eif.am', process.env.USERNAME);
//   await page.getByTestId('password').fill('jul555817J', process.env.PASSWORD);
//   await page.click('button[type="submit"]');
//   await page.waitForNavigation(); 
// }
// */


//   test('Filters data and checks stability after reloading', async ({ page }) => {

  

//     //  await page.request.storageState({path: 'PlayWright\fixtures\auth.json'})
//     //  await context.storageState({path: 'PlayWright\fixtures\auth.json'})


//     // await page.goto(`${BASE_URL}/applicants`);


//     /**
//      * const loginPage = new Login(page)
//      * await expect(loginPage.emaolInput, "eaily chka.....").toBeVisible()
//      * await loginPage.login("fff@")
//      */


//     await page.getByText('Applicants').click();
//     await page.getByRole('button', { name: 'filter' }).click();
//     await expect(page.getByRole('tooltip').locator('div').filter({ hasText: '+Organization+Date+Age+Gender' }).first()).toBeVisible();

//     await page.locator('.ant-collapse-expand-icon').first().click();
//     await page.getByLabel('Armenian National Agrarian').check();
//     await page.getByRole('button', { name: 'Add Filter' }).click;
//     await expect (page.locator('.ant-table-row > td:nth-child(3)', { hasText: 'Agriculture' }).first()).toBeVisible();

//   await page.getByText('Project').click();
//   await page.getByText('Applicants').click();
//   await expect (page.locator('.ant-table-row > td:nth-child(3)', { hasText: 'Agriculture' }).first()).toBeVisible();


    
//     await page.waitForTimeout(1000);

//     await page.reload();


//     // const filteredItems = await page.$$('[data-testid="filtered-item"]');
//     // expect(filteredItems).toHaveLength(expectedItemCount);
//   });
// });


// // test.describe('Filter Stability Test', () => {
// //   let pageAfterLogin: any;

// // const BASE_URL = 'https://meetk.analysed.ai';
// // /*
// // const login = async (page: any) => {
// //   await page.goto('https://meetk.analysed.ai/');
// //   await page.getByTestId('email').fill('julieta.simonyan@eif.am', process.env.USERNAME);
// //   await page.getByTestId('password').fill('jul555817J', process.env.PASSWORD);
// //   await page.click('button[type="submit"]');
// //   await page.waitForNavigation(); 
// // }
// // */


// //   test('Filters data and checks stability after reloading', async ({ page }) => {
// //     // await page.goto(`${BASE_URL}/applicants`);

// //     await page.getByRole('button', { name: 'filter' }).click();
// //     await expect(page.getByRole('tooltip').locator('div').filter({ hasText: '+Organization+Date+Age+Gender' }).first()).toBeVisible();

// //     await page.locator('.ant-collapse-expand-icon').first().click();
// //     await page.getByLabel('Armenian National Agrarian').check();
// //     await page.getByRole('button', { name: 'Add Filter' }).click;
// //     await expect (page.locator('.ant-table-row > td:nth-child(3)', { hasText: 'Agriculture' }).first()).toBeVisible();

// //   await page.getByText('Project').click();
// //   await page.getByText('Applicants').click();
// //   await expect (page.locator('.ant-table-row > td:nth-child(3)', { hasText: 'Agriculture' }).first()).toBeVisible();


    
// //     await page.waitForTimeout(1000);

// //     await page.reload();


// //     // const filteredItems = await page.$$('[data-testid="filtered-item"]');
// //     // expect(filteredItems).toHaveLength(expectedItemCount);
// //   });
// // });
import { expect, test } from '@playwright/test';
import { BasePage } from '../pages/basepage';
import {LoginPage} from '../pages/loginPage';
import { MainPage } from '../pages/mainpage';
import { ProjectsPage } from '../pages/projectsPage';
import { AddSubActivities } from './windows/addSubActivites';
import { beforeEach } from 'node:test';
// import {test, logedInTest} from '../fixtures/fixtures';

   
test.describe('Filter Stability Test', () => {
  let pageAfterLogin: any;

const BASE_URL = 'https://meetk.analysed.ai';
/*
const login = async (page: any) => {
  await page.goto('https://meetk.analysed.ai/');
  await page.getByTestId('email').fill('julieta.simonyan@eif.am', process.env.USERNAME);
  await page.getByTestId('password').fill('jul555817J', process.env.PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForNavigation(); 
}
*/
test.beforeEach('Login section', async ({ page }) => {
  await page.goto("https://meetk.analysed.ai")


//Login page
     const loginPage = new LoginPage(page);
     await expect(loginPage.emailInput, "There is no email input").toBeVisible();
     await expect(loginPage.passwordInput, "There is no password input").toBeVisible();
     await loginPage.login("julieta.simonyan@eif.am","jul555817J");
//Main section parts check
    //  const mainPage = new MainPage(page);
    //  await mainPage.mainSection();    

//Projects page    
   
const projectsPage = new ProjectsPage(page);
await projectsPage.projectsSection();

});

  test('Adding sub activity check', async ({ page }) => {

  /*  const response =   await page.request.post('https://apimeetk.analysed.ai/api/auth/sign-in', {
        data: {
            email:"julieta.simonyan@eif.am",
            password:"jul555817J"},
            headers: {
              "content-type": "application/json"
            }

      },)
      console.log(response);
      const responseData = await response.json();

      const data = {
        token: responseData.accessToken,
        user: JSON.stringify({
            id: responseData.id,
            firstName: responseData.firstName,
            lastName: responseData.lastName,
            email: responseData.email          
        }),
        project: responseData.projects[0].id  
         
     }

     console.log("data:::: " + JSON.stringify(data))
    //  const filename = path.resolve(test.info().project.outputDir, ``)
     
     await page.context().addInitScript(storage => {
          for (const [key, value] of Object.entries(storage))
            window.localStorage.setItem(key, value);
      }, data);

      await page.goto("https://meetk.analysed.ai")

      await page.pause()

*/


// Checking the projects and sections availbility
// for (const elements of await projectsPage.projects.all()){
//   await elements.click();
//   }

// for (const elements of await projectsPage.sections.all()){
//     await elements.click();
//     }

    const subActivity = new AddSubActivities(page);
    await subActivity.addSection.click();
    await subActivity.addtemplatebutton.click();
    expect(subActivity.activityWindow).toBeVisible();


  await  subActivity.addSubActivityCheck("New Title", new Date().toLocaleString().split(',')[0]
    , new Date().toLocaleString().split(',')[0], "Some description");
       
await subActivity.addtemplatebutton.click();

expect(page).toHaveTitle("New Title");


// await page.getByText('Applicants').click();
//     await page.getByRole('button', { name: 'filter' }).click();
//     await expect(page.getByRole('tooltip').locator('div').filter({ hasText: '+Organization+Date+Age+Gender' }).first()).toBeVisible();

//     await page.locator('.ant-collapse-expand-icon').first().click();
//     await page.getByLabel('Armenian National Agrarian').check();
//     await page.getByRole('button', { name: 'Add Filter' }).click;
//     await expect (page.locator('.ant-table-row > td:nth-child(3)', { hasText: 'Agriculture' }).first()).toBeVisible();

//   await page.getByText('Project').click();
//   await page.getByText('Applicants').click();
//   await expect (page.locator('.ant-table-row > td:nth-child(3)', { hasText: 'Agriculture' }).first()).toBeVisible();


    
//     await page.waitForTimeout(1000);

//     await page.reload();


    // const filteredItems = await page.$$('[data-testid="filtered-item"]');
    // expect(filteredItems).toHaveLength(expectedItemCount);
  });
});


