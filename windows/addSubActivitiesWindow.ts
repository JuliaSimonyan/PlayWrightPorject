import { Page, Locator } from '@playwright/test';
import { SelectDateWindow } from './selectDateWindow';
import { AddedProjectWindow } from '../pages/addedProjectPage';

export class AddSubActivity {
    private page: Page;
    readonly title: Locator;
    readonly organization: Locator;
    readonly description: Locator;
    readonly meneger: Locator;
    readonly sector: Locator;
    readonly region: Locator;
    readonly startDateInput: Locator;
    readonly endDateInput: Locator;
    readonly mode: Locator;
    readonly duration: Locator;
    readonly partnerOrganization: Locator;
    readonly technicalSkills: Locator;
    readonly sofSkills: Locator;
    readonly addButton: Locator;
    readonly hours: Locator;


    constructor(page: Page) {
        this.page = page;
        this.title = page.getByLabel('Title');
        this.organization = page.getByLabel('Organization', { exact: true });
        this.description = page.getByLabel('Description');
        this.meneger = page.getByLabel('Sub-Activity Manager');
        this.sector = page.getByLabel('Sector');
        this.region = page.getByLabel('Region');
        this.mode = page.getByLabel('Mode');
        this.startDateInput = page.getByLabel('Start Date');
        this.endDateInput = page.getByLabel('End Date');
        this.duration = page.getByLabel('Duration');
        this.partnerOrganization = page.getByLabel('Partner Organization');
        this.technicalSkills = page.getByLabel('Technical skills');
        this.sofSkills = page.getByLabel('Soft skills');
        this.addButton = page.getByRole('button', { name: 'Add', exact: true });
        this.hours = page.locator('div').filter({ hasText: /^Technical skillshr$/ }).getByLabel('Increase Value');
    }


    async selectOrganization(organization: string = 'Enterprise Incubator Foundation (EIF)') {
        await this.organization.click();
        await this.page.getByText(organization, { exact: true }).click();
    }

    async selectSector(sector: string = 'ICT/High-tech') {
        await this.sector.click();
        await this.page.getByLabel('Add Sub-Activity').getByText(sector).click();
    }
    async selectRegion(region: string = 'Lori') {
        await this.region.click();
        await this.page.getByLabel('Add Sub-Activity').getByText(region).click();
    }
    async selectMode(mode: string = 'Offline') {
        await this.mode.click();
        await this.page.getByTitle(mode).locator('div').click();
    }

    private async openStartDateWindow() {
        await this.startDateInput.click();
        return new SelectDateWindow(this.page)
    }
    private async openEndDateWindow() {
        await this.endDateInput.click();
        return new SelectDateWindow(this.page)
    }

    async selectStartDate() {
        const window = await this.openStartDateWindow();
        await window.selectStartDate()
        return this;
    }

    async selectEndDate() {
        const window = await this.openEndDateWindow();
        await window.selectEndDate();
        return this;
    }

    private async fillTitle(title: string = "Title") {
        await this.title.fill(title)
        return this;
    }
    private async fillDescription(description: string = "Some description") {
        await this.description.fill(description)
        return this;
    }
    private async fillPartnerOrganization(partner: string = "Our partner") {
        await this.partnerOrganization.fill(partner)
        return this;
    }


    async fillAddSubActivityFileds() {
        await this.fillTitle();
        await this.selectOrganization();
        await this.fillDescription();
        await this.selectSector();
        await this.selectRegion();
        await this.selectStartDate();
        await this.selectEndDate();
        await this.selectMode();
        await this.fillPartnerOrganization();

        await this.addButton.click();
        return new AddedProjectWindow(this.page);
        
    }

}

