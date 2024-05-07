import { Locator, Page } from "@playwright/test";
import { ProjectsPage } from "../pages/projectsPage";

export class SideBarObject {
    readonly page: Page;
    readonly project: Locator;
    readonly subActivities:Locator;

    constructor(page: Page) {
        this.page =page;
        this.project = page.getByText('Project');
        this.subActivities =  page.getByRole('menuitem', { name: 'Sub Activities' });
    }

    async openProjectsPage() {
        await this.project.click();
        return new ProjectsPage(this.page);
    }
}