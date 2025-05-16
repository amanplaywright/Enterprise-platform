import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://platform-qa.terradotta.com/');
  await page.locator('form').filter({ hasText: 'EmailNext' }).getByPlaceholder('Email', { exact: true }).click();
  await page.locator('form').filter({ hasText: 'EmailNext' }).getByPlaceholder('Email', { exact: true }).fill('avirmani63@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').press('CapsLock');
  await page.locator('input[type="password"]').fill('SHIV');
  await page.locator('input[type="password"]').press('CapsLock');
  await page.locator('input[type="password"]').fill('SHIVshashi@0047');
  await page.locator("//span[normalize-space()='Login']").click();
  await page.locator("//span[@class='pi pi- td tde-settings-01 p-avatar-icon ng-star-inserted']").click();
  await page.locator("//span[normalize-space()='User Management']").click();
  await expect(page).toHaveURL('https://platform-qa.terradotta.com/core-admin/user-management');
//   await expect(page.getByRole('textbox', { name: 'Search' })).toBeVisible();
//   await expect(page.getByRole('button', { name: 'Create' })).toBeVisible();
//   await page.getByRole('button', { name: 'Reset' }).click();
});