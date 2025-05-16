//login steps
import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { resolve } from 'path';
test('test', async ({ page }) => {
  await page.goto('https://platform-qa.terradotta.com/');
  await page.locator('form').filter({ hasText: 'EmailNext' }).getByPlaceholder('Email', { exact: true }).click();
  await page.locator('form').filter({ hasText: 'EmailNext' }).getByPlaceholder('Email', { exact: true }).fill('avirmani63@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('SHIVshashi@0047');
  await page.locator("//span[normalize-space()='Login']").click();

  const settingsIcon = page.locator("//span[contains(@class, 'tde-settings-01')]");

// Wait explicitly for it to be visible and stable
await settingsIcon.waitFor({ state: 'visible', timeout: 10000 });
  await page.locator("//span[@class='pi pi- td tde-settings-01 p-avatar-icon ng-star-inserted']").hover();
  await page.locator("//span[@class='pi pi- td tde-settings-01 p-avatar-icon ng-star-inserted']").click();
  await page.locator("//span[normalize-space()='Role Management']").click();
  await page.getByText('Role Management').click();
  await expect(page.getByRole('heading', { name: 'Role Management' })).toBeVisible();
  await page.locator('input[placeholder="Search"]').fill('my role');
  await page.locator("//td[@headers='display']//span[@class='ng-star-inserted']"); 
   setTimeout(() => {
     page.locator("//span[@class='p-button-icon td tde-edit-01 ng-star-inserted']").click();
  },3000);
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('my role 1');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('my role 1');
  await page.getByRole('button', { name: 'Update' }).click();

  
});