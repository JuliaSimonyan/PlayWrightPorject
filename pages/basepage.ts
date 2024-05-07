import { Page, Locator } from '@playwright/test';
import { SideBarObject } from '../objects/sideBarObject';


export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;

  }
}
