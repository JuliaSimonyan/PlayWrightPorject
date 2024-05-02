import { test as base, type Page, type Locator } from '@playwright/test';
import { selectors } from '../constants/loginPageConstants';


export class LoginPage {
  page: Page;
  readonly emailInpit: Locator;

  constructor(page: Page) {
    this.page = page;
    // this.emailInpit = page.locator(selectors.emailInput)
    this.emailInpit = page.getByPlaceholder("Email input")
  }

  async login(email, pass) {
    await this.emailInpit.fill(email),
    //pass
    //button click
  }
}
