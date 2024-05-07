import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { SideBarObject } from "../objects/sideBarObject";

export class SubActivityPage extends BasePage {
    readonly sideBarObject: SideBarObject;

    constructor(page: Page) {
        super(page);
        this.sideBarObject = new SideBarObject(page);
    }
}
