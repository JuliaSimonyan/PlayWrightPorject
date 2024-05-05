import { Page, Locator } from '@playwright/test';

export class ProjectsPage {
  private page: Page;
  readonly projectbutton: Locator;
  readonly  mainDiscription: Locator;
  readonly heading: Locator;
  readonly projects: Locator;
  readonly sections: Locator;

  constructor(page: Page) {
    this.page = page;
    this.projectbutton = page.getByText('Project');
    this.mainDiscription = page.locator('div[class="ant-col ant-col-14 ant-col-offset-1"]');
    this.heading = page.locator('div[class="ant-col ant-col-4 sc-jNJNQp ldGlek"]');
    this.projects = page.locator('div[class="ant-row ant-row-middle sc-GhhNo hnoChW"]');
    this.sections = page.locator('div[class="ant-row ant-row-no-wrap ant-row-middle sc-dwnOUR kJzNvw"]');
  }

  async projectsSection(): Promise<void> {
    await this.projectbutton.click();
    await  this.heading.isVisible();
    await this.mainDiscription.isVisible();
   /*const allprojects =this.projects.all;
    allprojects.forEach(element => {
        await this.projects.click;
    });
  }*/
}
}
