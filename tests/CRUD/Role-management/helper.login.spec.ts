import { Page } from '@playwright/test';
export async function login(page:Page) {
    
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
  await page.locator("//div[@class='cursor-pointer ng-star-inserted']//div[@class='p-avatar p-component']").click();
};