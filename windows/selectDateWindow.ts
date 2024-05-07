import { Page, Locator } from '@playwright/test';
import { selectors } from '../constants/windows/selectDateWindowConstants';

export class SelectDateWindow {
    private page: Page;
    readonly dateWindow: Locator;
    readonly startDate: Locator;
    private readonly endDate: Locator;
    readonly startRandomDay: Locator;
    readonly endRandomDay: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dateWindow = page.locator(selectors.DATE_WINDOW);
        this.startDate = this.dateWindow.locator(selectors.START_DATE);
        this.endDate = page.locator(selectors.END_DATE);
    }

    async getEndDate() {
        const count = await this.endDate.count();
        const randomNumber = Math.floor(Math.random() * count ) + 1;
        return this.endDate.nth(randomNumber)
    }

    async selectStartDate() {
        await this.startDate.click()
    }

    async selectEndDate() {
        (await this.getEndDate()).click;
    }
}

