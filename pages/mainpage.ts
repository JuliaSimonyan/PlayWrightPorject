import { Page, Locator, expect } from '@playwright/test';
import { selectors } from '../constants/loginPageConstants';

export class MainPage {
  private page: Page;
  readonly navbar: Locator;
  readonly usersection: Locator;
  readonly maintable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navbar = page.locator('div[class="ant-layout-sider-children"]');
    this.usersection = page.locator('div[class="ant-col"]');
    this.maintable = page.locator('div[class="ant-table-container"]');
  }

  async mainSection(): Promise<void> {
    await  this.navbar.isVisible();
    await this.usersection.isVisible();
    await this.maintable.isVisible();
  }
}
