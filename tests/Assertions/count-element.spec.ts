import{test,expect} from'@playwright/test';
import { TIMEOUT } from 'dns';
test('Login page element count assertions',async({page})=>{
    //Navigate to platform-qa environment
    await page.goto("https://platform-qa.terradotta.com/");
    await (page.locator("//h1[normalize-space()='Login to TD Enterprise Platform']")).waitFor({timeout:30000})
    await expect (page.locator("//h1[normalize-space()='Login to TD Enterprise Platform']")).toBeVisible();
    await expect(page.locator("//h1[normalize-space()='Login to TD Enterprise Platform']")).toHaveCount(1);

    //3. Email input field
  await expect(page.locator("//input[@id='email-input']")).toHaveCount(1);

  // 4. "Next" button span
  await expect(page.locator("//span[normalize-space()='Next']")).toHaveCount(1);

  // 5. Divider text: "Or login with"
  await expect(page.locator("//span[normalize-space()='Or login with']")).toHaveCount(1);

  // 6. SSO email input
  await expect(page.locator("//input[@id='sso-email-input']")).toHaveCount(1);

  // 7. SSO email label
  await expect(page.locator("//label[@for='sso-email-input']")).toHaveCount(1);

  // 8. Institution SSO button
  await expect(page.locator("//span[normalize-space()='Institution SSO']")).toHaveCount(1);

  // 9. Forgot Password link
  await expect(page.locator("a[href='/forgot-password']")).toHaveCount(1);

  // 10. Create Account link
  await expect(page.locator("a[href='/register']")).toHaveCount(1);
    
})
