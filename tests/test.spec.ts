import { expect, test } from '@playwright/test';
import { BasePage } from '../pages/basepage';
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


  test('Filters data and checks stability after reloading', async ({ page }) => {

    const response =   await page.request.post('https://apimeetk.analysed.ai/api/auth/sign-in', {
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

      await page.goto("https://meetk.analysed.ai/applicants")
      const basePage = new BasePage(page)

      await page.pause()

    //  await page.request.storageState({path: 'PlayWright\fixtures\auth.json'})
    //  await context.storageState({path: 'PlayWright\fixtures\auth.json'})


    // await page.goto(`${BASE_URL}/applicants`);


    /**
     * const loginPage = new Login(page)
     * await expect(loginPage.emaolInput, "eaily chka.....").toBeVisible()
     * await loginPage.login("fff@")
     */


    await page.getByText('Applicants').click();
    await page.getByRole('button', { name: 'filter' }).click();
    await expect(page.getByRole('tooltip').locator('div').filter({ hasText: '+Organization+Date+Age+Gender' }).first()).toBeVisible();

    await page.locator('.ant-collapse-expand-icon').first().click();
    await page.getByLabel('Armenian National Agrarian').check();
    await page.getByRole('button', { name: 'Add Filter' }).click;
    await expect (page.locator('.ant-table-row > td:nth-child(3)', { hasText: 'Agriculture' }).first()).toBeVisible();

  await page.getByText('Project').click();
  await page.getByText('Applicants').click();
  await expect (page.locator('.ant-table-row > td:nth-child(3)', { hasText: 'Agriculture' }).first()).toBeVisible();


    
    await page.waitForTimeout(1000);

    await page.reload();


    // const filteredItems = await page.$$('[data-testid="filtered-item"]');
    // expect(filteredItems).toHaveLength(expectedItemCount);
  });
});


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
//     // await page.goto(`${BASE_URL}/applicants`);

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
