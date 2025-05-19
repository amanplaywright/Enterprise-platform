// LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Step 1: Username field
  private usernameInput = () => this.page.locator("//input[@id='email-input']"); // update if needed
  private nextButton = () => this.page.locator('button:has-text("Next")');

  // Step 2: Password field
  private passwordInput = () => this.page.locator("//input[@id='password-input']"); // update if needed
  private loginButton = () => this.page.locator('button:has-text("Login")');

  async enterUsername(username: string) {
    await this.usernameInput().fill(username);
  }

  async clickNext() {
    await this.nextButton().click();
  }

  async enterPassword(password: string) {
    await this.passwordInput().fill(password);
  }

  async clickLogin() {
    await this.loginButton().click();
  }

  // Final method to do full login
  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.clickNext();
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
