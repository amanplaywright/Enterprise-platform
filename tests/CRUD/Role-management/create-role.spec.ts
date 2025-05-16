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
  //
  await page.locator('.pi.pi-.td.tde-settings-01.p-avatar-icon.ng-star-inserted').waitFor({timeout:40000});
  await page.locator('.pi.pi-.td.tde-settings-01.p-avatar-icon.ng-star-inserted').click();
  await expect(page.locator('a').filter({ hasText: 'Role Management' })).toBeVisible();
  await expect(page.getByRole('dialog')).toContainText('Role Management');
  await page.locator('a').filter({ hasText: 'Role Management' }).click();
  await page.waitForSelector("//h2[normalize-space()='Role Management']")
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('my role');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('my role');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  
    

  
  // await expect(page.getByLabel('Create')).toContainText('Create');
  // await page.getByRole('button', { name: 'Create' }).click();
  // await page.getByRole('textbox', { name: 'Name' }).click();
  // await page.getByRole('textbox', { name: 'Name' }).fill('my role');
  // await page.getByRole('textbox', { name: 'Name' }).press('ControlOrMeta+a');
  // await page.getByRole('textbox', { name: 'Name' }).press('ControlOrMeta+c');
  // await page.getByRole('textbox', { name: 'Description' }).click();
  // await page.getByRole('textbox', { name: 'Description' }).fill('my role');
  // await page.getByRole('button', { name: 'Create' }).click();
  // await expect(page.getByRole('alert')).toContainText('Role Creation');
  // await expect(page.getByRole('alert')).toContainText('Role created successfully');
  // await page.getByRole('button', { name: 'Close' }).click();
  // await page.getByRole('button', { name: 'Update' }).click();
  // await expect(page.getByRole('alert')).toContainText('Role updated successfully');
  // await page.getByRole('button', { name: 'Close' }).click();

});