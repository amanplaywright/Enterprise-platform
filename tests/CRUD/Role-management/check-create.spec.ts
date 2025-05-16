import{test,expect, Page} from '@playwright/test'
import { login } from './helper.login.spec'
test('test', async ({ page }) => {
    await expect(page.locator('header span').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Go Home' })).toBeVisible();
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
    