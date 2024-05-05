import { Page, Locator } from '@playwright/test';
import {SubActivityElements} from '../windows/addSubActivitiesFields'


export class AddSubActivities {
    private page: Page;
    readonly addSection: Locator;
    readonly activityWindow: Locator;
    readonly addtemplatebutton:Locator;
    readonly elements: SubActivityElements;
 


    constructor (page:Page) {
        this.page = page;
        this.elements = new SubActivityElements(page);
    this.addSection = page.getByRole('button', { name: '+ Add Sub Activity' });
    this.activityWindow = page.locator('div[class="ant-modal sc-cUEOzv sc-iOeugr ZbTdW fPmBIw"]');
    this.addtemplatebutton = page.locator('div[class="ant-card ant-card-bordered cardActive"]').first();
   
    }



async addSubActivityCheck(title: string, startDate: string, endDate: string, description: string):Promise<void> {
    //  await this.addtemplatebutton.isVisible();
    try {
  await this.elements.title.isVisible();
  // await this.elements.title.waitFor({ state: 'visible', timeout: 5000 }); // Wait for 5 seconds for the element to be visible

  await this.elements.title.click();
    await this.elements.title.fill(title);
  } catch (error) {
    console.error('Error occurred while adding sub-activity:', error);
    throw error;
}

   // await this.elements.organization.isVisible();
    await this.elements.organization.click();
    await this.elements.organizationSector.isVisible();
    await this.elements.organizationSector.click();

    await this.elements.description.isVisible();
    await this.elements.description.click();
    await this.elements.description.fill(description);

    await this.elements.meneger.isVisible();

    await this.elements.sector.isVisible();
    await this.elements.sector.click();
    await this.elements.sectorSection.isVisible();
    await this.elements.sectorSection.click();

    await this.elements.region.isVisible();
    await this.elements.region.click();
    await this.elements.regionSection.isVisible();
    await this.elements.regionSection.click();

    await this.elements.startDate.click();
    await this.elements.startDateSection.isVisible();
    await this.elements.startRandomDay.click();
    await this.elements.endDate.click();
    await this.elements.endDateSection.isVisible();
    await this.elements.endRandomDay.click();

    await this.elements.mode.isVisible();
    await this.elements.mode.click();
    await this.elements.modeSection.isVisible();
    await this.elements.modeSection.click();

    await this.elements.technicalSkills.isVisible();
    await this.elements.technicalSkills.uncheck();
    await this.elements.technicalSkills.check();
    await this.elements.hours.click({
        clickCount: 5
      });
    

      await this.elements.sofSkills.isVisible();
      await this.elements.sofSkills.uncheck();

    
  await this.elements.addButton.click();
   

}


}

