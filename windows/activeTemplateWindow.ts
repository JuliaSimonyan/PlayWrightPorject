import { Page, Locator } from '@playwright/test';
import { AddSubActivity } from './addSubActivitiesWindow'
import { SelectDateWindow } from './selectDateWindow';


export class ActiveTemplateWindow {
  private page: Page;
  readonly title: Locator;
  readonly addTemplateButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.title = page.getByText('Active Templates');
    this.addTemplateButton = page.getByText('JavaScript React Native/');
  }

  async openSubActivityWindow() {
    await this.title.isVisible();
    await this.addTemplateButton.isVisible();
    await this.addTemplateButton.click();

    return new AddSubActivity(this.page);
  }
}

