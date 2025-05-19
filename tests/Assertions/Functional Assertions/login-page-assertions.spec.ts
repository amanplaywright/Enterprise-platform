import { test, expect } from '@playwright/test';

test.describe('Login Screen - Email Validation', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https:/platform-qa.terradotta.com/'); //login URL
  });

  test('should show validation error when email is empty', async ({ page }) => {
    await page.click("//span[normalize-space()='Next']"); // trigger validation on next
    const error = await page.locator('text=Email is required'); // actual error message
    await expect(error).toBeVisible();
  });

  test('should show validation error for invalid email format', async ({ page }) => {
    await page.fill("//input[@id='email-input']", 'abc');
    await page.click("//span[normalize-space()='Next']");
    const error = await page.locator('text=Invalid Email format'); // actual error
    await expect(error).toBeVisible();
  });

  test('should proceed to password screen for valid email', async ({ page }) => {
    await page.fill("//input[@id='email-input']", 'avirmani63@gmail.com');
    await page.click("//span[normalize-space()='Next']");

    // Wait for the password field or password screen element
    const passwordInput = page.locator("//input[@id='password-input']"); //  on the password screen
    await expect(passwordInput).toBeVisible();
  });

});
