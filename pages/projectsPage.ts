import { Page, Locator } from '@playwright/test';
import { SideBarObject } from '../objects/sideBarObject';
import { ActiveTemplateWindow } from '../windows/ActiveTemplateWindow';
import { BasePage } from './basePage';

export class ProjectsPage extends BasePage {
  readonly addSubActivityButton: Locator;
  readonly sideBarObject: SideBarObject;


  constructor(page: Page) {
    super(page)
    this.sideBarObject = new SideBarObject(page);
    this.addSubActivityButton = page.getByRole('button', { name: '+ Add Sub Activity' });
  }

  async openActiveTempaltesWindow() {
   await this.addSubActivityButton.click();
    return new ActiveTemplateWindow(this.page)
  }

}
