import { Page, Locator } from '@playwright/test';
import { SelectDateWindow } from '../windows/selectDateWindow';
import { BasePage } from './basePage';


export class AddedProjectWindow extends  BasePage{
  readonly title: Locator;
  readonly startProjectButton: Locator;

  constructor(page: Page)  {
    super(page);
    this.title = page.locator('div[class="ant-col ant-col-4 sc-jNJNQp ldGlek"]');
    this.startProjectButton = page.getByRole('button', { name: 'Start Course' });
  }

}

