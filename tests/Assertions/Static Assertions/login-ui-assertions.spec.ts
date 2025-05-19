import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('Page load and title check', async ({ page }) => {
  // 1. Navigate to the page and verify URL + title
  await page.goto("https://platform-qa.terradotta.com/");
 await page.locator("img[alt='Institution Logo']").waitFor({timeout:20000})
  await expect(page.locator("img[alt='Institution Logo']")).toBeVisible();
  
  await expect(page).toHaveURL("https://platform-qa.terradotta.com/login?redirect=%2F");
  await expect(page).toHaveTitle("QA Platform Site");

  // 2. Heading Assertion("Login to TD Enterprise Platform")
  await page.locator("//h1[normalize-space()='Login to TD Enterprise Platform']").waitFor({ timeout: 20000 });
  await expect (page.locator("//h1[normalize-space()='Login to TD Enterprise Platform']")).toContainText("Login to");

  // 3. Email field (label + input)
  await page.locator("//input[@id='email-input']");
  await expect (page.locator("//input[@id='email-input']")).toBeVisible();
  //--justified email field is visible
  await expect (page.locator("//input[@id='email-input']")).toBeEmpty();
  //--justified email field is empty first
  //await expect(page.locator("//input[@type='email']")).toHaveAttribute('placeholder','Email');
  //-justify it contains email placeholder at input field
  await page.locator("//span[normalize-space()='Next']")
  await expect (page.locator("//span[normalize-space()='Next']")).toBeVisible();
   //divider text "or login with" is visible
   await expect (page.locator("//span[normalize-space()='Or login with']")).toBeVisible();
   // sso email input to be visible and empty
   await expect (page.locator("//input[@id='sso-email-input']")).toBeVisible();
   await expect (page.locator("//input[@id='sso-email-input']")).toBeEmpty();
   //sso label to be visible
   await expect (page.locator("//label[@for='sso-email-input']")).toBeVisible();
   await expect (page.locator("//label[@for='sso-email-input']")).toHaveText("Email");
   //institution sso button
   await expect(page.locator("//span[normalize-space()='Institution SSO']")).toBeVisible();
   await expect(page.locator("//span[normalize-space()='Institution SSO']")).toHaveText("Institution SSO")
   //forgout your password
   await expect (page.locator("a[href='/forgot-password']")).toBeVisible();
   await expect(page.locator("a[href='/forgot-password']")).toHaveText("Forgot your Password?");
   await expect(page.locator("a[href='/register']")).toBeVisible();
   await expect(page.locator("a[href='/register']")).toHaveText("Create Account");
    
  })