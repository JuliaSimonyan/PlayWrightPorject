import { Page, Locator } from '@playwright/test';

export class SubActivityElements{
    private page: Page;
    readonly title: Locator;
    readonly organization: Locator;
    readonly description: Locator;
    readonly meneger: Locator;
    readonly sector: Locator;
    readonly region: Locator;
    readonly startDate: Locator;
    readonly endDate: Locator;
    readonly mode: Locator;
    readonly duration: Locator;
    readonly partnerOrganization: Locator;
    readonly startDateSection: Locator;
    readonly endDateSection: Locator;
    readonly startRandomDay:Locator;
    readonly endRandomDay:Locator;
     readonly organizationSector:Locator;
     readonly sectorSection: Locator;
     readonly regionSection: Locator;
     readonly modeSection: Locator;
     readonly technicalSkills:Locator;
     readonly sofSkills:Locator;
    readonly addButton:Locator;
    readonly hours:Locator;
   

    constructor(page:Page){
        const min = 7;
        const max = 28;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    this.page = page;
    this.title = page.getByLabel('Title');
    this.organization = page.getByLabel('Organization', { exact: true });
    this.description = page.getByLabel('Description');
    this.meneger = page.getByLabel('Sub-Activity Manager');
    this.sector = page.getByLabel('Sector');
    this.region = page.getByLabel('Region');
this.startDate = page.getByLabel('Start Date');
this.endDate = page.getByLabel('End Date');
this.mode = page.getByLabel('Mode');
this.duration = page.getByLabel('Duration');
this.partnerOrganization = page.getByLabel('Partner Organization');
this.startDateSection = page.locator( '.ant-picker-body');
this.endDateSection =    page.getByRole('table');
this.startRandomDay = page.getByRole('cell', { name: `${randomNumber}`, exact: true }).locator('div');
this.endRandomDay = page.getByRole('cell', { name: `${randomNumber + 2}` }).locator('div'); 
this.organizationSector =  page.getByText('Enterprise Incubator Foundation (EIF)', { exact: true });
this.sectorSection =  page.getByLabel('Add Sub-Activity').getByText('ICT/High-tech');
this.regionSection =  page.getByLabel('Add Sub-Activity').getByText('Lori');
this.modeSection = page.getByTitle('Offline').locator('div');
this.technicalSkills = page.getByLabel('Technical skills');
this.sofSkills = page.getByLabel('Soft skills');
this.addButton = page.getByRole('button', { name: 'Add', exact: true });
this.hours = page.locator('div').filter({ hasText: /^Technical skillshr$/ }).getByLabel('Increase Value');
}
}

