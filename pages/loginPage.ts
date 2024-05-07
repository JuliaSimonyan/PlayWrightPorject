import { Page, Locator } from '@playwright/test';
import { SubActivityPage } from './subActivityPage';

export class LoginPage {
  private page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByLabel("Email Address");
    this.passwordInput = page.getByLabel("Password");
    this.loginButton = page.getByRole("button", {name: 'Sign In'});
  }

  async login(email: string = "julieta.simonyan@eif.am", password: string="jul555817J"): Promise<SubActivityPage> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    return new SubActivityPage(this.page)
  }
}
